function Delete({productId}){
    function handledelete(){
        fetch(`https://tech-x-1y4r.onrender.com/products/${productId}`,{
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
