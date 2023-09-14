import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import "./seller.css"
import DeleteSession from '../handleSession/DeleteSession';

function SellerPage() {
  return (
    <div className = "seller-page-container">

        <div className='left-bar-side'>
        <div className='side-nav-intro'>
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