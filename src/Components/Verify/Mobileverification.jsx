import React from "react";
import { BsArrowLeft } from "react-icons/bs";
export default function Mobileverification() {
  const arrowleftstyle = {
    fontSize: "1.5rem",
    color: "red",
  };
  return (
    <>
      <div className="card-centered p-3">
        <div className="">
          <BsArrowLeft style={arrowleftstyle} />
          <h2 className="m-3">
            <b>Verify your phone number</b>
          </h2>
          <p className="m-3">Hi! rohan! We have sent a code to your phone number 8*******38</p>
          <div className="d-flex m-1">
            <input className="otp-field" type="text" maxLength={1} />
            <input className="otp-field" type="text" maxLength={1} />
            <input className="otp-field" type="text" maxLength={1} />
            <input className="otp-field" type="text" maxLength={1} />
          </div>
          <div className="timer color-orange text-center">00:35</div>
          <p className="m-3">Send the code again</p>
          <button className="verify-btn ">Verify</button>
        </div>
      </div>
    </>
  );
}
