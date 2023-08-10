import './vieworders.css'
function ViewOrders({order_available, search_length, statuses, passing_status }){ 
    function handleStatus(e){
        let id, value
        value = e.target.value
        id = e.target.id
        if(value != 'Picked'){
            fetch(`http://127.0.0.1:5555/order/${id}`, {
                method: 'PATCH',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({status:value})
            })
            .then((r)=>{
                if(r.ok){
                    alert(`You have successfully updated the status`)
                    window.location.reload(false)
                }
            })
        }
        else{
            fetch(`http://127.0.0.1:5555/order/${id}`, {
                method: 'DELETE', 
            })
            .then(r =>{
                if(r.ok){
                    alert(`Order ORD00${id} delivered successfully`)
                    window.location.reload(false)
                }
            })         
        }
    } 
    //console.log(search_length)    
    return(
        <div className='table-container2'>
                <tr>                   
                    <th>Customer name</th>
                    <th>Product name</th>
                    <th>Quantity</th>
                    <th>Order number</th>
                    <th>Status</th>
                    <th>Payment method</th>
                </tr>
                {order_available[0] == undefined ? passing_status != 'All' ? `Oops! no orders ${passing_status}` :  search_length > 0 ? '...searching': '....loading'  : order_available.map((order)=>{
                    return(
                        <tr>                           
                            <td>{order.customer_name}</td>
                            <td>{order.product_name}</td>
                            <td>{order.quantity}</td>
                            <td>{`ORD00${order.id}`}</td>
                            <td>
                                <select onChange={handleStatus} id={order.id}>
                                    <option>{order.status}</option>
                                    {
                                        statuses.map((status)=>{
                                            return(
                                                <option key={status} value={status}>{status}</option>
                                            )
                                        })
                                    }
                                </select>
                            </td>
                            <td>{order.payment_method}</td>
                        </tr>
                    )
                })                   
                }
        </div>
    )
}
export default ViewOrders;