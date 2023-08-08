function DeleteSession(){
    function handleDelete(){
        fetch('/session', {
            method: 'DELETE'
        })
        .then((r)=>{
            if(r.ok){
                alert('Logged out successfully')
            }
            else{
                alert('Not logged out successfully')
            }
        })
    }
    return(
        <button onClick={handleDelete}>
            Log out
        </button>
    )
}
export default DeleteSession;