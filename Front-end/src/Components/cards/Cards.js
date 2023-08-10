import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom';
import './Cards.css'
import Description from '../pages/Description';
import { NavLink } from 'react-router-dom';


function Cards() {
  const [products, setProducts] = useState([])
 
  useEffect (() => {
    fetch('http://127.0.0.1:5555/products')
    .then(res => {
      return res.json()
    }).then(data => {
      setProducts(data)
    });
  },[])

  function handleBuyClick() {
    alert ("see the item specs")
  }
  
  return (
    <div className="bg-white py-10">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
    {products.map((product) => (
      <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden service-card p-6" key={product.id}>
        <img className="h-48 w-full object-cover mb-4 rounded-md" src={product.image_url} alt="product" />
        <h4 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h4>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        
        <button className="btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">          
          <NavLink to="/Description">Buy Now</NavLink>
        </button>
      </div>
    ))}
  </div>
</div>

  )
}

export default Cards
