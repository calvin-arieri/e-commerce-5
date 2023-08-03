import './dashboard.css'
let date = Date()
function Dashboard(){
    return(
        <div className='dashboard-container'>
            <div className='welcome-part'>
                <div>
                    <h1>Hi,</h1>
                </div>
                <div className='info-part'>
                    <div >
                        <h2>Calvin Arieri</h2>
                    </div>
                    <div>
                        <p>SHOP001</p>
                    </div>
                </div>
            </div>
            <div className='more-details'>
                <div>
                    <img src = 'https://images.unsplash.com/photo-1683463170496-1a15c2197985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' alt='Shop logo' />
                </div>
                <div>
                    <h2>Shop details</h2>
                    <h5>Mwangi's shop</h5>
                    <h5>Opposite new zone, Nairobi city</h5>
                    <h5>+2547084888895</h5>
                    <h5>{date}</h5>
                </div>
            </div>
            <div className='shop-info'>
                <div>
                    <p><span>18</span> Orders</p>                    
                </div>
                <div>
                    <p><span>20</span> Products</p>                                       
                </div>
                <div>
                    <p><span>4.5</span> Rated</p>                                       
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
                    <tr>
                        <td>
                            Calvin Arieri
                        </td>
                        <td>
                            <h5>Product name</h5>
                            <p>
                                Good product and the packaging is so good. continue with the same
                            </p>
                        </td>
                        <td>
                            4.5
                        </td>
                        <td>
                            27/4/2023
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Calvin Arieri
                        </td>
                        <td>
                            <h5>Product name</h5>
                            <p>
                                Good product and the packaging is so good. continue with the same
                            </p>
                        </td>
                        <td>
                            4.5
                        </td>
                        <td>
                            27/4/2023
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Calvin Arieri
                        </td>
                        <td>
                            <h5>Product name</h5>
                            <p>
                                Good product and the packaging is so good. continue with the same
                            </p>
                        </td>
                        <td>
                            4.5
                        </td>
                        <td>
                            27/4/2023
                        </td>
                    </tr> 
                    <tr>
                        <td>
                            Calvin Arieri
                        </td>
                        <td>
                            <h5>Product name</h5>
                            <p>
                                Good product and the packaging is so good. continue with the same
                            </p>
                        </td>
                        <td>
                            4.5
                        </td>
                        <td>
                            27/4/2023
                        </td>
                    </tr>                     
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