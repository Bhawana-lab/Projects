
import HomeImg from "./assets/Pages/home-img.png";
import "./Hero.css";
const Hero=()=>{
    return (
        <div  className="hero">
            
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                       
            
                        <img src={HomeImg}alt="Organic Life"/>
                    </div>
                    <p>Organic goodness </p>
                    <p>in every Bite</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Fresh Herbs Collection</div>
                    <img src="fruits.png" alt=""/>
                </div>
            </div>
            <div className="hero-right">
            </div>
                
        </div>
    );

}
export default Hero;