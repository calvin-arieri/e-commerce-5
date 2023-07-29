import {useEffect , useState} from "react"
import noPic from './images/noPicture.jpg'
import Delete from "./Delete"
function DeleteProduct(){
    const [products , setProducts] = useState([])
    const [product_number, setproduct_number] = useState(0)   
    let id     
    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then((r)=>r.json())
        .then ((data)=>setProducts(data)
        )
    }, [])
 
    let delProduct = products.filter((product)=>{
            if(product.id == product_number && product.user_id == id){
                return(product)
            }
        }
        )
    return(
        <div>
            <div>
                <h4>Delete product</h4>
            </div>
            <div>
                <input 
                onChange={(e)=>{
                    setproduct_number(e.target.value)
                }}
                type="text"
                required
                />
            </div>
            <div>
                <div>
                    <img src={delProduct[0] === undefined ? noPic : delProduct[0].image_url} alt = {delProduct[0] == undefined ? "No picture found!" : delProduct[0].name} />
                </div>
                <div>
                    {delProduct[0] === undefined ? product_number.length < 1 ? 'Enter product number' : 'searching':<div>
                        <p>{delProduct[0].name}</p>
                        <p>{delProduct[0].quantity}</p>
                        <p>'here goes the dates'</p>
                        <Delete productId={delProduct[0].id}/>
                        </div>                        
                        }
                </div>
            </div>
        </div>
    )
}

export default DeleteProduct;