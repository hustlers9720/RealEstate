// src/components/AddressAutocomplete.jsx
import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const AddressAutocomplete = ({ onSelect }) => {
  return (
    <GooglePlacesAutocomplete
      apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      selectProps={{
        onChange: onSelect,
        placeholder: 'Search Address...',
      }}
    />
  );
};

export default AddressAutocomplete;
