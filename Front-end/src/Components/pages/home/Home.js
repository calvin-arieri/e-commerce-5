import { useState, useEffect } from 'react';
import SlideCard from './SlideCard';
import './Home.css'


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
          <input className='search-input' placeholder="search" name="name" />           
        </div>
        <div className="search-button">
        <button className='button-47' type="submit">SEARCH</button>
        </div>
      </div>

    <div className='side-navbar'>
      <div className='left-navbar'>
      {  categories.map((category)=>{
          return(
            <button className='navbar-button'
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
      <div className='slidecard'>
        <SlideCard />
      </div>
    </div>

  </div>
  )
};
export default Home;