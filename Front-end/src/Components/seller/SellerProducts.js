import ViewProducts from "./ViewProducts";
import { useEffect, useState } from "react";

function SellerProducts(){
    const[allproducts, setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then((r)=>r.json())
        .then((data)=>{
            setProducts(data)
        })        
    }, [])
    return(
        <div>
            <ViewProducts shop_products={allproducts}/>
        </div>
    )
}
 export default SellerProducts;