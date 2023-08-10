import { useState, useEffect } from 'react';
import './Home.css'
import Cards from '../../cards/Cards';
import Courosel from './Courosel';
import Footer from '../../footer/Footer';
import Description from '../Description';



const Home = ({searchLenght, lookingFor}) => {
  const[allproducts, setProducts]=useState([])
  const[choosen_category, setCategory]= useState('All') 

  useEffect(()=>{
      fetch('')
      .then((r)=>r.json())
      .then((data)=>{
          setProducts(data)
      })        
  }, [])
  console.log(searchLenght)
  console.log(searchLenght)

let search = allproducts.filter((product)=>{
    if(product.name.slice(0,searchLenght).toLowerCase() === lookingFor.toLowerCase()){
        return product
    }
    else if(searchLenght === 0){
        return allproducts
    }
})

let filtered_products = search.filter((product)=>{
    if(product.category === choosen_category){
        return product
    }
    else if(choosen_category === 'All'){
        return search
    }
})
  let categories = ['All','Televisions' , 'Laptops', 'Smartphones', 'Tablets', 'Cameras']
  return(
   <div>

      <div className="search-bar">
        <div className="search">  
          <input className='search-input' placeholder="search products, categories, items ..." name="name" />           
        </div>
        <div className="search-button">
        <button className='button-47' type="submit">search</button>
        </div>
      </div>

      <Courosel />
      <Cards />
      <Footer />
      {/* <Description /> */}
    </div>


  )
};
export default Home;