import React from 'react'
import { NavLink } from 'react-router-dom';
import "./SellerPage.css"
import Dashboard from '../seller/Dashboard';


function SellerPage() {
  return (
    <div className='main-account'>
      <div className='sidenav-bar'>
        <div> <NavLink to='/Dashboard' >Dashboard</NavLink></div>       
        <div><NavLink to='/Account/Products' >Products</NavLink></div>
        <div><NavLink to='/Account/Orders' >Orders</NavLink></div>
        <div><NavLink to='/Account/Add'  >Add Product</NavLink></div>
        <div><NavLink to='/Account/Add'  >UpdateProfile</NavLink></div>
      </div>
      <div className='changes-56'>
        <Dashboard />
      </div>      
    </div>
  )
}

export default SellerPage