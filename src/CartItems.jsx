import React, { useContext } from "react";
import "./CartItems.css";
import RemoveIcon from "./assets/Pages/remove-icon.png";
import { ShopContext } from "./ShopContext";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
const CartItems=()=>{
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);
  
    return (
        <div className="cartitems">
           <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
           </div>
           <hr />
           {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div >
                <div className="cartitems-format cartitems-format-main">
                     <img className="carticon-product-icon" src={e.image} alt={e.name} />
                      <p>{e.name}</p>
                      <p>₹{e.new_price}</p>
                       <Button variant="contained" className="cartitems-quantity">{cartItems[e.id]}</Button>
                       <p>₹{e.new_price*cartItems[e.id]}</p>
                       <img className="removeimage"src={RemoveIcon} onClick={()=>{removeFromCart(e.id)}} alt="Remove Item" />
                       
                </div>
                <hr />
             </div>
     
             }else{
                    return null;
                 }
           }
            )
          } 
          <div className="cartitems-down">
            <div className="cartItems-total">
               <h1>Cart Total</h1>
               <div>
                  <div className="cartItems-total-item">
                     <p>Subtotal</p>
                     <p>₹{getTotalCartAmount()}</p>
                  </div>
                  <hr />
                  <div className="cartItems-total-item">
                     <p>Shipping Fee</p>
                     <p>Free</p>
                  </div>
                  <hr />
                  <div className="cartItems-total-item">
                     <h3>Total</h3>
                      <h3>₹{getTotalCartAmount()}</h3>
                  </div>

               </div>
               <button>PROCEED TO CHECK OUT</button>
            </div>
            <div className="cartitems-promocode">
               <p>If you have a promo code, enter it here</p>
               <div className="cartitem-promobox">
                  <Input type="text" placeholder="promo code" />
                  <button>Submit</button>
               </div>
            </div>
          </div>
       </div>
    );
}
export default CartItems;