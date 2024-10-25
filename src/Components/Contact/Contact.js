import React from 'react';
import "./Contact.css";
import { FaAngleRight } from "react-icons/fa6";
import img4 from "../../assets/home4.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";


function Contact() {
  return (
    <div id="contact">
       
      {/* Contact section 1 */}

       <section id="contact-section-1">
        <div className='container' id='contact-section-1-1'>
        <h6 id="contact-section-1-h6-1">Contact Us</h6>
        <p id="contact-section-1-p-1">Home <FaAngleRight id="contact-section-1-icons" /> Contact Us</p>
        </div>
      </section>

     {/* Contact Section 2 */}

      <section id="contact-section-2">
 <div className='container'>
    <div id='contact-section-2-1'>
      <div id="contact-section-2-1-1">
         <p id="contact-section-2-1-1-p">Contact</p>
      </div>

      <div id="contact-section-2-1-2">
         <div id="contact-section-2-1-2-1">
            <div id="contact-section-2-1-2-1-1">
            <FaPhoneAlt id="contact-section-2-1-2-2-phone" />
            </div>
            <div id="contact-section-2-1-2-1-2">
              <p id="contact-section-2-1-2-1-2-p-1">Phone Number</p>
              <p id="contact-section-2-1-2-1-2-p-2">+91 90437 21244</p>
            </div>
         </div>
         <div id="contact-section-2-1-2-2">
         <div id="contact-section-2-1-2-2-1">
            <MdEmail id="contact-section-2-1-2-2-email" />
            </div>
            <div id="contact-section-2-1-2-2-2">
              <p id="contact-section-2-1-2-2-2-p-1">Email</p>
              <p id="contact-section-2-1-2-2-2-p-2">info@intwhizz.in</p>
            </div>
         </div>
         <div id="contact-section-2-1-2-3">
         <div id="contact-section-2-1-2-3-1">
            <IoLocationSharp id="contact-section-2-1-2-3-location" />
            </div>
            <div id="contact-section-2-1-2-3-2">
              <p id="contact-section-2-1-2-3-2-p-1">Address</p>
              <p id="contact-section-2-1-2-3-2-p-2">3 A/1 1st Floor, 60 Feet Road, STC College Road, Near Indian Bank, Perumalpuram,Tirunelveli 627007</p>
            </div>
         </div>
      </div>

      <div id="contact-section-2-1-3">
        <div id="contact-section-2-1-3-1">
          <div id="contact-section-2-1-3-1-1">
              <p id="contact-section-2-1-3-1-1-p"> Get Enquiry Now </p> 
              <div id="contact-section-2-1-3-1-1-line">
              </div> 
              <div id="contact-section-2-1-3-1-2">
                <form id="contact-section-2-1-3-1-2-form">
                 <div id="contact-section-2-1-3-1-2-1">
                     <input type="text" id="contact-section-2-1-3-1-2-1-input-1" placeholder='your name' />
                     <input type="email" id="contact-section-2-1-3-1-2-1-input-2" placeholder='your email' />
                 </div>
                 <div id="contact-section-2-1-3-1-2-2">
                     <input type="phone" id="contact-section-2-1-3-1-2-2-input-1" placeholder='Phone number' />
                     <select id='contact-section-2-1-3-1-2-2-input-2' name="Course Type">
                     <option>Selected Course</option>
                     </select>
                 </div>
                 <div id="contact-section-2-1-3-1-2-3">
                     <textarea type="phone" id="contact-section-2-1-3-1-2-3-input-1" placeholder='Address' />
                 </div>
                 <button id="contact-section-2-1-3-1-2-3-button">Enquiry Now</button>
                </form>
              </div>
          </div>
          <div id="contact-section-2-1-3-1-3">
             <img id="contact-section-2-1-3-1-3-img" src={img4} alt={img4} />
          </div>
        </div>
      </div>

    </div>
 </div>
</section>

{/* contact section 3 */}

<section id="contact-section-3">
    <div >
    <iframe id="contact-section-3-1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.915713930474!2d77.73262590749295!3d8.699554271259558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0413f5fab23a9f%3A0xba58fb2ea1bb40ea!2sIntWhizz!5e0!3m2!1sen!2sin!4v1729821522647!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</section>

 {/*contact Section 4 */}



 <section id="contact-section-4">
 <div className='container'>
   <div id="contact-section-4-1">
     <div id="contact-section-4-1-1">
     <TfiEmail id="contact-section-4-1-email" />
     <p id="contact-section-4-1-para">Subscribe To Newsletter</p>
     </div>
     <div id="contact-section-4-1-2">
       <input type="text" id="contact-section-4-1-2-input" placeholder='Enter Email' />
       <button id="contact-section-4-1-2-button">Submit</button>
      </div>
   </div>
 </div>
</section>



    </div>
  )
}

export default Contact;