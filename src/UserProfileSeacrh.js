// UserProfileSearch.js
import React, { useState } from 'react';

const UserProfileSearch = () => {
  const [username, setUsername] = useState('');
  const [userProfile, setUserProfile] = useState(null);

  const handleSearch = () => {
    // Log the username to verify it's correct
    console.log('Username:', username);

    // Implement fetching user profile data based on the entered username
    fetch(`https://lichess.org/api/user/${username}`)
      .then(response => response.json())
      .then(data => {
        // Log the fetched data
        console.log('Fetched Data:', data);
        setUserProfile(data);
      })
      .catch(error => console.error('Error fetching user profile:', error));
  };

  return (
    <div>
      <h2>User Profile Search</h2>
      <label htmlFor="username">Enter Lichess Username:</label>
      <input
        type="text"
        id="username"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {userProfile && (
        <div>
          <h3>User Profile</h3>
          <pre>{JSON.stringify(userProfile, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default UserProfileSearch;
