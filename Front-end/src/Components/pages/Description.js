import React, { useEffect, useState } from 'react'
import "./Description.css"
import NavBar from '../navbar/NavBar';
import Cookies from 'js-cookie';
import { useNavigate, NavLink } from 'react-router-dom';

function Description() {
  const navigate = useNavigate();
  const [product, setProducts] = useState([])
  const [comments, setComment] = useState([])
  const [comparing, setComparing] = useState([])
  function handleClick(e){
    Cookies.set('product_id', e.target.id)
    window.location.reload(false)
  }  
  useEffect (() => {
    fetch(`http://127.0.0.1:5555/product/${Cookies.get('product_id')}`)
    .then(res => {
      return res.json()
    }).then(data => {
      setProducts(data)
    });
  },[])
  useEffect (() => {
    fetch('http://127.0.0.1:5555/products')
    .then(res => {
      return res.json()
    }).then(data => {
      setComparing(data)
    });
  },[])
  useEffect (() => {
    fetch('http://127.0.0.1:5555/comments')
    .then(res => {
      return res.json()
    }).then(data => {
      setComment(data)
    });
  },[])
  let filtered = comments.filter((comment)=>{
    if(comment.product_id == product.id){
      return comment
    }
    else{
      return undefined
    }
  })
  let better_prices = comparing.filter((productc)=>{
    if(productc.price < product.price && productc.name == product.name && productc.id != product.id){

      return product    
    }
  })
  function handleAddToCart(){
    alert("Hello world")

    if(product.quantity > 0){
      if(Cookies.get('user_id')== undefined){
        navigate('/LogIn',{replace:true});
      }
      else{
        alert("Hello world")
        fetch('http://127.0.0.1:5555/shopping',{
              method: "POST",
              headers: {
                "Content-Type":"application/json"
              },
              body: JSON.stringify({
                product_id:product.id,
                quantity: 1,
                user_id: Cookies.get('user_id')
              }
              )
            })
              .then(r=>{
                if (r.ok){
                alert('Added to cart successfully')
                }
                else{
                  alert ('Error adding item to the shopping list');
                }
              })
            } 
    }
    else{
      alert('Out of stock')
    }
  }
  return (

    <div className='all'>
      <NavBar />
    <div className='flexing'>
    <img className='image' src={product.image_url} alt='laptop' />

      <div className='kf'>
        <h3 className='card-heading'>KEY FEATURES</h3>
        <ul className='card-list'>
          <li>Name - {product.name}</li>
          <li>Delivery fee - USD200</li>
          <li>Category - {product.category}</li>
          <li>Storage - 500 GB HDD</li>
          <li>Windows - Windows 10</li>
          <li>Microsoft Office installed</li>
        </ul>
      </div>
      <div className='m1'>
      <h3 className='card-heading'>MORE INFO</h3>
      <ul className='card-list'>
        <li>KU: HP246CL25684UNAFAMZ</li>
        <li>Production Country: USA</li>
        <li>Size (L x W x H cm): 33.8 x 23.7 x 1.89 cm</li>
        <li>Weight (kg): 2</li>
        <li>Main Material: PVC</li>
        <li>Care Label: Handle with care</li>
      </ul>      
      <div>
      <button class="button-48"
      onClick={handleAddToCart} 
      role="button"><span class="text">Order Now</span></button>
      <h4>USD{product.price}</h4>
      </div>
      </div>      
      </div>
      <div className='flexing2'>
       
        <div>
        <h2>Comments</h2>
          <div>
            <input type='text' />
          </div>
          <div className='card-container'>            
            {
              filtered.map((comment)=>{
                return(
                  <div className='card-comment'>
                    <h4>{comment.commenter}</h4>
                    <p>Rated: {comment.rating}</p>
                    <p>{comment.comment}</p>
                   </div> 
                )
              })
            }
          </div>         
        </div>
        <div className='left-side'>
          <h1>You may also like</h1>
          <div>
            <div>
              <h3>Cheaper in price</h3>
              <div className='card-container2'>
                {better_prices.map((product)=>{
                  return(
                    <div className='better-prices'>
                    <h4>{product.name}</h4>
                    <p>SHOP{product.user_id}</p>
                    <p>Price:{product.price}</p>
                    <NavLink to="/Description" id={product.id} onClick={handleClick}>Buy Now</NavLink>
                  </div>
                  )            

                })}
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
 
  )
}

export default Description