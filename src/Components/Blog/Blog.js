import React, {useState, useEffect} from 'react';
import "./Blog.css";
import { FaAngleRight } from "react-icons/fa6";
import blog_img_1 from "../../assets/blog_image_1.png";
import blog_img_2 from "../../assets/blog_img_2.png";
import blog_img_3 from "../../assets/blog_img_3.png";
import img4 from "../../assets/home4.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { motion } from "framer-motion";
import { fadeBigIn, fadeSmallIn } from "./../../variants";
function Blog() {

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 769px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(max-width: 769px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <div id="blog">
        
        {/* Blog Section 1 */}

        <section id="blog-section-1">
    <motion.div
       variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
       initial="hidden"
       whileInView={'show'}
       viewport={{ once: false, amount: 0.7 }}
    className='container' id='blog-section-1-1'>
    <h6 id="blog-section-1-h6-1">Blog</h6>
    <p id="blog-section-1-p-1">Home <FaAngleRight id="blog-section-1-icons" /> Blog</p>
    </motion.div>
  </section>

      {/* Blog section 2 */}

      <section id="blog-section-2">
         <div className='container'>
            <div id="blog-section-2-1">
                <motion.div
                   variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
                   initial="hidden"
                   whileInView={'show'}
                   viewport={{ once: false, amount: 0.7 }}
                id="blog-section-2-1-1">
                 <img id="blog-section-2-1-1-img" src={blog_img_1} alt={blog_img_1} />
                </motion.div>
                <motion.div
                   variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
                   initial="hidden"
                   whileInView={'show'}
                   viewport={{ once: false, amount: 0.7 }}
                id="blog-section-2-1-2">
                    <div id="blog-section-2-1-2-1">
                       <p id="blog-section-2-1-2-1-p-1">At IntWhizz, We’re Digital and Software Wizards!</p>
                       <p id="blog-section-2-1-2-1-p-2">Founded in 2021, IntWhizz has quickly made a name for itself in the world of digital marketing and software solutions. We’re not just another marketing company; we’re your strategic partner in the journey toward digital excellence. With a team of industry veterans passionate about innovation and results, we’ve set out on a mission to help businesses elevate their online presence and craft custom solutions that go beyond the ordinary.</p>
                    </div>
                    <div id="blog-section-2-1-2-2">
                    <p id="blog-section-2-1-2-2-p-1">Our Magical Approach</p>
                    <p id="blog-section-2-1-2-2-p-2">At IntWhizz, we don’t believe in cookie-cutter solutions. Every brand has its own personality, and we’re here to bring that personality to life in the digital realm. Whether you’re looking to drive more traffic to your website, increase your social media engagement, or streamline your business operations with bespoke software, we’ve got you covered.</p>
                    </div>        
                </motion.div>
            </div>

            <div id="blog-section-2-2">
               <motion.div
                           variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
                           initial="hidden"
                           whileInView={'show'}
                           viewport={{ once: false, amount: 0.7 }}
               id="blog-section-2-2-1">
                    <div id="blog-section-2-2-1-1">
                     <p id="blog-section-2-2-1-1-p-1">Here’s what we bring to the table:</p>
                     <p id="blog-section-2-2-1-1-p-2">Digital Marketing Mastery: From SEO to PPC, our marketing wizards work tirelessly to create strategies that drive results. We make sure your business shines bright in the crowded digital marketplace.</p>
                    </div>
                    <div id="blog-section-2-2-1-1">
                     <p id="blog-section-2-2-1-1-p-1">Software Solutions that Scale:</p>
                     <p id="blog-section-2-2-1-1-p-2">Our team of software experts crafts custom software solutions tailored to your specific business needs, ensuring smooth operations and enhanced customer experience.</p>
                    </div>
                    <div id="blog-section-2-2-1-1">
                     <p id="blog-section-2-2-1-1-p-1">Data-Driven Strategies:</p>
                     <p id="blog-section-2-2-1-1-p-2">We combine creativity with cutting-edge data analytics to ensure every decision we make is backed by insights. We believe in results, and we don’t rest until we’ve delivered.</p>
                    </div>
                    <div id="blog-section-2-2-1-1">
                     <p id="blog-section-2-2-1-1-p-1">Creative Branding:</p>
                     <p id="blog-section-2-2-1-1-p-2">We help you tell your story in the most engaging and impactful way possible, making your brand memorable in the hearts of your audience.</p>
                    </div>
               </motion.div>
               <motion.div
                           variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
                           initial="hidden"
                           whileInView={'show'}
                           viewport={{ once: false, amount: 0.7 }}
               id="blog-section-2-2-2">
                   <img id="blog-section-2-2-2-img" src={blog_img_2} alt={blog_img_2} />
               </motion.div>
            </div>


            <div id="blog-section-2-3">
              <motion.div
                          variants={matches ? "none" :fadeBigIn("right")}
                          initial="hidden"
                          whileInView={'show'}
                          viewport={{ once: false, amount: 0.7 }}
              id="blog-section-2-3-1"> 
                 <img id="blog-section-2-3-1-img" src={blog_img_3} alt={blog_img_3} />
              </motion.div>
              <motion.div
                          variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
                          initial="hidden"
                          whileInView={'show'}
                          viewport={{ once: false, amount: 0.7 }}
              id="blog-section-2-3-2">
                 <div id="blog-section-2-3-2-1">
                   <p id="blog-section-2-3-2-1-p-1">Why IntWhizz?</p>
                   <p id="blog-section-2-3-2-1-p-2">Since our inception in 2021, we’ve had one goal: to create extraordinary digital experiences for our clients. Our team’s expertise spans across both digital marketing and software development, making us uniquely equipped to offer a holistic approach to your digital needs.</p>
                 </div>

                 <div id="blog-section-2-3-2-1">
                   <p id="blog-section-2-3-2-1-p-1">Expert Team:</p>
                   <p id="blog-section-2-3-2-1-p-2">Our experts have years of hands-on experience in the digital and software fields, ensuring you get the best strategies and solutions.</p>
                   <p id="blog-section-2-3-2-1-p-2">Innovative Solutions: We don’t settle for ordinary. We push boundaries, using the latest tools and trends to deliver something truly special for your business.</p>
                   <p id="blog-section-2-3-2-1-p-2">Client-Centered Approach: Your success is our success. We work closely with you to understand your goals and develop strategies that align with your vision.</p>
                 </div>
              </motion.div>
            </div> 

         </div>
      </section>

         {/* Blog Section 3 */}

         <section id="blog-section-3">
<div className='container'>
   <div id='blog-section-3-1'>
     <motion.div
                 variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }}
     id="blog-section-3-1-1">
        <p id="blog-section-3-1-1-p">Contact</p>
     </motion.div>

     <div id="blog-section-3-1-2">
        <motion.div
            variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
        id="blog-section-3-1-2-1">
           <div id="blog-section-3-1-2-1-1">
           <FaPhoneAlt id="blog-section-3-1-2-2-phone" />
           </div>
           <div id="blog-section-3-1-2-1-2">
             <p id="blog-section-3-1-2-1-2-p-1">Phone Number</p>
             <p id="blog-section-3-1-2-1-2-p-2">+91 90437 21244</p>
           </div>
        </motion.div>
        <motion.div
            variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
        id="blog-section-3-1-2-2">
        <div id="blog-section-3-1-2-2-1">
           <MdEmail id="blog-section-3-1-2-2-email" />
           </div>
           <div id="blog-section-3-1-2-2-2">
             <p id="blog-section-3-1-2-2-2-p-1">Email</p>
             <p id="blog-section-3-1-2-2-2-p-2">info@intwhizz.in</p>
           </div>
        </motion.div>
        <motion.div
            variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
        id="blog-section-3-1-2-3">
        <div id="blog-section-3-1-2-3-1">
           <IoLocationSharp id="blog-section-3-1-2-3-location" />
           </div>
           <div id="blog-section-3-1-2-3-2">
             <p id="blog-section-3-1-2-3-2-p-1">Address</p>
             <p id="blog-section-3-1-2-3-2-p-2">3 A/1 1st Floor, 60 Feet Road, STC College Road, Near Indian Bank, Perumalpuram,Tirunelveli 627007</p>
           </div>
        </motion.div>
     </div>

     <div
      
     id="blog-section-3-1-3">
       <div id="blog-section-3-1-3-1">
         <motion.div
              variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
         id="blog-section-3-1-3-1-1">
             <p id="blog-section-3-1-3-1-1-p"> Get Enquiry Now </p> 
             <div id="blog-section-3-1-3-1-1-line">
             </div> 
             <div id="blog-section-3-1-3-1-2">
               <form id="blog-section-3-1-3-1-2-form">
                <div id="blog-section-3-1-3-1-2-1">
                    <input type="text" id="blog-section-3-1-3-1-2-1-input-1" placeholder='your name' />
                    <input type="email" id="blog-section-3-1-3-1-2-1-input-2" placeholder='your email' />
                </div>
                <div id="blog-section-3-1-3-1-2-2">
                    <input type="phone" id="blog-section-3-1-3-1-2-2-input-1" placeholder='Phone number' />
                    <select id='blog-section-3-1-3-1-2-2-input-2' name="Course Type">
                    <option>Selected Course</option>
                    </select>
                </div>
                <div id="blog-section-3-1-3-1-2-3">
                    <textarea type="phone" id="blog-section-3-1-3-1-2-3-input-1" placeholder='Address' />
                </div>
                <button id="blog-section-3-1-3-1-2-3-button">Enquiry Now</button>
               </form>
             </div>
         </motion.div>
         <motion.div
              variants={matches ? "none" :fadeBigIn("left")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
         id="blog-section-3-1-3-1-3">
            <img id="blog-section-3-1-3-1-3-img" src={img4} alt={img4} />
         </motion.div>
       </div>
     </div>

   </div>
</div>
</section>

{/* Blog Section 4 */}

    <section id="blog-section-4">
<div className='container'>
  <div id="blog-section-4-1">
    <motion.div
      variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
    id="blog-section-4-1-1">
    <TfiEmail id="blog-section-4-1-email" />
    <p id="blog-section-4-1-para">Subscribe To Newsletter</p>
    </motion.div>
    <motion.div
    variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
    initial="hidden"
    whileInView={'show'}
    viewport={{ once: false, amount: 0.7 }}
    id="blog-section-4-1-2">
      <input type="text" id="blog-section-4-1-2-input" placeholder='Enter Email' />
      <button id="blog-section-4-1-2-button">Submit</button>
     </motion.div>
  </div>
</div>
</section>

    </div>
  )
}

export default Blog;