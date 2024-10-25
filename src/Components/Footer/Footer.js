import React from 'react';
import "./Footer.css";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

function Footer() {

     const img_url = "https://intwhizz.in/wp-content/uploads/2023/09/main_logo.png";

  return (
    <div id='footer'>
      <div className='container'>
        <div id="footer1">

           {/* Footer inside 1 */}

            <div id="footer-inside-1">
              <div id="footer-inside-1-1">
              <a id='footer-inside-1-a' href="/"><img id="footer_logo" src={img_url} alt={img_url} /> </a>
              </div>
              <div id="footer-inside-1-2">
              <p id="footer-inside-1-p">At IntWhizz, we’re digital and software wizards! Founded in 2021, we’re here to boost your online presence and craft solutions that go beyond the ordinary. Our team of experts has years of experience in the digital marketing and software industry and is passionate about delivering results that exceed our client’s expectations.</p>
             </div>
            </div>

             {/* footer-inside-2 */}

            <div id="footer-inside-2">
              <div id="footer-inside-2-1">
                <h6 id="footer-inside-2-h6">Quick links</h6>
              </div>
              <div id="footer-inside-2-2">

             </div>
             <div id="footer-inside-2-3">
              <ul id="footer-inside-ul">
              <li id="footer-inside-li">- <a href="/" id="footer-inside-2-a">Home</a></li>
              <li id="footer-inside-li">- <a href="/" id="footer-inside-2-a">About Us</a></li>
              <li id="footer-inside-li">- <a href="/" id="footer-inside-2-a">Courses</a></li>
              <li id="footer-inside-li">- <a href="/" id="footer-inside-2-a">Career</a></li>
              <li id="footer-inside-li">- <a href="/" id="footer-inside-2-a">Contact</a></li>
              </ul>
             </div>
            </div>

           {/* Footer inside 3 */}

            <div id="footer-inside-3">

            <div id="footer-inside-3-1">
                <h6 id="footer-inside-3-h6">Courses</h6>
              </div>
              <div id="footer-inside-3-2">

             </div>
             <div id="footer-inside-3-3">
              <ul id="footer-inside-ul-3">
              <li id="footer-inside-li-3">- <a href="/" id="footer-inside-3-a">Digital Marketing</a></li>
              <li id="footer-inside-li-3">- <a href="/" id="footer-inside-3-a">Graphic Design</a></li>
              <li id="footer-inside-li-3">- <a href="/" id="footer-inside-3-a">Branding</a></li>
              <li id="footer-inside-li-3">- <a href="/" id="footer-inside-3-a">Web Development</a></li>
              <li id="footer-inside-li-3">- <a href="/" id="footer-inside-3-a">Digital Studio</a></li>
              <li id="footer-inside-li-3">- <a href="/" id="footer-inside-3-a">Software Management</a></li>
              </ul>
             </div>

            </div>


            {/* footer inside 4 */}

            <div id="footer-inside-4">
            <div id="footer-inside-4-1">
                <h6 id="footer-inside-4-h6">Social Links</h6>
              </div>
              <div id="footer-inside-4-2">

             </div>
             <div id="footer-inside-4-3">
               <div id='footer-logo-div-1'>
               <TiSocialFacebook id="footer-facebook-icon" />
               </div>
               <div id='footer-logo-div-2'>
               <IoLogoInstagram id="footer-instagram-icon" />
               </div>
               <div id='footer-logo-div-3'>
               <FaTwitter id="footer-twitter-icon" />
               </div>
               <div id='footer-logo-div-4'>
               <TiSocialLinkedin id="footer-linkedin-icon" />
               </div>
             </div>
            </div>
        </div>
        <div id="footer2">

        </div>
        <div id='footer3'>
          <p id="footer-3-content-1">Copyright © 2023 Intwhizz. All Rights Reserved.</p>
          <p id="footer-3-content-2">Developed by Intwhizz</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;