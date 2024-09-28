import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import MarkerList from './MarkerList';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const center = [10.2892, 11.1733]; // Approximate center of Gombe State

//Dummy fetchData function 
const fetchData = async () => {
  //Simulating fetching data
  return[
    { id: 1, name: "Hospital", Position: [10.2892, 11.1733] },
    { id: 2, name: "School", Position: [10.2900, 11.1750] },
    //Add more markers here
  ];
};


function AddMarkerToMap() {
  const map = useMap();

  useEffect(() => {
    if (map) {
      //Add a layer or other map-related operations safely here
      const marker = L.marker(center).addTo(map); //Adding marker to the map
      marker.bindPopup("<b> Gombe State Center</b>").openPopup();

      console.log('Map loaded:', map);
    }
  }, [map]);
  return null; //No need to render anything
}

function Map() {
  const [infrastructureData, setInfrastructureData] = useState([]);

  useEffect(() => {
    const fetchMarkers = async () => {
      const data = await fetchData();
      setInfrastructureData(data);
    };

    fetchMarkers();
  }, []);

  return (
    <MapContainer center={center} zoom={15} style={{ height: '100vh', width: '100%'}}>
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Add more markers and layers here */}
      <AddMarkerToMap/>
    </MapContainer>
  );
}


export default Map;