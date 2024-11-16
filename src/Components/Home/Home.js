import React, {useState, useEffect} from 'react';
import "./Home.css";
import img1 from "../../assets/home1.jpeg";
import img2 from "../../assets/home2.jpeg";
import img3 from "../../assets/home3.jpeg";
import img4 from "../../assets/home4.png";
import img5 from "../../assets/webdesign.png";
import img6 from "../../assets/graphicsdesign.png";
import img7 from "../../assets/datascience.png";
import img8 from "../../assets/cybersecurity.png";
import img9 from "../../assets/machinelearning.png";
import img10 from "../../assets/home5.png";
import course1 from "../../assets/course1.png";
import course2 from "../../assets/course2.png";
import course3 from "../../assets/course3.png";
import course4 from "../../assets/course4.png";
import course5 from "../../assets/course5.png";
import course6 from "../../assets/course6.png";
import why1 from "../../assets/why1.png";
import test1 from "../../assets/test1.png";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import { IoBookSharp } from "react-icons/io5";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { motion } from "framer-motion";
import { fadeBigIn, fadeSmallIn } from "./../../variants";

function Home() {


  // const [ccourse, setCourse] = useState();

  // console.log(ccourse)

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 769px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(max-width: 769px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  console.log(matches)

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

      

      const course = [{
        id: 1,
        name: "Six Sigma",
        rating: "4.0",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        image: `${course1}`
      },
        {
          id: 2,
          name: "Digital Marketing",
          rating: "4.0",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
          image: `${course2}`
        },
        {
          id: 3,
          name: "Project Management",
          rating: "4.0",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            image: `${course3}`
        }, 
        {
          id: 4,
          name: "Graphic Design",
          rating: "4.0",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            image: `${course4}`
        },
        {
          id: 5,
          name: "Data Science",
          rating: "4.0",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            image: `${course5}`
        },
        {
          id: 6,
          name: "Machine Learning",
          rating: "4.0",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            image: `${course6}`
        }
    ]

  return (

    <div id="home">
      <div id="home1">

       {/* Section 1 */}

       <section id="home-section1">
       <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div id="carousel-image">
    <div class="carousel-item active">
      <img src={img1} class="d-block" id="d-block" alt={img1} />
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block" id="d-block" alt={img2} />
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block" id="d-block" alt={img3} />
    </div>
    </div>
    <div  id="carousel-content">
      <div id="carousel-content-1">

      </div>
      <motion.div
      variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}


      id="carousel-content-2">
          <h6 id="carousel-content-h6">Master the skills to drive
          your career</h6>
          <p id="carousel-content-2-para"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime placeat culpa earum quasi saepe magnam exercitationem facere iste porro optio quibusdam omnis tempora, sunt ipsum commodi. Cumque, qui vel.</p>
          <button id="home-section1-button">Get Started</button>
      </motion.div>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <IoIosArrowDropleftCircle  id="home-section1-circle-icon" aria-hidden="true" />
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <IoIosArrowDroprightCircle  id="home-section1-circle-icon" aria-hidden="true" />
    <span class="visually-hidden">Next</span>
  </button>
</div>
       </section>

       {/* Section 2 */}

       <section id="home-section-2">
           <div className='container' id="home-section-2-1">
           <p id="home-section-2-2-short-head">Limited Seats Available</p>
                 <div id="home-section-2-2">
                  <motion.div
                      variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
                      initial="hidden"
                      whileInView={'show'}
                      viewport={{ once: false, amount: 0.7 }}



                  id="home-section2-3">
                     <div id="home-section-2-5">
                         <h6 id="home-section2-5-form-head">Enroll Now</h6>
                      <form id="home-section2-5-form" action="https://formsubmit.co/m9741305@gmail.com" method="POST">

                          <input id='home-section2-5-input-name' type="text" name="name" placeholder="Name" required/>
                          <input id='home-section2-5-input-email' type="email" name="email" placeholder='Email' required /> 
                          <input id='home-section2-5-input-mobile' type="text" name="Mobile_Number" placeholder="Mobile Number" required />
                          <select id='home-section2-5-input-course'  name="Course Type">
                          <option>Course Type</option>
                          <option value="Web Design">Web Design</option>
                          <option value="Graphic Design">Graphic Design</option>
                          <option value="Data Science">Data Science</option>
                          <option value="Cyber Security">Cyber Security</option>
                          <option value="Machine Learning">Machine Learning</option>
                         </select>
                         <button type='submit' id="home-section2-5-submit">Submit</button>
                        
                      </form>
                     </div>
                  </motion.div>
                  <motion.div
                    variants={matches ? "none" :fadeBigIn("left")}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}

                  id="home-section2-4">
                      <img id="home-section2-4" src={img4} alt={img4} />
                    </motion.div>
                 </div>
           </div>
       </section>

       {/* Section 3 */}

        <section id="home-section-3">
              <div
              className='container' id="home-section-3-1">
                <div id='home-section-3-2'>

                 <motion.div
                 variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }}
                 id="home-section-3-5">
                     <p id="home-section-3-5-para">Top Course Categories</p>
                 </motion.div>
                 <motion.div
                    variants={matches ? fadeSmallIn("left")  :fadeBigIn("left")}
                   initial="hidden"
                   whileInView={'show'}
                   viewport={{ once: false, amount: 0.7 }}
                 id="home-section-3-6">
                   <button id="home-section-3-6-arrow-left"><IoIosArrowBack id="home-section-3-arrow-icon-1" /></button>
                   <button id="home-section-3-6-arrow-right"><IoIosArrowForward id="home-section-3-arrow-icon-2" /></button>
                 </motion.div>

                </div>

                <div
                id="home-section-3-3">
                  <div
                  id="home-section-3-3-flex-row">
{
  top_course.map((data) => (
    <motion.div
    variants={matches ? fadeSmallIn("up")  :fadeBigIn("up")}
    initial="hidden"
    whileInView={'show'}
    viewport={{ once: false, amount: 0.7 }}
    id="home-section-3-3-1">
    <div id="home-section-3-3-2">
      <img id="home-section-3-3-img" src={data.image} alt={data.image} />
    </div>
    <div id="home-section-3-3-3">
     <p id="home-section-3-3-para">{data.name}</p>                   
    </div>
 </motion.div>
  ))
}

                 </div>
                </div>
              </div>
       </section>


       {/* Section4 */}

       <section id="home-section-4">
          <div className="container">
            <div id="home-section-4-1">
                <motion.div 
                 variants={matches ? "none" :fadeBigIn("right")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }}
                id="home-section-4-2">
                   <img id="home-section-4-2-img" src={img10} alt={img10} />
                </motion.div>

                <motion.div
                 variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }}
                id="home-section-4-3">
                    <p id="home-section-4-3-1">About Us</p>
                    <div id="home-section-4-3-2"></div>
                    <h6 id="home-section-4-3-3">Intwhizz Training Institute</h6>
                    <p id="home-section-4-3-4">At IntWhizz, we’re digital and software wizards! Founded in 2021, we’re here to boost your online presence and craft solutions that go beyond the ordinary. Our team of experts has years of experience in the digital marketing and software industry and is passionate about delivering results that exceed our client’s expectations.</p>
                     <div id="home-section-4-3-5"> 
                      <div id="home-section-4-3-5-1">
                      <BsCheckCircleFill id="home-section-4-3-5-2" />
                      <p id="home-section-4-3-5-3">Expert Trainer</p>
                      </div>
                      <div id="home-section-4-3-5-1-1">
                      <BsCheckCircleFill id="home-section-4-3-5-2-1" />
                      <p id="home-section-4-3-5-3-1">Online Learning</p>
                      </div>
                      <div id="home-section-4-3-5-1-2">
                      <BsCheckCircleFill id="home-section-4-3-5-2-2" />
                      <p id="home-section-4-3-5-3-2">Placement Support</p>
                      </div>
                     </div>
                     <button id="home-section-4-3-6">Learn More</button>
                </motion.div>
            </div>
          </div>
       </section>

       {/* Section 5 */}

       <section id="home-section-5">
        <div
        className='container'>
         <div id="home-section-5-1">
            <motion.div
             variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
             initial="hidden"
             whileInView={'show'}
             viewport={{ once: false, amount: 0.7 }}
            id="home-section-5-2">
             <p id="home-section-5-2-p">Our Courses</p>
            </motion.div>
            <motion.div
             variants={matches ? fadeSmallIn("up")   :fadeBigIn("up")}
             initial="hidden"
             whileInView={'show'}
             viewport={{ once: false, amount: 0.7 }}
            id="home-section-5-3">
              <p id="home-section-5-3-p">"We offer online courses accessible to learners around the world, providing high-quality education globally."</p>
            </motion.div>

            <div
             
            id="home-section-5-4">

            <div
           
            id="home-section-5-4-row">

