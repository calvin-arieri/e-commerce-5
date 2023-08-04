function Delete({productId}){
    function handledelete(){
        fetch(`http://localhost:5000/products/${productId}`,{
           method: 'DELETE' 
        })
        .then((r)=>{
            if(r.ok){
                alert('Deleted successfully')
                window.location.reload(false);
            }
        })        
    }
    return(
        <button onClick={handledelete} className="delete-button">X</button>
    )    
}
export default Delete;