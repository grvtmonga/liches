// PublicData.js
import React, { useState, useEffect } from 'react';
const PublicData = () => {
  const [publicData, setPublicData] = useState([]);

  useEffect(() => {
    // Fetch public data from Lichess API
    fetch('https://lichess.org/api/user')
      .then(response => response.json())
      .then(data => setPublicData(data))
      .catch(error => console.error('Error fetching public data:', error));
  }, []);

  return (
    <div>
      <h2>Lichess Public Data</h2>
      <ul>
        {publicData.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default PublicData;
