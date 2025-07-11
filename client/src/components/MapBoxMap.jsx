import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default icon issue in React
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default function MapBoxMap({ address }) {
  const defaultCoords = [28.6139, 77.209]; // fallback to New Delhi

  return (
    <div className='h-[400px] w-full rounded-lg overflow-hidden'>
      <MapContainer center={defaultCoords} zoom={13} scrollWheelZoom={false} className='h-full w-full'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={defaultCoords}>
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
