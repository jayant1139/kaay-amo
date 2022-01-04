import React from "react";

export default function ForgotPassword() {
    const greycolor={
        color:"000000",
        opacity:'0.8'
    }
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
              <h2 style={greycolor}>
                <b>Forgot Password?</b>
              </h2>
              <p>
                Enter the email address you used when you joined and we’ll send
                you instructions to reset your password.
              </p>
              <div className="my-3 d-flex flex-column">
              <label className="my-1 mx-1">Email</label>
              <input
                className="sign-input m-0 "
                type="mail"
                placeholder=""
              />
              </div>
              <button className="signup-btn my-5 login-btn">Reset Password</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}