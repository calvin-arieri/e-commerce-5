import Delete from "../Delete"
import './table.css'
function ViewProducts({shop_products, state}){   
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
            {shop_products[0] == undefined ? '...loading' : shop_products.map((product)=>{
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