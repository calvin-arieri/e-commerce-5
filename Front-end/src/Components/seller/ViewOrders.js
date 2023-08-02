import './vieworders.css'
function ViewOrders({order_available, search_length, statuses, passing_status }){ 
    function handleStatus(e){
        let id, value
        value = e.target.value
        id = e.target.id
        fetch(`http://localhost:5000/data/${id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({Status:value})
        })
        .then((r)=>{
            if(r.ok){
                alert(`You have successfully updated the status`)
                window.location.reload(false)
            }
        })
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
                            <td>{order.Customer_name}</td>
                            <td>{order.Product_name}</td>
                            <td>{order.Quantity}</td>
                            <td>{`ORD00${order.Number}`}</td>
                            <td>
                                <select onChange={handleStatus} id={order.Number}>
                                    <option>{order.Status}</option>
                                    {
                                        statuses.map((status)=>{
                                            return(
                                                <option key={status} value={status}>{status}</option>
                                            )
                                        })
                                    }
                                </select>
                            </td>
                            <td>{order.Payment_method}</td>
                        </tr>
                    )
                })                   
                }
        </div>
    )
}
export default ViewOrders;