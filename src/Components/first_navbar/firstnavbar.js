import React from 'react';
import "./firstnavbar.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function Firstnavbar() {



  return (
    <div id="first_navbar">
        <div id="first_navbar1">
            <div className='container'>
                   <div id="first_navbar2">
                    <div id="first_navbar3">
                      {/* Section 1 */}
                         <div id="first_navbar4">
                              <div id="first_navbar4-1">
                                  <FaPhoneAlt id="first_navbar4-phone-icon" />
                                  <p id="first_navbar-phone-text">+91 00000-00000</p>
                              </div>
                              <div id="first_navbar4-2-vl">

                              </div>
                              <div id="first_navbar4-3">
                              <MdEmail id="first_navbar4-email-icon" />
                              <p id='first_navbar4-email-text'>info@intwhizz.in</p>
                              </div>
                         </div>

                      
                    </div>
                       {/* Section2 */}

                       <div id="first_navbar5">
                            <p id="first_navbar5-text">Follow Us :</p>
                            <FaFacebookF id="first_navbar_facebook_icon"  />
                            <div id="first_navbar5_line_1">
                               
                            </div>

                            <FaInstagram id="first_navbar_instagram_icon" />

                            <div id="first_navbar5_line_1">
                               
                            </div>

                            <FaTwitter id="first_navbar_twitter_icon" />
                          
                            <div id="first_navbar5_line_1">
                               
                            </div>

                            <FaLinkedin id="first_navbar_linkedin_icon" />

                         </div>
                   </div>
            </div>
        </div>
    </div>
  )
}

export default Firstnavbar;