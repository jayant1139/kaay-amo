import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
export default function Mobileverification() {
  const arrowleftstyle = {
    fontSize: "1.5rem",
    color: "#000000B2",
  };
  const colorgrey={
    color:"#000000B2"
  }
  return (
    <>
      <div className="card-centered p-3">
        <div className="">
          <NavLink to="/Signup">
          <BsArrowLeft style={arrowleftstyle} />
          </NavLink>
          <h2 className="m-3" style={colorgrey}>
            <b>Verify your phone number</b>
          </h2>
          <p className="m-3" style={colorgrey}>Hi! rohan! We have sent a code to your phone number 8*******38</p>
          <div className="d-flex m-1">
            <input className="otp-field" type="text" maxLength={1} />
            <input className="otp-field" type="text" maxLength={1} />
            <input className="otp-field" type="text" maxLength={1} />
            <input className="otp-field" type="text" maxLength={1} />
          </div>
          <div className="timer color-orange text-center">00:35</div>
          <a href="/kaay-amo">
          <p className="m-3" style={colorgrey}>Send the code again</p>
          </a>
          <button className="verify-btn ">Verify</button>
        </div>
      </div>
    </>
  );
}
