import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Don't forget to import the Leaflet CSS

const icon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = ({ latitude, longitude }) => {
  return (
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '400px', width: '100%' , marginTop:'10px' , padding:'10px' }} className='datk:bg-gray-800'>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <Marker draggable={true} position={[latitude, longitude]} icon={icon}>
        <Popup>
          Current Location
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
