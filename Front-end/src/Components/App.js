import React from 'react';
import Navbar from './Navbar'; // Use './' to indicate the file path for importing components
import './App.css'; // Use './' to indicate the file path for importing CSS files
import Cards from './Cards';

const App = () => {
  return (
    <div>
      <Navbar />
      <Cards/>
    </div>
  );
};

export default App;
