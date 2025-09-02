import "./LoginSignup.css";
import Button from "@mui/material/Button";
const LoginSignup=()=>{
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input required type="text" placeholder="Your Name"/>
                    <input  required type="email" placeholder="Email Address" />
                    <input required type="password" placeholder="Password" />
                </div>
                <Button>Continue</Button>
                <p className="loginsignup-login">Already have an account?<span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input required type="checkbox" name="" id="" />
                    <p>By Continuing , I agree to the terms of use &privacy</p>
                </div>
            </div>
        </div>
    );
}
export default LoginSignup;