{
   course.map((item) => (
 <motion.div
 variants={matches ? fadeSmallIn("left") : fadeBigIn("left")}
initial="hidden"
whileInView={'show'}
viewport={{ once: false, amount: 0.7 }}
 id="home-section-5-4-card">
 <div id="home-section-5-4-1-head">
    <img id="home-section-5-4-1-img" src={item.image} alt={item.image} />
 </div>
 <div id="home-section-5-4-1-content">
     <div id="home-section-5-4-1-content-1">
      <p id="home-section-5-4-1-content-1-p-1">{item.name}</p>
      <div id="home-section-5-4-1-content-1-1">
        <FaStar id="home-section-5-4-1-content-1-1-star" />
        <p id="home-section-5-4-1-content-1-1-p-1">{item.rating}</p>
      </div>
     </div>
     <div id='home-section-5-4-1-content-2'>
     </div>
     <div id='home-section-5-4-1-content-3'>
       <p id="home-section-5-4-3-content-1-p-1">{item.description}</p>
     </div>
     <motion.div
       variants={matches ? fadeSmallIn("up")  :fadeBigIn("up")}
       initial="hidden"
       whileInView={'show'}
       viewport={{ once: false, amount: 0.7 }}
     id="home-section-5-4-1-content-4">
       <button id="home-section-5-4-1-button-4">Enroll Now</button>
     </motion.div>
 </div>
</motion.div>
   ))
}

