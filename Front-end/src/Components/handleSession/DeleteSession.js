import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function DeleteSession(){
    const navigate = useNavigate();
    function handleDelete(){
        Cookies.remove('user_id');
        Cookies.remove('role');       
        navigate('/LogIn', { replace: true }); 
    }
    return(
        <button onClick={handleDelete}>
            Log out
        </button>
    )
}
export default DeleteSession;