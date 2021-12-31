import React from "react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
export default function Signup() {
  const fbcolor = {
    color: "#395185",
    fontSize: "1.5rem",
  };
  const googlecolor = {
    fontSize: "2rem",
  };
  const visibletoggle = {
    fontSize: "1rem",
    marginLeft: "30rem",
    marginTop: "-2.5rem",
    marginBottom: "2rem",
    color: "#6c757d",
  };
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
          <div className="signup-right mx-3">
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center">
              <h2>Register</h2>
              <h6 className="right-top-float"> Already a member? <span><a href="">Sign In</a></span></h6>
              </div>
              <label className="labels" htmlFor="">Full Name</label>
              <input
                className="signup-input "
                type="text"
                placeholder=" "
              />

              <label className="labels" htmlFor="">Email</label>
              <input
                className="signup-input "
                type="text"
                placeholder=" "
              />

              <label className="labels" htmlFor="">Enter your Mobile Number</label>
              <input
                className="signup-input "
                type="text"
                placeholder=" "
              />
              
              <label className="labels" htmlFor="">Class</label>
              <input
                className="signup-input "
                type="text"
                placeholder=" "
              />
              
              <label className="labels" htmlFor="">Username</label>
              <input
                className="signup-input "
                type="text"
                placeholder=" "
              />
              
              <label className="labels" htmlFor="">Paasword</label>
              <input
                className="signup-input "
                type="password"
                placeholder=" "
              />
               {/* <FontAwesomeIcon icon={faEye} style={visibletoggle} /> */}
              <label className="labels" htmlFor="">Confirm Paasword</label>
              <input
                className="signup-input password-sign"
                type="password"
                placeholder=""
              />
              {/* <FontAwesomeIcon icon={faEye} style={visibletoggle} /> */}

             
              <div className="d-flex align-items-center justify-content-between my-2">
                <div className="icon">
                  <FcGoogle style={googlecolor} /> <span>Google</span>
                </div>
                <div className="icon">
                  <ImFacebook2 style={fbcolor} /> <span>Facebook</span>
                </div>
              </div>
              <a href="" className="my-2">
              <div className="termspolicy d-flex align-items-center">

                  <input className="mx-2" type="checkbox" name="rememberme" />
                 <p> By creating an account you are agreeing to the <span className="color-orange">Terms and Conditions</span>
                 </p></div>
                
                
              </a>
              <button className="signup-btn my-2 login-btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
