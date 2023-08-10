import { useState, useEffect } from 'react';
import './Home.css'
import Cards from '../../cards/Cards';
import Courosel from './Courosel';
import Footer from '../../footer/Footer';
import NavBar from '../../navbar/NavBar';

const Home = () => {
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
  function handleSearch(e){
      let word = e.target.value
      setLook(word)        
      setSearchLenght(word.length)
  }
  let search = allproducts.filter((product)=>{
      if(product.name.slice(0,searchLenght).toLowerCase() == lookingFor.toLowerCase() ){
          return product
      }
      else if(searchLenght == 0 ){
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
  let categories = ['All','Televisions' , 'Laptops', 'Smartphones', 'Tablets', 'Cameras']
  return(
   <div>
      <NavBar />
      <div className="search-bar">
        <div className="search">  
          <input className='search-input'
          onChange={handleSearch}
           placeholder="search products, categories, items ..." name="name" />           
        </div>
        <div className="search-button">
        <button className='button-47' type="submit">search</button>
        </div>
      </div>
      <div className='upper_navbar'>
        <div style={{display:"flex", flexDirection:"column", width:"17em", marginLeft:"4em",marginTop:"2.4em", boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}}>
        {  categories.map((category)=>{
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
        <div>
          <Courosel />
        </div>
        <div className='left-image'>
          <img src='https://plus.unsplash.com/premium_photo-1664201890468-74a27ce2ce31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=448&q=80' alt="assure" />
        </div>
      </div>
      <div>
        <h1>Big sale</h1>
        <div>

        </div>
      </div>
      <div>
        <div>
        </div>
      <Cards products={filtered_products}/>
      </div>    
      
      <Footer />
      {/* <Description /> */}
    </div>


  )
};
export default Home;