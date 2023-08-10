import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import NavBar from './navbar/NavBar';
import Cart from './pages/Cart';
import LogIn from './login/LogIn';
import SignUp from './Signup/SignUp';
import Dashboard from './seller/Dashboard';
import SellerPage from './pages/SellerPage';
import SellerProducts from './seller/SellerProducts';
import SellerOrders from './seller/SellerOrders';
import AddProduct from './addproduct/AddProduct';
import UpdateProfile from './updateprofile/UpdateProfile';
import Description from './pages/Description';



const App = () => {
  return (
 
    <div>    
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path="/admin/" element={<SellerPage/>} >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products' element={<SellerProducts />} />
          <Route path='orders' element={<SellerOrders />} />
          <Route path='add' element={<AddProduct />} />
          <Route path='update' element={<UpdateProfile />} />
        </Route>
        <Route path='/LogIn' element={<LogIn />} /> 
        <Route path="/SignUp"  element={<SignUp />} /> 
        <Route path="/Cart" element={<Cart />} />

        
      </Routes>

      


    </div>
 
   
   


  );
};



export default App;
