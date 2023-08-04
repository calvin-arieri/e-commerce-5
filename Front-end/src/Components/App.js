import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './navbar/NavBar';
import Account from './pages/Account';
import Cart from './pages/Cart';
import LogIn from './login/LogIn';
import SignUp from './Signup/SignUp';
import Dashboard from './seller/Dashboard';
import SellerProducts from './seller/SellerProducts'
import SellerOrders from './seller/SellerOrders';
import AddProduct from './addproduct/AddProduct';
import SellerPage from './pages/SellerPage';


const App = () => {
  return (
    // <Router>
    <div>
      
      <NavBar />


      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path="/Account" element={<SellerPage/>} >
          <Route path='/Account/SellerPage' elements={<Dashboard />} />
          <Route path='/Account/Products' elements={<SellerProducts />} />
          <Route path='/Account/Orders' elements={<SellerOrders />} />
          <Route path='/Account/Add' elements={<AddProduct />} />
        </Route>
        <Route path='/LogIn' element={<LogIn />} /> 
        <Route path="/SignUp"  element={<SignUp />} /> 
        <Route path="/Cart" element={<Cart />} />
        
      </Routes>

    </div>
    // </Router>
   


  );
};



export default App;
