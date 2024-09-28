import React from 'react';

function InfoWindow({ data }) {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>Type: {data.type}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default InfoWindow;