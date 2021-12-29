import React from "react";

export default function Signin() {
  return (
    <>
    <div className="wrapsign">
      <div className="d-flex justify-content-start">
        <div className="sign">
          {" "}
          <img
            src={require("../../Images/sign_in_up_left.svg").default}
            alt=""
          />
        </div>
        <div className="sign-right">
          <div className="d-flex flex-column">
            <h2>Sign in</h2>
            <input
              className="sign-input"
              type="text"
              placeholder="Email Address"
            />
            <input className="sign-input" type="text" placeholder="Password" />
            <div className="d-flex justify-content-between my-2">
              <div className="items"><input className="mx-1" type="checkbox" name="rememberme"/>Remember me</div>
              <div className="items"><span className="color-orange">Forgot password?</span></div>
            </div>
            <a href="" className="my-2"><span className="color-orange">Terms and Conditions</span>&<span className="color-orange">Privacy policy</span></a>
            <button className="signup-btn my-2">Login</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
