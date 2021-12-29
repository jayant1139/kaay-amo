import React from "react";
import {FcGoogle} from 'react-icons/fc';
import {ImFacebook2} from 'react-icons/im';
export default function Signin() {
  const fbcolor={
    color:'#395185',
    fontSize:'1.5rem'
  }
  const googlecolor={
    fontSize:'2rem'
  }
  //FcGoogle 
  return (
    <>
    <div className="wrapsign">
      <div className="d-flex justify-content-start">
        <div className="sign">
          
          <img
            src={require("../../Images/sign_in_up_left.svg").default}
            alt=""
          />
        </div>
        <div className="sign-right mx-3">
          <div className="d-flex flex-column">
            <h2>Sign in</h2>
            <input
              className="sign-input email-sign"
              type="text"
              placeholder="Email Address"
            />
            <input className="sign-input" type="text" placeholder="Password" />
            <div className="d-flex justify-content-between my-2">
              <div className="items"><input className="mx-1" type="checkbox" name="rememberme"/>Remember me</div>
              <div className="items"><span className="color-orange">Forgot password?</span></div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="icon"><FcGoogle style={googlecolor}/> <span>Google</span></div>
              <div className="icon"><ImFacebook2 style={fbcolor}/> <span>Facebook</span>
</div>
            
            </div>
            <a href="" className="my-2"><span className="color-orange">Terms and Conditions</span>&<span className="color-orange">Privacy policy</span></a>
            <button className="signup-btn my-2 login-btn">Login</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
