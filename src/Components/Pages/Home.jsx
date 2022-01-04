import React from 'react'
import ImageSlider from '../ImageSlider';
import Navbar from '../Navbar';
export default function Home() {
    return (
        <>
        <Navbar/>
         <h1 className='banner-h1'>Do one fun thing everyday </h1>   
         <div className="imageslider">
         <ImageSlider/>
         <div className="button-combined">
         <button className="signup-btn mx-2 ">Enroll Now</button>
         <button className="learnmore-outline-btn mx-2">Learn More</button>
         </div>
         </div>
        </>
    )
}
