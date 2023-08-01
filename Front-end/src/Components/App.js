import React from 'react';
//import Navbar from './Navbar'; // Use './' to indicate the file path for importing components
import './App.css'; // Use './' to indicate the file path for importing CSS files
import NavScrollExample from './navbar/NavScrollExample';
import Footer from './footer/Footer';

const App = () => {
  return (
    <div>
      <>
      <NavScrollExample />
      <Footer />
      </>
    </div>
  );
};

export default App;
