import Listing from '../models/listing.model.js';
import { errorHandler } from '../utils/error.js';
import { geocodeAddress } from '../utils/geoCode.js';


export const createListing = async (req, res, next) => {
  try {
    const { address } = req.body;

    if (!address) {
      throw new Error("Address is required.");
    }

    // Default coordinates (e.g., center of India)
    const DEFAULT_COORDS = {
      lat: 20.5937,  // Default latitude (India's approximate center)
      lon: 78.9629,  // Default longitude
    };

    // Geocode the address to get lat/lon
    const { lat, lon } = await geocodeAddress(address);

    // Use geocoded values if both exist; otherwise, fall back to defaults
    const finalLat = lat ?? DEFAULT_COORDS.lat;
    const finalLon = lon ?? DEFAULT_COORDS.lon;

    console.log("Resolved Coordinates:", { finalLat, finalLon });

    const listingData = {
      ...req.body,
      latitude: finalLat,
      longitude: finalLon,
    };

    const listing = await Listing.create(listingData);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, 'Listing not found!'));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, 'You can only delete your own listings!'));
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json('Listing has been deleted!');
  } catch (error) {
    next(error);
  }
};

// import { geocodeAddress } from '../utils/geoCode.js';

export const updateListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, 'Listing not found!'));
    }

    if (req.user.id !== listing.userRef) {
      return next(errorHandler(401, 'You can only update your own listings!'));
    }

    // Geocode address if it exists in the request
    if (req.body.address) {
      const { lat, lon } = await geocodeAddress(req.body.address);
      req.body.latitude = lat;
      req.body.longitude = lon;
    }

    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};

export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return next(errorHandler(404, 'Listing not found!'));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

export const getListings = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;
    let offer = req.query.offer;

    if (offer === undefined || offer === 'false') {
      offer = { $in: [false, true] };
    }

    let furnished = req.query.furnished;

    if (furnished === undefined || furnished === 'false') {
      furnished = { $in: [false, true] };
    }

    let parking = req.query.parking;

    if (parking === undefined || parking === 'false') {
      parking = { $in: [false, true] };
    }

    let type = req.query.type;

    if (type === undefined || type === 'all') {
      type = { $in: ['sale', 'rent'] };
    }

    const searchTerm = req.query.searchTerm || '';

    const sort = req.query.sort || 'createdAt';

    const order = req.query.order || 'desc';

    const listings = await Listing.find({
      name: { $regex: searchTerm, $options: 'i' },
      offer,
      furnished,
      parking,
      type,
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};
