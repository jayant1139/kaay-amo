import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
export default function Signin() {
  const fbcolor = {
    color: "#395185",
    fontSize: "1.5rem",
  };
  const googlecolor = {
    fontSize: "2rem",
  };
  const visibletoggle={
    fontSize:'1rem',
    marginLeft:'32rem',
    marginTop:'-2.5rem',
    marginBottom:'2rem',
    color:'#6c757d'

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
          <h6 className="right-top-float my-5"> Already a member? <span><Link to="/signup">Sign up</Link></span></h6>
          <div className="sign-right mx-3">
            <div className="d-flex flex-column">
              <h2>Sign in</h2>
              
              <input
                className="sign-input email-sign"
                type="text"
                placeholder=" Email Address"
              />
              
              <input
                className="sign-input password-sign"
                type="text"
                placeholder="Password"  
              />
               {/* <FontAwesomeIcon icon={faEye} style={visibletoggle}/> */}
              
              <div className="d-flex justify-content-between my-2">
                <div className="items">
                  <input className="mx-1" type="checkbox" name="rememberme" />
                  Remember me
                </div>
                <div className="items">
                 <NavLink to="ForgotPassword">
                  <span className="color-orange">Forgot password?</span>
                  </NavLink>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="icon">
                  <FcGoogle style={googlecolor} /> <span>Google</span>
                </div>
                <div className="icon">
                  <ImFacebook2 style={fbcolor} /> <span>Facebook</span>
                </div>
              </div>
              <NavLink to="Terms&Conditions" className="my-2">
                <span className="color-orange">Terms and Conditions</span>&
                <span className="color-orange">Privacy policy</span>
              </NavLink>
              <button className="signup-btn my-2 login-btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
