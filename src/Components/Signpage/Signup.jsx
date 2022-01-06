import React from "react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
export default function Signup() {
  const navigate = useNavigate();
  const otpverify = (e) => {
    e.preventDefault();
    navigate("../Verify/Mobileverification");
  };
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
                <h6 className="right-top-float">
                  {" "}
                  Already a member?{" "}
                  <span>
                    <Link to="/signin">Sign In</Link>
                  </span>
                </h6>
              </div>
              <label className="labels" htmlFor="">
                Full Name
              </label>
              <input className="signup-input " type="text" placeholder=" " />

              <label className="labels" htmlFor="">
                Email
              </label>
              <input className="signup-input " type="text" placeholder=" " />

              <label className="labels" htmlFor="">
                Enter your Mobile Number
              </label>
              <input className="signup-input " type="text" placeholder=" " />

              <label className="labels" htmlFor="">
                Class
              </label>
              <input className="signup-input " type="text" placeholder=" " />

              <label className="labels" htmlFor="">
                Username
              </label>
              <input className="signup-input " type="text" placeholder=" " />

              <label className="labels" htmlFor="">
                Paasword
              </label>
              <input
                className="signup-input "
                type="password"
                placeholder=" "
              />
              {/* <FontAwesomeIcon icon={faEye} style={visibletoggle} /> */}
              <label className="labels" htmlFor="">
                Confirm Paasword
              </label>
              <input className="signup-input " type="password" placeholder="" />
              {/* <FontAwesomeIcon icon={faEye} style={visibletoggle} /> */}

              <div className="d-flex align-items-center justify-content-between my-2">
                <div className="icon">
                  <FcGoogle style={googlecolor} /> <span>Google</span>
                </div>
                <div className="icon">
                  <ImFacebook2 style={fbcolor} /> <span>Facebook</span>
                </div>
              </div>
              <a to="Terms&Conditions" className="my-2">
                <div className="termspolicy d-flex align-items-center">
                  <input className="mx-2" type="checkbox" name="rememberme" />
                  <p>
                    {" "}
                    By creating an account you are agreeing to the{" "}
                    <Link to="Terms&Conditions">
                      {" "}
                      <span className="color-orange">Terms and Conditions</span>
                    </Link>
                  </p>
                </div>
              </a>
              <button onClick={otpverify} className="signup-btn my-2 login-btn">
                Login
              </button>
            </div>
          </div>
          <div className="chatbox-icon"><img src={require("../../Images/chatbox.svg").default} alt="" srcset="" /></div>
             
        </div>
      </div>
    </>
  );
}
