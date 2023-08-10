function ViewCart({shopping}){
    function handleAdd(){
        fetch(`http://127.0.0.1:5555/shopping/${shopping.id}`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                quantity: shopping.quantity + 1
            })
        })
    }
    function handleMinus(){
        fetch(`http://127.0.0.1:5555/shopping/${shopping.id}`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                quantity: shopping.quantity - 1
            })
        })
    }
    function handleDelete(){
        fetch(`http://127.0.0.1:5555/shopping/${shopping.id}`,{
            method:'DELETE'   
        })
    }
return(
    <div key={shopping.id} >
        <tr>
            <td>
                SHOP{shopping.id}
            </td>
            <td>
                <p>{shopping.product_name}</p>
            </td>
            <td>
                <button onClick={handleAdd}>+</button>
                <input 
                type="number"
                placeholder={shopping.quantity}
                />
                <button onClick={handleMinus}>-</button>
            </td>
            <td>
                {shopping.price * shopping.quantity}
            </td>
        </tr>
        <tr>
            <td>
                <button onClick={handleDelete}>
                    Remove from cart
                </button>
            </td>
        </tr>        
    </div>
)
}
export default ViewCart;