import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
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
import Footer from './footer/Footer';
import SideBar from './pages/home/SideBar';
import Description from './pages/Description';
import SlideCard from './pages/home/SlideCard';





const App = () => {
  return (
   
    <div>
      <SlideCard />

      {/* <Description /> */}
      
      

       {/* <NavBar />


      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path="/Account" element={<SellerPage/>} />      
        <Route path='/LogIn' element={<LogIn />} /> 
        <Route path="/SignUp"  element={<SignUp />} /> 
        <Route path="/Cart" element={<Cart />} />
        
        
      </Routes> */}

      


    </div>
   
   


  );
};



export default App;
