import React from 'react'
import {TiSocialLinkedinCircular,TiSocialFacebookCircular,TiSocialTwitterCircular} from 'react-icons/ti'
import {AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
export default function Footer() {
const sizeStyle={
    fontSize:'2rem',
    margin:'0.3rem'
}
    return (
        <>
        <footer>
            <div className="main-footer">
                <div className="footer-top">
                <div className=" d-flex flex-column justify-content-around">
                {/* <img src={require('../Assets/baby-girl.png').default} alt="" /> */}
                <div className="subscribe-kaayamo">
                    <div className="subscribe-item"><h6>Subscribe KAAY AMO</h6></div>
                    <div className="subscribe-item subscribe-bg d-flex align-items-center my-3">
                    <div className=""><input type="mail" placeholder='Enter your email'></input></div>
                    <div className=""><button className='btn-subscribe'>Subscribe Now </button></div>
                </div>
                </div>
                </div>
                </div>
        <div className="footer-bottom">
        <div className="d-flex justify-content-around">
         <div className="footer-column">
             <ul>
             <h5>Navigation</h5>
                 <li><a href="/">Home</a></li>
                 <li><a href="/">About Us</a></li>
                 <li><a href="/">What We Do</a></li>
                 <li><a href="/">To The Power of 10</a></li>
                 <li><a href="/">Donate</a></li>
             </ul>
         </div>
         <div className="footer-column">
             <ul>
             <h5>What We Do</h5>
                 <li><a href="/">Become a mentor</a></li>
                 <li><a href="/">Testimonials</a></li>
                 <li><a href="/">Support</a></li>
                 <li><a href="/">Blog</a></li>
                 <li><a href="/">Donate</a></li>
             </ul>
         </div>
         <div className="footer-column">
             <ul>
             <h5>Legal</h5>
                 <li><a href="/">General Info</a></li>
                 <li><a href="/">Privacy Policy</a></li>
                 <li><a href="/">Terms of Service</a></li>
             </ul>
         </div>
         <div className="footer-column">
             <ul>
             <h5>Talk To Us</h5>
                 <li><a href="/">kaayamo@gmail.com</a></li>
                 <li><a href="/">+99999999</a></li>
                 <li><a href="/">Contact Us</a></li>
                 <li><a href="/">Facebook</a></li>
                 <li><a href="/">Linkedin</a></li>
                 <li><a href="/">Twitter</a></li>
             </ul>
         </div>
         </div>
         <div className="line_width"></div>
         <div className="social-links">
             <a href="https://www.linkedin.com/in/jayant-singh-475643156/" target="_blank"><TiSocialLinkedinCircular style={sizeStyle}/></a>
             <a href="https://www.facebook.com/profile.php?id=100011492779049" target="_blank"><TiSocialFacebookCircular style={sizeStyle}/></a>
             <a href="/" target="_blank"><TiSocialTwitterCircular style={sizeStyle}/></a>
             <a href="/" target="_blank"> <AiFillYoutube style={sizeStyle}/></a>
             <a href="https://www.instagram.com/jayant1139/" target="_blank"><AiFillInstagram style={sizeStyle}/></a>
         </div>
         </div>
    </div>
         </footer>
        </>
    )
}
