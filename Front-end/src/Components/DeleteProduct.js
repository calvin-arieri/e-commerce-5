import {useEffect , useState} from "react"
import noPic from './images/noPicture.jpg'
function DeleteProduct(){
    const [products , setProducts] = useState([])
    const [product_number, setproduct_number] = useState('')
    let id, delProduct
    id = 1
    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then((r)=>r.json())
        .then ((data)=>setProducts(data))
    })
    delProduct = products.filter((product)=>{
        if(product.user_id == id && product.id === product_number){
            return product
        }
        else{
            return undefined
        }
    })
    return(
        <div>
            <div>
                <h4>Delete product</h4>
            </div>
            <div>
                <input 
                onChange={(e)=>{
                    setproduct_number( e.target.value)
                }}
                type="text"
                required
                />
            </div>
            <div>
                <div>
                    <img src={delProduct == undefined ? noPic : delProduct.image_url} alt = {delProduct == undefined ? "No picture found!" : delProduct.name} />
                </div>
                <div>
                    {delProduct == undefined ? product_number.length < 0 ? 'Enter product number' : 'searching':<div>
                        <p>{delProduct.name}</p>
                        <p>{delProduct.quantity}</p>
                        <p></p>
                        </div>                        
                        }
                </div>
            </div>
        </div>
    )
}