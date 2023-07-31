function Delete({productId}){
    function handledelete(){
        fetch(`http://localhost:3000/products/${productId}`,{
           method: 'DELETE' 
        })
        .then((r)=>{
            if(r.ok){
                alert('Deleted successfully')
            }
        })        
    }
    return(
        <button onClick={handledelete} className="delete-button">Delete</button>
    )    
}
export default Delete;