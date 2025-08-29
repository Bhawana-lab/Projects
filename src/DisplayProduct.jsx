import "./DisplayProduct.css";
import React, {useContext} from "react";
import {Button,Card} from "@mui/material";
import StarIcon from "./assets/Pages/staricon.png";
import StarDullIcon from "./assets/Pages/stardullicon.png";
import { ShopContext } from "./ShopContext";
const DisplayProduct=(props)=>{
      
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <Card>
                    <img src={product.image} alt="Image Display" />
                    <img src={product.image} alt="Image Display" />
                    <img src={product.image} alt="Image Display" />
                    <img src={product.image} alt="Image Display" />
                    </Card>
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={StarIcon} alt="Star" />
                    <img src={StarIcon} alt="Star" />
                    <img src={StarIcon} alt="Star" />
                    <img src={StarIcon} alt="Star" />
                    <div className="dull-star"><img  src={StarDullIcon} alt="Star Dull" /></div>
                    <p>(10K)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                    <div className="productdisplay-right-price-new">₹{product.new_price}</div>
                </div>
                 <div className="productdisplay-right-description">
                    Discover the power of nature with our premium organic herbs, grown without synthetic chemicals or pesticides. Each herb is carefully harvested to preserve its natural aroma, flavor, and healing properties. Whether you're cooking, brewing tea, or seeking holistic wellness, our herbs bring purity and potency you can trust. Experience the difference of 100% organic, sustainably sourced goodness.
                    </div>  
                    <div className="productdisplay-right-size">
                        <h1>Select Quantity</h1>
                        <div className="productdisplay-right-sizes">
                            <div className="selected">20 g/ltr</div>
                            <div>50 g/ltr</div>
                            <div>500 g/ltr</div>
                            <div>1 kg/ltr</div>
                            <div>2 kg/ltr</div>
                            <div>5 kg/ltr</div>
                        </div>
                        </div> 
                  <Button variant="contained" onClick={()=>{addToCart(product.id)}}>ADD TO CART</Button>
                  <p className="productdisplay-right-category"><span>Category : </span> Organic Herbs</p>
                  <p className="productdisplay-right-category"><span>Category : </span>Healthy Life Style</p>
            </div>

        </div>
    );
}
export {DisplayProduct};