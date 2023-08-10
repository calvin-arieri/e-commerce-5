import { useEffect, useState } from "react";
import ViewOrders from "./ViewOrders";
import './allproducts.css'
import Cookies from 'js-cookie';

function SellerOrders(){
    const [orders, setOrders] = useState([])
    const [lookingFor , setLook] = useState('')
    const [idLenght, setIdLength] = useState(0)
    const [filter_status, setStatus]=useState('All')
    let look_for, status_filter
    useEffect(()=>{
        fetch('http://127.0.0.1:5555/orders')
        .then((r)=>r.json())
        .then((data)=>{
            setOrders(data)
        }) 
    },[])
    function handleSearch(e){
        let word = e.target.value
        setLook(word)        
        setIdLength(word.length)
    }
    look_for = orders.filter((order)=>{
        if(order.id == lookingFor.slice(5, idLenght) && order.shop_id == Cookies.get('user_id')){
            return order
        }
        else if(idLenght == 0 && order.shop_id == Cookies.get('user_id')){
            return orders
        }
    })

    status_filter =  look_for.filter((status)=>{
        if(status.status == filter_status){
            return status
        }
        else if(filter_status == 'All'){
            return look_for
        }
    })
    //console.log(status_filter)
    const statuses = ['Confirmed', 'Shiping', 'Soon to be delivered', 'Ready for pick-up', 'Picked'] 
    return(
        Cookies.get('user_id') == undefined || Cookies.get('role') != 'Seller' ? (<div><h1>You are unAuthorized</h1><h1>404</h1></div>):<div className="allproducts-container">
            <div>
                <input
                type="search"
                placeholder="Search product by order number"
                onChange={handleSearch} 
                />
            </div>
            <div className="button-arrangement">
                <button 
                className="button-85"
                id='All'
                onClick={(e)=>{setStatus(e.target.id)}}
                >All</button>
                <button 
                className="button-85"
                id='Pending'
                onClick={(e)=>{setStatus(e.target.id)}}
                >New orders</button>
                <button 
                className="button-85"
                id='Shiping'
                onClick={(e)=>{setStatus(e.target.id)}}
                >Importing</button>
                <button 
                className="button-85"
                id='Soon to be delivered'
                onClick={(e)=>{setStatus(e.target.id)}}
                >On transit</button>
                <button 
                className="button-85"
                id='Ready for pick-up'
                onClick={(e)=>{setStatus(e.target.id)}}
                >Pickup station</button>                
                
            </div>
            <ViewOrders order_available={status_filter} passing_status = {filter_status}search_length={idLenght} statuses={statuses} />
        </div>
    )
}
export default SellerOrders;