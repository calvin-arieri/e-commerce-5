import React from 'react'
import { NavLink } from 'react-router-dom';


function SellerPage() {
  return (
    <div>
        <div>
        <NavLink to='/Dashboard'  >Dashboard</NavLink>
        <NavLink to='/Account/Products'  >Products</NavLink>
        <NavLink to='/Account/Orders'  >Orders</NavLink>
        <NavLink to='/Account/Add'  >Add Product</NavLink>
        </div>
        <div>

        </div>
    </div>
  )
}

export default SellerPage