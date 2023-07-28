import React from 'react';
//import Navbar from './Navbar'; // Use './' to indicate the file path for importing components
import './App.css'; // Use './' to indicate the file path for importing CSS files
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct';


const App = () => {
  return (
    <div>
      <DeleteProduct /> 
    </div>
  );
};

export default App;
