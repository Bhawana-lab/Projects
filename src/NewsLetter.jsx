import "./NewsLetter.css";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
const NewsLetter=()=>{
return (
    <div className="newsletter">
        <h1>Get Exclusive Offers on your Email</h1>
        <p>Subscribe to our NewsLetter and stay Updated</p>
        <div>
            <Input type="email" placeholder="Enter Your email id"/>
            <Button>Subscribe</Button>
        </div>
    </div>
);
}
export default NewsLetter;