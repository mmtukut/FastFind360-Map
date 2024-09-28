import React, { useEffect } from "react";
import { useMap } from 'react-leaflet';
import L from 'leaflet';

function MarkerList({ infrastructureData }) {
    const map = useMap();

    useEffect(() => {
        if (map&& infrastructureData.length > 0){
            infrastructureData.forEach(item =>{
                const marker = L.marker([item.latitude, item.longitude]).addTo(map);
                marker.bindPopup();
            });
        }
    }, [map, infrastructureData]);
    return null; //No need to render anything
}

export default MarkerList;