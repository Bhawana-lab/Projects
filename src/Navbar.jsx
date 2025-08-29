import logo from './assets/Pages/logo.png';
import {useContext, useState} from "react";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import cart from "./assets/Pages/cart.png";
import "./Navbar.css";
import { ShopContext } from './ShopContext';

export default function Navbar(){
  const [menu,setMenu]=useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo}alt="Grow Organic logo"/>
                <p>Grow Organic</p>
            </div>
           <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("fruit")}}><Link style={{textDecoration:'none'}} to="/fruit">Fruits</Link>{menu==="fruit"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("vegetable")}}><Link style={{textDecoration:'none'}} to="/vegetable">Vegetables</Link>{menu==="vegetable"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("herbs")}}><Link style={{textDecoration:'none'}} to="/herbs">Herbs</Link>{menu==="herbs"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("herbalProducts")}}><Link style={{textDecoration:'none'}} to="/herbalProduct">Herbal Products</Link>{menu==="herbalProducts"?<hr/>:<></>}</li>
          </ul>
          
          <div className="nav-login-cart">
            <Link to="/login"><Button>Login</Button></Link>
            
           <Link to="/cart">
            <div className="cart-logo">
                 <img src={cart} alt="cart_icon"/>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
              </Link> 
          </div>
        </div>
    );
}
