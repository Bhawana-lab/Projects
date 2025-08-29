import "./Offers.css";
import Fruits from "./assets/Pages/fruit.png";
import Button from "@mui/material/Button";
const Offers=()=>{
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>CHEMICAL FREE PRODUCTS</p>
                <Button>Check Now</Button>
            </div>
            <div className="offers-right">
                  <img src={Fruits} alt="Fruit Collection"/>
            </div>
        </div>
    );
}
export default Offers;