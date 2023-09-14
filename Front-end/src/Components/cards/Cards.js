import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom';
import './Cards.css'
import Description from '../pages/Description';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';


function Cards({products}) {
  function handleClick(e){
    Cookies.set('product_id', e.target.id)
  }  
  return (
    <div className="bg-white py-10">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 xl:grid-cols-7 gap-1 ">
    {products.map((product) => (
      <div className="bg-white shadow-2xl w-26 border-none rounded-lg shadow-md overflow-hidden p-2" key={product.id}>
        <img className="h-48 w-full object-cover mb-4 rounded-md" src={product.image_url} alt="product" />
        <h4 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h4>
        <p className="text-gray-500 mb-4">${product.price.toFixed(2)}         <button className="btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">          
          <NavLink to="/Description" id={product.id} onClick={handleClick}>Buy Now</NavLink>
        </button> </p>        

      </div>
    ))}
  </div>
</div>

  )
}

export default Cards
