import React from "react";
import { NavLink } from "react-router-dom";

export default function Emailsent() {
  const greycolor = {
    color: "000000",
    opacity: "0.8",
  };

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
          <div className="sign-right mx-3 ">
            <div className="d-flex flex-column my-5">
              <h2 style={greycolor}>
                <b>Forgot Password?</b>
              </h2>
              <p className="my-4">
                A password reset link was sent to your Email id.
              </p>
            </div>
          </div>
          <div className="corner m-3 my-4 right-top-float">
            
            <p>
              Not a member?
              <NavLink to="../Signup">
              <span> Sign up</span>
            </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
