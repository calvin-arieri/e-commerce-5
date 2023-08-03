import React from 'react';
<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './navbar/NavBar';
import Account from './pages/Account';
import Cart from './pages/Cart';


const App = () => {
  return (
    // <Router>
    <div>
      <NavBar />


      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path="/Account" element={<Account/>} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>

=======
import './App.css'; // Use './' to indicate the file path for importing CSS files
const App = () => {
  return (
    <div>      
>>>>>>> Development
    </div>
    // </Router>
   


  );
};



export default App;
