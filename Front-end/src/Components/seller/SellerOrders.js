import { useEffect, useState } from "react";
import ViewOrders from "./ViewOrders";
import './allproducts.css'

function SellerOrders(){
    const [orders, setOrders] = useState([])
    const [lookingFor , setLook] = useState('')
    const [idLenght, setIdLength] = useState(0)
    const [filter_status, setStatus]=useState('All')
    let look_for, status_filter
    useEffect(()=>{
        fetch('http://localhost:5000/data')
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
        if(order.id == lookingFor.slice(5, idLenght)){
            return order
        }
        else if(idLenght == 0){
            return orders
        }
    })

    status_filter =  look_for.filter((status)=>{
        if(status.Status == filter_status){
            return status
        }
        else if(filter_status == 'All'){
            return look_for
        }
    })
    //console.log(status_filter)
    const statuses = ['Confirmed', 'Shiping', 'Soon to be delivered', 'Ready for pick-up'] 
    return(
        <div className="allproducts-container">
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
                {
                    statuses.map((status)=>{
                        return(
                            <button 
                            className="button-85"
                            id={status}
                             key={status}
                             onClick={(e)=>{
                                setStatus(e.target.id)
                             }}
                             >{status}</button>
                        )
                    })
                }
            </div>
            <ViewOrders order_available={status_filter} passing_status = {filter_status}search_length={idLenght} statuses={statuses} />
        </div>
    )
}
export default SellerOrders;