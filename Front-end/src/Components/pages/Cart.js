import React from 'react'
import ViewCart from '../Cart/viewCart'
import Checkout from '../Cart/Checkout'
import './cartstyle.css'

function Cart() {
  return (
    <div className='view-cart-main'>
      <div className="view-cart-left">
        <ViewCart />
      </div>
      <div className="view-cart-right">
        <Checkout />
      </div>      
    </div>
  )
}

export default Cart