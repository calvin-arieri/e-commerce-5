import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import "./seller.css"
import DeleteSession from '../handleSession/DeleteSession';

function SellerPage() {
  return (
    <div className = "seller-page-container">

        <div className='left-bar-side'>
        <div className='side-nav-intro'>
        <div>
          <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt="user"/>
        </div>
        
        <p>
          <span>Augustine</span> <span>Mwangi</span>
        </p>
        <NavLink to='/admin/update'>Update</NavLink>
      </div>
        <NavLink to='/admin/dashboard'  >Dashboard</NavLink>
        <NavLink to='/admin/products'  >Products</NavLink>
        <NavLink to='/admin/orders'  >Orders</NavLink>
        <NavLink to='/admin/add'  >Add Product</NavLink>
        <DeleteSession />
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default SellerPage