</div>

<motion.div
  variants={matches ? fadeSmallIn("up")  :fadeBigIn("up")}
  initial="hidden"
  whileInView={'show'}
  viewport={{ once: false, amount: 0.7 }}
id="home-section-5-4-course-button-div">
  <button id='home-section-5-4-button'>View All Courses</button>
</motion.div>
           

            </div>

         </div>
        </div>
       </section>

       {/* Section 6 */}

       <section id="home-section-6">
        <div className='container'>
         <motion.div
          variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
         id="home-section-6-1">
            <p id='home-section-6-1-head-content'>Why Choose Us</p>
            <div id="home-section-6-1-line"></div>
         </motion.div>
         <motion.div
          variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
         id="home-section-6-2">
           <p id="home-section-6-2-head-content">Best Learning Platform</p>
           <p id="home-section-6-2-para-content">One platform, endless courses designed to enhance your skills and knowledge. Elevate your career with flexible learning options tailored just for you.</p>
         </motion.div>
         <motion.div
          // variants={matches ? fadeBigIn("up") :fadeBigIn("up")}
          // initial="hidden"
          // whileInView={'show'}
          // viewport={{ once: false, amount: 0.7 }}
         id="home-section-6-3">
            <div id="home-section-6-3-1">
               <motion.div
               variants={matches ? fadeSmallIn("up") : fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
               id="home-section-6-3-2">
                  <div id="home-section-6-3-2-1">
                     <img id="home-section-6-3-2-1-img" src={why1} alt={why1} />
                  </div>
                  <div id="home-section-6-3-2-2">
                    <p id="home-section-6-3-2-2-p-1">Quality Education</p>
                    <p id='home-section-6-3-2-2-p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                  </div>
               </motion.div>
               <motion.div
               variants={matches ? fadeSmallIn("up") : fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
               id="home-section-6-3-2">
                  <div id="home-section-6-3-2-1">
                  <GrGroup id="home-section-6-3-2-1-group-icon" />
                  </div>
                  <div id="home-section-6-3-2-2">
                    <p id="home-section-6-3-2-2-p-1">Professional training</p>
                    <p id='home-section-6-3-2-2-p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                  </div>
               </motion.div>
               <motion.div
               variants={matches ? fadeSmallIn("up") : fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
               id="home-section-6-3-2">
                  <div id="home-section-6-3-2-1">
                  <IoBookSharp id="home-section-6-3-2-1-group-icon" />
                  </div>
                  <div id="home-section-6-3-2-2">
                    <p id="home-section-6-3-2-2-p-1">Online Learning</p>
                    <p id='home-section-6-3-2-2-p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                  </div>
               </motion.div>
            </div>
         </motion.div>
        </div>
       </section>

       {/* Section 7 */}

        <section id="home-section-7">
        <div id="home-section-7-1">
            <div
            id="home-section-7-1-1">
                <motion.div
                 variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }}
                className='container' id="home-section-7-1-1-1">
                <p id='home-section-7-1-1-p-1'>Testimonials</p>
                <p id="home-section-7-1-1-p-2">What a wonderful experience with Intwhizz</p>
                </motion.div>
            </div>
            <div id="home-section-7-1-2">
              <div className='container'>
              <div
            
              id="home-section-7-1-2-1">

<motion.div
  variants={matches ? fadeSmallIn("up") : fadeBigIn("up")}
  initial="hidden"
  whileInView={'show'}
  viewport={{ once: false, amount: 0.7 }}
id="home-section-7-1-2-2">
   <div id="home-section-7-1-2-3">
    <img id="home-section-7-1-2-3-img" src={test1} alt={test1} />
   </div>
   <div id="home-section-7-1-2-4">
     <p id="home-section-7-1-2-4-p">Sara</p>
     <p id="home-section-7-1-2-5-p">Graphic Design Course</p>
     <p id="home-section-7-1-2-6-p"><FaQuoteLeft id="home-section-7-1-2-6-quote" />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia aliquid iusto illo laboriosam, sit, nostrum id quaerat pariatur repellendus quis ullam hic in, non harum inventore cumque laudantium . <FaQuoteRight id="home-section-7-1-2-6-quote" /></p>
     <p id="home-section-7-1-2-7-star-flex"> <FaStar id="home-section-7-1-2-7-star-fill" />   <FaStar id="home-section-7-1-2-7-star-fill" />   <FaStar id="home-section-7-1-2-7-star-fill" />   <FaStar id="home-section-7-1-2-7-star-fill" />  <FaStar id="home-section-7-1-2-7-star-unfill" />
      </p>
    </div>
</motion.div>

<motion.div
variants={matches ? fadeSmallIn("up") : fadeBigIn("up")}
initial="hidden"
whileInView={'show'}
viewport={{ once: false, amount: 0.7 }}
id="home-section-7-1-2-2">
   <div id="home-section-7-1-2-3">
    <img id="home-section-7-1-2-3-img" src={test1} alt={test1} />
   </div>
   <div id="home-section-7-1-2-4">
     <p id="home-section-7-1-2-4-p">Sara</p>
     <p id="home-section-7-1-2-5-p">Graphic Design Course</p>
     <p id="home-section-7-1-2-6-p"><FaQuoteLeft id="home-section-7-1-2-6-quote" />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia aliquid iusto illo laboriosam, sit, nostrum id quaerat pariatur repellendus quis ullam hic in, non harum inventore cumque laudantium . <FaQuoteRight id="home-section-7-1-2-6-quote" /></p>
     <p id="home-section-7-1-2-7-star-flex"> <FaStar id="home-section-7-1-2-7-star-fill" />   <FaStar id="home-section-7-1-2-7-star-fill" />   <FaStar id="home-section-7-1-2-7-star-fill" />   <FaStar id="home-section-7-1-2-7-star-fill" />  <FaStar id="home-section-7-1-2-7-star-unfill" />
      </p>
    </div>
</motion.div>

<motion.div
variants={matches ? fadeSmallIn("up") : fadeBigIn("up")}
initial="hidden"
whileInView={'show'}
viewport={{ once: false, amount: 0.7 }}
id="home-section-7-1-2-2">
   <div id="home-section-7-1-2-3">
    <img id="home-section-7-1-2-3-img" src={test1} alt={test1} />
   </div>
   <div id="home-section-7-1-2-4">
     <p id="home-section-7-1-2-4-p">Sara</p>
     <p id="home-section-7-1-2-5-p">Graphic Design Course</p>
     <p id="home-section-7-1-2-6-p"><FaQuoteLeft id="home-section-7-1-2-6-quote" />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia aliquid iusto illo laboriosam, sit, nostrum id quaerat pariatur repellendus quis ullam hic in, non harum inventore cumque laudantium . <FaQuoteRight id="home-section-7-1-2-6-quote" /></p>
     <p id="home-section-7-1-2-7-star-flex"> <FaStar id="home-section-7-1-2-7-star-fill" />   <FaStar id="home-section-7-1-2-7-star-fill" />   <FaStar id="home-section-7-1-2-7-star-fill" />   <FaStar id="home-section-7-1-2-7-star-fill" />  <FaStar id="home-section-7-1-2-7-star-unfill" />
      </p>
    </div>
</motion.div>

</div>
              </div>
            </div>
        </div>
        </section>
      
 

       {/* Section 8 */}

       <section id="home-section-8">
         <div className='container'>
           <div id="home-section-8-1">
             <motion.div 
              variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
             id="home-section-8-1-1">
             <TfiEmail id="home-section-8-1-email" />
             <p id="home-section-8-1-para">Subscribe To Newsletter</p>
             </motion.div>
             <motion.div 
              variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
             id="home-section-8-1-2">
               <input type="text" id="home-section-8-1-2-input" placeholder='Enter Email' />
               <button id="home-section-8-1-2-button">Submit</button>
              </motion.div>
           </div>
         </div>
       </section>

      </div>
    </div>
  )
}

export default Home;