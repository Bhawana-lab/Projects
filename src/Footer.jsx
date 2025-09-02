import "./Footer.css";
import FooterLogo from "./assets/Pages/logo.png";
import Instagram from "./assets/Pages/instagram.png";
import Facebook from "./assets/Pages/facebook.png";
import Whatsapp from "./assets/Pages/whatsapp.png";
import Gmail from "./assets/Pages/gmail.png";
import YouTube from "./assets/Pages/you-tube.png";
const Footer=()=>{
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={FooterLogo} alt="footer logo"/>
                <p>GROW ORGANIC</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                 <a href="https://www.instagram.com/poosk_home_stay?igsh=amY0YXgzZDEzOHQ3 "> <img   src={Instagram} alt="instagram"/> </a>
                </div>
                <div className="footer-icons-container">
                    <a href="https://m.facebook.com/surendrasinghbisht.poosk/"><img  src={Facebook} alt="Facebook"/></a>
                </div>
                <div className="footer-icons-container">
                    <a href="tel:+91 9458357719"><img src={Whatsapp}alt="Whatsapp"/></a>
                </div>
                <div className="footer-icons-container">
                    <a href="mailto:surendrasingh.supi@gmail.com"><img src={Gmail}alt="Mail"/></a>
                </div>
                <div className="footer-icons-container">
                    <a href="www.youtube.com/@pooskhomestay3666"><img src={YouTube}alt="youTube"/></a>
                </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <br></br>
                <p> &#169;  Copyright  @ 2025 - All Rights Reserved</p>
            </div>
        </div>
    );
}
export default Footer;
