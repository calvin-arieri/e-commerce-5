function ViewCart(){
return(
    <div >
        <tr>
            <td>
                ORD001
            </td>
            <td>
                <p>Hp pavillion </p>
            </td>
            <td>
                <button>+</button>
                <input 
                type="number"
                placeholder="2"
                />
                <button>-</button>
            </td>
            <td>
                Amount: KES80000
            </td>
        </tr>
        <tr>
            <td>
                <button>
                    Remove from cart
                </button>
            </td>
        </tr>        
    </div>
)
}
export default ViewCart;