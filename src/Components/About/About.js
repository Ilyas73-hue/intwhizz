import React from 'react';
import "./About.css";
import { FaAngleRight } from "react-icons/fa6";
import img4 from "../../assets/home4.png";
import img5 from "../../assets/webdesign.png";
import img6 from "../../assets/graphicsdesign.png";
import img7 from "../../assets/datascience.png";
import img8 from "../../assets/cybersecurity.png";
import img9 from "../../assets/machinelearning.png";
import img10 from "../../assets/home5.png";
import img11 from "../../assets/about2.png";
import logo1 from "../../assets/about_img_1.png";
import logo2 from "../../assets/about_img_2.png";
import logo3 from "../../assets/about_img_3.png";
import logo4 from "../../assets/about_img_4.png";
import trend1 from "../../assets/trend1.png";
import trend2 from "../../assets/trend2.png";
import trend3 from "../../assets/trend3.png";
import trend4 from "../../assets/trend4.png";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";


function About() {

  // Top Course

  const top_course =[{
    id: 1,
    name: "Web Design",
    image: `${img5}`
     }, {
       id: 2,
       name: "Graphic Design",
       image: `${img6}`
     }, {
       id: 3,
       name: "Data Science",
       image: `${img7}`
     }, {
       id: 4,
       name: "Cyber Security",
       image: `${img8}`
     }, {
       id: 5,
       name: "Machine Learning",
       image: `${img9}`
     }];

     const trending_course_1 = [{
        id: 1,
        name: "Business Skills",
        image: `${trend1}`
     }, {
        id: 2,
        name: "Productivity & Collaboration skills",
        image: `${trend2}`  
     }];

     const trending_course_2 = [{
        id: 1,
        name: "IT Skills",
        image: `${trend3}`
     }, {
        id: 2,
        name: "Certification",
        image: `${trend4}`  
     }];




  return (
    <div id="about">
      
      {/* About Section 1 */}

      <section id="about-section-1">
        <div className='container' id='about-section-1-1'>
        <h6 id="about-section-1-h6-1">About Us</h6>
        <p id="about-section-1-p-1">Home <FaAngleRight id="about-section-1-icons" /> About Us</p>
        </div>
      </section>

           {/* About Section 2 */}

           <section id="about-section-2">
              <div className='container' id="about-section-2-1">
                <div id='about-section-2-2'>

                 <div id="about-section-2-5">
                     <p id="about-section-2-5-para">Top Course Categories</p>
                 </div>
                 <div id="about-section-2-6">
                   <button id="about-section-2-6-arrow-left"><IoIosArrowBack id="about-section-2-arrow-icon-1" /></button>
                   <button id="about-section-2-6-arrow-right"><IoIosArrowForward id="about-section-2-arrow-icon-2" /></button>
                 </div>

                </div>

                <div id="about-section-2-3">
                  <div id="about-section-2-3-flex-row">
{
  top_course.map((data) => (
    <div id="about-section-2-3-1">
    <div id="about-section-2-3-2">
      <img id="about-section-2-3-img" src={data.image} alt={data.image} />
    </div>
    <div id="about-section-2-3-3">
     <p id="about-section-2-3-para">{data.name}</p>                   
    </div>
 </div>
  ))
}

                 </div>
                </div>
              </div>
       </section>

       

       {/* About Section 3 */}

       <section id="about-section-3">
<div className="container">
  <div id="about-section-3-1">
      <div id="about-section-3-2">
         <img id="about-section-3-2-img" src={img10} alt={img10} />
      </div>

      <div id="about-section-3-3">
          <p id="about-section-3-3-1">About Us</p>
          <div id="about-section-3-3-2"></div>
          <h6 id="about-section-3-3-3">Intwhizz Training Institute</h6>
          <p id="about-section-3-3-4">At IntWhizz, we’re digital and software wizards! Founded in 2021, we’re here to boost your online presence and craft solutions that go beyond the ordinary. Our team of experts has years of experience in the digital marketing and software industry and is passionate about delivering results that exceed our client’s expectations.</p>
           <div id="about-section-3-3-5"> 
            <div id="about-section-3-3-5-1">
            <BsCheckCircleFill id="about-section-3-3-5-2" />
            <p id="about-section-3-3-5-3">Expert Trainer</p>
            </div>
            <div id="about-section-3-3-5-1-1">
            <BsCheckCircleFill id="about-section-3-3-5-2-1" />
            <p id="about-section-3-3-5-3-1">Online Learning</p>
            </div>
            <div id="about-section-3-3-5-1-2">
            <BsCheckCircleFill id="about-section-3-3-5-2-2" />
            <p id="about-section-3-3-5-3-2">Placement Support</p>
            </div>
           </div>
           <button id="about-section-3-3-6">Learn More</button>
      </div>
  </div>
</div>
</section>

       {/* About Section 4 */}

       <section id="about-section-4">
            <div className='container' id="about-section-4-1">
              <div id="about-section-4-1-1">
                  <p id="about-section-4-1-1-p">Advanced Certification Courses SUNY-NEF-RIMSR</p>
              </div>
              <div id="about-section-4-1-2">
                <div id="about-section-4-1-2-1">
                   <p id="about-section-4-1-2-1-p-1">
                   The State University of New York (SUNY) at Potsdam, USA, and the National Education Foundation (NEF) at Washington DC, USA & RIMSR, Bangalore have come together to accomplish the objective of the mission-driven Skill Development Program titled “Make India Great – MIG.”
                   </p>
                   <p id="about-section-4-1-2-1-p-2">
                   The objective is to provide high-end technology and business skill courses in high-demand learning areas with good employment opportunities to Indian youth making them “job-ready” pan India and abroad at the most affordable fee structure.
                   </p>
                   <p id="about-section-4-1-2-1-p-3">
                   The courses are world-class, comprehensive in content, developed keeping in focus application of the domain knowledge on the job, and delivered online by Skill Soft, USA, a world-renowned education content provider with joint certifications by SUNY & NEF.
                   </p>
                </div>
                <div id="about-section-4-1-2-2">
                <img id="about-section-4-1-2-1-img" src={img11} alt={img11} />
                </div>
              </div>
            </div>
       </section>

        {/* About Section 5 */}

        <section id="about-section-5">
        <div className='container'>
           <div id="about-section-5-1">
           <img id="about-section-5-1-img" src={logo1} alt={logo1} />
           <img id="about-section-5-1-img" src={logo2} alt={logo2} />
           <img id="about-section-5-1-img" src={logo3} alt={logo3} />
           <img id="about-section-5-1-img" src={logo4} alt={logo4} />
           </div>
        </div>
        </section>

       {/* About Section 6 */}

        <section id="about-section-6">
            <div className='container'>
                <p id="home-section-6-p">The ”Advanced Certification Courses” of SUNY-NEF-RIMSR that are offered as follows:</p>
            </div>
        </section>

        {/* About Section 7 */}

        <section id="about-section-7"> 
         <div className='container'>
            <div id="about-section-7-1">
               <div id="about-section-7-1-1">
                  <p id="about-section-7-1-1-p">Trending Courses</p>
               </div>

               <div id="about-section-7-1-2">
                  <h6 id="about-section-7-1-2-h6">Get Quality Education with Intwhizz Academy</h6>
               </div>
                
               <div id="about-section-7-1-3">
                {
                    trending_course_1.map((item) => (
                        <div id="about-section-7-1-3-1">
                        <div id="about-section-7-1-3-1-1">
                          <img src={item.image} alt={item.image} />
                        </div>
                        <div id="about-section-7-1-3-1-2">
                          <p id="about-section-7-1-3-1-2-p">{item.name}</p>
                        </div>
                        </div>
                    ))
                }
               </div>

               <div id="about-section-7-1-4">
                {
                    trending_course_2.map((item) => (
                        <div id="about-section-7-1-4-1">
                        <div id="about-section-7-1-4-1-1">
                          <img src={item.image} alt={item.image} />
                        </div>
                        <div id="about-section-7-1-4-1-2">
                          <p id="about-section-7-1-4-1-2-p">{item.name}</p>
                        </div>
                        </div>
                    ))
                }
               </div>


            </div>
         </div>
        </section>


       {/* About section 8 */}

       <section id="about-section-8">
          <div className='container'>
             <div id='about-section-8-1'>
               <div id="about-section-8-1-1">
                  <p id="about-section-8-1-1-p">Contact</p>
               </div>

               <div id="about-section-8-1-2">
                  <div id="about-section-8-1-2-1">
                     <div id="about-section-8-1-2-1-1">
                     <FaPhoneAlt id="about-section-8-1-2-2-phone" />
                     </div>
                     <div id="about-section-8-1-2-1-2">
                       <p id="about-section-8-1-2-1-2-p-1">Phone Number</p>
                       <p id="about-section-8-1-2-1-2-p-2">+91 90437 21244</p>
                     </div>
                  </div>
                  <div id="about-section-8-1-2-2">
                  <div id="about-section-8-1-2-2-1">
                     <MdEmail id="about-section-8-1-2-2-email" />
                     </div>
                     <div id="about-section-8-1-2-2-2">
                       <p id="about-section-8-1-2-2-2-p-1">Email</p>
                       <p id="about-section-8-1-2-2-2-p-2">info@intwhizz.in</p>
                     </div>
                  </div>
                  <div id="about-section-8-1-2-3">
                  <div id="about-section-8-1-2-3-1">
                     <IoLocationSharp id="about-section-8-1-2-3-location" />
                     </div>
                     <div id="about-section-8-1-2-3-2">
                       <p id="about-section-8-1-2-3-2-p-1">Address</p>
                       <p id="about-section-8-1-2-3-2-p-2">3 A/1 1st Floor, 60 Feet Road, STC College Road, Near Indian Bank, Perumalpuram,Tirunelveli 627007</p>
                     </div>
                  </div>
               </div>

               <div id="about-section-8-1-3">
                 <div id="about-section-8-1-3-1">
                   <div id="about-section-8-1-3-1-1">
                       <p id="about-section-8-1-3-1-1-p"> Get Enquiry Now </p> 
                       <div id="about-section-8-1-3-1-1-line">
                       </div> 
                       <div id="about-section-8-1-3-1-2">
                         <form id="about-section-8-1-3-1-2-form">
                          <div id="about-section-8-1-3-1-2-1">
                              <input type="text" id="about-section-8-1-3-1-2-1-input-1" placeholder='your name' />
                              <input type="email" id="about-section-8-1-3-1-2-1-input-2" placeholder='your email' />
                          </div>
                          <div id="about-section-8-1-3-1-2-2">
                              <input type="phone" id="about-section-8-1-3-1-2-2-input-1" placeholder='Phone number' />
                              <select id='about-section-8-1-3-1-2-2-input-2' name="Course Type">
                              <option>Selected Course</option>
                              </select>
                          </div>
                          <div id="about-section-8-1-3-1-2-3">
                              <textarea type="phone" id="about-section-8-1-3-1-2-3-input-1" placeholder='Address' />
                          </div>
                          <button id="about-section-8-1-3-1-2-3-button">Enquiry Now</button>
                         </form>
                       </div>
                   </div>
                   <div id="about-section-8-1-3-1-3">
                      <img id="about-section-8-1-3-1-3-img" src={img4} alt={img4} />
                   </div>
                 </div>
               </div>

             </div>
          </div>
       </section>
       
    </div>
  )
}

export default About;