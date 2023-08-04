import React from "react";
import { NavLink } from 'react-router-dom';
import "./NavBar.css";
import banner2 from '../images/banner2.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import HomeIcon from '@mui/icons-material/Home';


function NavBar() {
  return (
    <>
    <div className="container-nav">

      <div className="logo">
       <img src={banner2}/> 
      </div>

      <div className="search-bar">
        <div className="search">  
          <input className='search-input' placeholder="search" name="name" />           
        </div>
        <div className="search-button">
        <button className='button-47' type="submit">SEARCH</button>
         </div>
      </div>

      <div className="the-routing">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavDropdown title="Account" id="navbarScrollingDropdown">
            <NavDropdown.Item href="signUp"><NavLink to="/SignUp">SignUp</NavLink></NavDropdown.Item>
              <NavDropdown.Item href="log in">
              <NavLink to="/LogIn">LogIn</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="account">
                <NavLink to="/Account">Seller</NavLink>
              </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li>
              <NavLink to="/Cart">Cart</NavLink>
            </li>
          </ul>
        </nav>
      </div>

    </div>


  </>
 
  )
}

export default NavBar