import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
export default function Emailverification() {
    const navigate=useNavigate();
    const homeredirect= e =>{
      e.preventDefault();
      navigate("/");
    }
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
                <b>Verify your e-mail</b>
              </h2>
              <p className="m-3" style={colorgrey}>Hi! rohan! We have sent a code to your email id at xyz***@gmail.com</p>
              
              <button className="verify-btn " onClick={homeredirect}>Verify</button>
              <p className='text-center'>Questions? Email us at <span className='color-orange'>kaayamo@gmail.com</span></p>
            </div>
          </div>
        </>
      );
    }
    