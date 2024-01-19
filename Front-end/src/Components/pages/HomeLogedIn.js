import { useState, useEffect } from 'react';


const Home = ({searchLenght, lookingFor}) => {
  const[allproducts, setProducts]=useState([])
  const[choosen_category, setCategory]= useState('All') 

  useEffect(()=>{
      fetch('https://tech-x-1y4r.onrender.com/products')
      .then((r)=>r.json())
      .then((data)=>{
          setProducts(data)
      })        
  }, [])
  console.log(searchLenght)
  console.log(searchLenght)

let search = allproducts.filter((product)=>{
    if(product.name.slice(0,searchLenght).toLowerCase() == lookingFor.toLowerCase()){
        return product
    }
    else if(searchLenght == 0){
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
    <div className='home-container'>
      <div className='left-card'>
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
      <div className='right-card'>        
      </div>
    </div>
  </div>
  )
};
export default Home;
