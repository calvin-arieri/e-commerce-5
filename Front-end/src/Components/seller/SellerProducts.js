import ViewProducts from "./ViewProducts";
import { useEffect, useState } from "react";
import './allproducts.css'
import Cookies from 'js-cookie';

function SellerProducts(){
    const[allproducts, setProducts]=useState([])
    const[choosen_category, setCategory]= useState('All')
    const [searchLenght, setSearchLenght] = useState(0)
    const [lookingFor, setLook] = useState('')
    useEffect(()=>{
        fetch('http://127.0.0.1:5555/products')
        .then((r)=>r.json())
        .then((data)=>{
            setProducts(data)
        })        
    }, [])
    let id = Cookies.get('user_id')
    function handleSearch(e){
        let word = e.target.value
        setLook(word)        
        setSearchLenght(word.length)
    }
    let search = allproducts.filter((product)=>{
        if(product.name.slice(0,searchLenght).toLowerCase() == lookingFor.toLowerCase() && product.user_id == id ){
            return product
        }
        else if(searchLenght == 0 && product.user_id == id){
            return allproducts
        }
    })
   
    let filtered_products = search.filter((product)=>{
        if(product.category == choosen_category){
            return product
        }
        else if(choosen_category == 'All'){
            return search
        }
    })
    console.log(id)
    let categories = ['All','Televisions' , 'Laptops', 'Smartphones', 'Tablets', 'Cameras']
    return(
        id == undefined || Cookies.get('role') != 'Seller' ? (<div><h1>You are unAuthorized</h1><h1>404</h1></div>):<div className="allproducts-container">
            <div>
            <input
            type="search"
            placeholder="Search product by name"
            onChange={handleSearch} 
            />
            </div>
            <div className="button-arrangement">
                {
                    categories.map((category)=>{
                        return(
                            <button 
                            className="button-85"
                            id={category}
                             key={category}
                             onClick={(e)=>{
                                setCategory(e.target.id)
                             }}
                             >{category}</button>
                        )
                    })
                }
            </div>                    
            <ViewProducts shop_products={filtered_products} searchValue={searchLenght} currentCategory={choosen_category}/>
        </div>
    )
}
 export default SellerProducts;