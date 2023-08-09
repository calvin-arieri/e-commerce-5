import React, { useEffect, useState } from 'react'
import './Cards.css'


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
  
  return (
    <div className="services-container">
      {products.map((product) =>(
        <div className="service-card" key={product.id}>
          <img className="service-image" src={product.image_url} alt='product'/>
          <h4>{product.name}</h4>
          <p>USD {product.price}</p>
          <button className='btn'>Buy Now</button>
        </div>
      ))}

    </div>
  )
}

export default Cards
