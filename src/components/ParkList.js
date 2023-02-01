import React from 'react';

const ParkList = ({ parks }) => {
    return (
        <div>
        <h2>Nearby Parks:</h2>
        <ul>
            {parks.map((park) => (
            <li key={park.name}>{park.name}</li>
            ))}
        </ul>
        </div>
    );
}

export default ParkList;