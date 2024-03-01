// App.js
import React, { useState } from 'react';
import PublicData from './PublicData';
import UserProfileSearch from './UserProfileSeacrh'

const App = () => {
  const [currentPage, setCurrentPage] = useState('publicData');

  const renderPage = () => {
    switch (currentPage) {
      case 'publicData':
        return <PublicData />;
      case 'userProfileSearch':
        return <UserProfileSearch />;
      default:
        return null;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('publicData')}>Public Data</button>
        <button onClick={() => setCurrentPage('userProfileSearch')}>User Profile Search</button>
      </nav>
      
      {renderPage()}
    </div>
  );
};

export default App;
