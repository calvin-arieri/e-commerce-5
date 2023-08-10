import './dashboard.css'
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
let date = Date()

function Dashboard(){
    const[currentAdmin, setAdmin] = useState({})
    const [coments, setComments] = useState([])
    let id = Cookies.get('user_id')
    useEffect(()=>{
        fetch(`http://127.0.0.1:5555/admin/${id}`)
        .then(r => r.json())
        .then(data =>{
            setAdmin(data)
    })},[])
    useEffect(()=>{
        fetch(`http://127.0.0.1:5555/comments/${id}`)
        .then(r => r.json())
        .then(data =>{
            setComments(data)
    })},[]) 
         
 
    return(
        id == undefined || Cookies.get('role') != 'Seller' ? (<div><h1>You are unAuthorized</h1><h1>404</h1></div>): <div className='dashboard-container'>
            <div className='welcome-part'>
                <div>
                    <h1>Hi,</h1>
                </div>
                <div className='info-part'>
                    <div >
                        <h2>{currentAdmin.full_name}</h2>
                    </div>
                    <div>
                        <p>{currentAdmin.shop_id}</p>
                    </div>
                </div>
            </div>
            <div className='more-details'>
                <div>
                    <img src = 'https://images.unsplash.com/photo-1683463170496-1a15c2197985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' alt='Shop logo' />
                </div>
                <div>
                    <h2>TechX </h2> 
                    <h4>Connect with us:</h4>   
                    <h5>Opposite new zone, Nairobi city</h5>
                    <h5>+2547084888895</h5>
                </div>
            </div>
            <div className='shop-info'>
                <div>
                    <p><span>{currentAdmin.orders}</span> Orders</p>                    
                </div>
                <div>
                    <p><span>{currentAdmin.products}</span> Products</p>                                       
                </div>
                <div>
                    <p><span>{currentAdmin.rating}</span> Rated</p>                                       
                </div>                 
            </div>
            <div className='table-div'>
                <div className='the-table'>
                    <tr>
                        <th>Name</th>
                        <th>Comment</th>
                        <th>Rating</th>
                        <th>Date</th>
                    </tr>
                    {coments.length == 0 ? <tr><td>No </td><td>comments</td><td>Available</td></tr> : 
                    coments.map((comment)=>{
                        return(
                            <tr>
                            <td>
                                {comment.customer_name}
                            </td>
                            <td>
                                <h5>{comment.product_name}</h5>
                                <p>
                                    {comment.comment}
                                </p>
                            </td>
                            <td>
                                {comment.rating}
                            </td>
                            <td>
                                {comment.created_at}
                            </td>
                        </tr> 
                        )
                    }) }
                     
                </div>
                <div>
                    <table className='aside'>
                        <tr>
                            <th>Customers</th>
                        </tr>
                        <tr>
                            <td>'Remember the customer is always'<br /><em>~common quote~</em></td>
                        </tr>
                        <tr>
                            <td>'You should learn from your competitor but never copy.Copy and you die'<br /><em>~Jack Mar~</em></td>
                        </tr>
                        <tr>
                            <td>"Our greatest glory is not in Never failing, but in rising every time we fail."<br /><em>~Confucius~</em></td>
                        </tr>
                    </table>                                    
                </div>
            </div>
        </div>
    )
}
export default Dashboard;