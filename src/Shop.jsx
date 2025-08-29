import Hero from "./Hero";
import Offers from "./Offers.jsx";
// import Product from "./Product.jsx";
import Popular from "./Popular.jsx";
import NewCollection from "./NewCollection.jsx";
import NewsLetter from "./NewsLetter.jsx";
const Shop=()=>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollection/>
            <br/>
             <br/>
            <NewsLetter/>
        </div>
    );
}
export default Shop;