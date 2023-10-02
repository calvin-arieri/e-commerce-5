import React, { useEffect, useState } from 'react'
import ViewCart from '../Cart/viewCart'
import Checkout from '../Cart/Checkout'
import './cartstyle.css'
import NavBar from '../navbar/NavBar'
import Cookies from 'js-cookie'
import { NavLink } from 'react-router-dom'

function Cart() {
 const [shopping ,setShopping] = useState([])
  useEffect(()=>{
    fetch("http://127.0.0.1:5555/shopping")
    .then(r=> r.json())
    .then(data=>{setShopping(data)})
  },[])

  let user_shopping = shopping.filter((item)=>{
    if(item.user_id == Cookies.get('user_id')){     
      return item
    }
 })
 
  return (
    <div>
      <NavBar />
    <div className='view-cart-main'>
      <div className="view-cart-left">
      {Cookies.get('user_id') == undefined ?<h1><NavLink to='/LogIn'>Log in</NavLink> </h1> : user_shopping.length <= 0 ? <h1>No products available</h1> : user_shopping.map(item =>{
             return( <ViewCart shopping={item} />)
      })
      }
     
      </div>
      <div className="view-cart-right">
        <Checkout />
      </div>      
    </div>
    </div>
  )
}

export default Cart