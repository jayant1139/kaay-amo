import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";
export default function Phonewithcode() {
  const [value, setValue] = useState();
  return (
    <div>
      {/* <div className="d-flex">
           <select className='code-sm' type="dropdown" onfocus='this.size=10;' onblur='this.size=0;' onchange='this.size=1; this.blur();' >
           <option></option>
    <option value="five">5th</option>
    <option value="six">6th</option>
    <option value="seven">7th</option>
    <option value="eight">8th</option>
    <option value="nine">9th</option>
    <option value="ten">10th</option>
    <option value="eleven">11th</option>
    <option value="twelve">12th</option>
    
    </select>
           <input className='leftbordernone' type="text" />
           </div> */}
      <PhoneInput
       international
       defaultCountry="IN"
        value={value}
        onChange={setValue}
        style={{border:"0.12rem solid grey",
    width:"15rem",borderRadius:"1.5rem", padding:"0.4rem"}}
      />
    </div>
  );
}
