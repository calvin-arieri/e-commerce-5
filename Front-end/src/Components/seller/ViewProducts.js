import Delete from "../delete/Delete"
import './table.css'

import {useState} from 'react'
function ViewProducts({shop_products, searchValue, currentCategory}){  
    function handleQuantity(e){
        let value, id
        value = e.target.value
        id=e.target.id
        setTimeout(()=>{fetch(`http://localhost:5555/products/${id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({quantity:value})
        })
        .then((r)=>{
            if(r.ok){              
                window.location.reload(false)
            }
            else{
                alert('Sorry the process was no successfull pleas try again later')
            }
        })
    }, 3000)
    } 
    return(
        <div className="table-container">
            <tr>
                <th>Product</th>
                <th>Product name</th>
                <th>Product number</th>
                <th>
                    Category
                </th>
                <th>Quantity</th>
                <th>Price</th>
                <th className="last"></th>
            </tr>
            {shop_products[0] == undefined ? currentCategory != 'All' ? 'Oops! No products under this category': searchValue > 0 ? 'Ooops!Product not found' : '...loading' : shop_products.map((product)=>{
                return(
                    <tr key={product.id}>
                        <td>
                            <img src={product.image_url} alt={product.name} />
                        </td>
                        <td>                            
                            <p className="small-p">
                                <h3>{product.name}</h3>
                                {product.description}
                            </p> </td>
                        
                        <td>
                            {`PN002${product.id}`}
                        </td>
                        <td>                            
                            {product.category}
                        </td>
                        <td>
                            <input
                            type="number"
                            placeholder={product.quantity}
                            onChange={handleQuantity}
                            id={product.id}
                            />
                        </td>
                        <td>
                            {product.price}
                        </td>
                        <td>
                            <Delete productId={product.id}/>
                        </td>
                    </tr>
                )
            })                                    
            }
            <div className="space-below-table">

            </div>
        </div>
    )
}
export default ViewProducts;