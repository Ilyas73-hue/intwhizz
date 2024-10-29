import React from 'react';
import "./Course.css";
import { FaAngleRight } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import course1 from "../../assets/course1.png";
import course2 from "../../assets/course2.png";
import course3 from "../../assets/course3.png";
import course4 from "../../assets/course4.png";
import course5 from "../../assets/course5.png";
import course6 from "../../assets/course6.png";
import course7 from "../../assets/course7.png";
import course8 from "../../assets/course8.png";
import course9 from "../../assets/course9.png";
import course10 from "../../assets/course10.png";
import course11 from "../../assets/course11.png";
import course12 from "../../assets/course12.png";
import img4 from "../../assets/home4.png";
import why1 from "../../assets/why1.png";
import test1 from "../../assets/test1.png";
import { GrGroup } from "react-icons/gr";
import { IoBookSharp } from "react-icons/io5";
import img1 from "../../assets/about2.png";
import { FaStar } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";


function Course() {

  
  const course_1 = [{
    id: 1,
    name: "Six Sigma",
    rating: "4.0",
    duration: "12 to 24  weeks",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    image: `${course1}`
  },
    {
      id: 2,
      name: "Digital Marketing",
      rating: "4.0",
      duration: "12 to 24  weeks",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      image: `${course2}`
    },
    {
      id: 3,
      name: "Project Management",
      rating: "4.0",
      duration: "12 to 24  weeks",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        image: `${course3}`
    }, 
    {
      id: 4,
      name: "Product Management",
      rating: "4.0",
      duration: "12 to 24  weeks",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        image: `${course7}`
    },
    {
      id: 5,
      name: "Supply Chain Management",
      rating: "4.0",
      duration: "12 to 24  weeks",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        image: `${course8}`
    },
    {
      id: 6,
      name: "Business Analysis",
      rating: "4.0",
      duration: "12 to 24  weeks",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        image: `${course9}`
    }
];

const course_2 = [{
  id: 1,
  name: "Graphics Design",
  rating: "4.0",
  duration: "12 to 24  weeks",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  image: `${course4}`
},
  {
    id: 2,
    name: "Data Science",
    rating: "4.0",
    duration: "12 to 24  weeks",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    image: `${course5}`
  },
  {
    id: 3,
    name: "Machine Learning",
    rating: "4.0",
    duration: "12 to 24  weeks",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      image: `${course6}`
  }, 
  {
    id: 4,
    name: "Block Chain",
    rating: "4.0",
    duration: "12 to 24  weeks",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      image: `${course10}`
  },
  {
    id: 5,
    name: "Cyber Security",
    rating: "4.0",
    duration: "12 to 24  weeks",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      image: `${course11}`
  },
  {
    id: 6,
    name: "Cloud computing",
    rating: "4.0",
    duration: "12 to 24  weeks",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      image: `${course12}`
  }
];


// Buisness



const business = [{
  "id": 1,
  "name": "Business Analysis"
}, {
    "id": 2,
  "name": "Business Analysis"
}, {
    "id": 3,
  "name": "Supply-Chain Management"
}, {
    "id": 4,
  "name": "Big-Data Analytics"
}, {
  "id": 5,
  "name": "Human Resource Management" 
}, {
  "id": 6,
  "name": "Sales Management" 
}, {
  "id": 7,
  "name": "Marketing Management"    
}, {
  "id": 8,
  "name": "Project Management"    
},
{
  "id": 9,
  "name": "Strategic Brand Management"    
}, {
  "id": 10,
  "name": "Stress Management"    
}, {
  "id": 11,
  "name": "Management of Change"     
}, {
  "id": 12,
  "name": "Innovation and Entrepreneurship"     
},{
  "id": 13,
  "name": "Self-Development of Professionals"     
}, {
  "id": 14,
  "name": "Leadership"     
}, {
  "id": 15,
  "name": "Industry Overviews"     
}, {
  "id": 16,
  "name": "Technology in Business"     
}, {
  "id": 17,
  "name": "Advanced Management Skills"     
}, {
  "id": 18,
  "name": "Corporate Social Responsibility"   
}, {
  "id": 19,
  "name": "International Business"      
}, {
  "id": 20,
  "name": "Basic Management Skills"    
}, {
  "id": 21,
  "name": "Career Passport"    
}, {
  "id": 22,
  "name": "Critical Skills Pathway"    
}, {
  "id": 23,
  "name": "Personal Effectiveness"    
}, {
  "id": 24,
  "name": "Professional Effectiveness"      
}, {
  "id": 25,
  "name": "Communication Skills"      
}, {
  "id": 26,
  "name": "Give and Receiving Feedback"     
}, {
  "id": 27,
  "name": "Business Writing Skills"     
}, {
  "id": 28,
  "name": "Listening Essentials"     
}, {
  "id": 29,
  "name": "Strategy and Innovation"    
}, {
  "id": 30,
  "name": "Trust and Team Building"   
}, {
  "id": 31,
  "name": "Emotional Intelligence"  
}, {
  "id": 32,
  "name": "Analytical Reasoning"  
}, {
  "id": 33,
  "name": "Performance Measurement"  
}, {
  "id": 34,
  "name": "Conflict Management  Customer Service"  
}, {
  "id": 35,
  "name": "Critical Thinking Essentials"  
}, {
  "id": 36,
  "name": "Decision Making Skills"  
}, {
  "id": 37,
  "name": "Negotiation Essentials"  
}, {
  "id": 38,
  "name": "Operation Management"  
}, {
  "id": 39,
  "name": "Banking and Insurance"  
}, {
 "id": 40,
  "name": "Big Data for Business Analysts"   
}, {
  "id": 41,
  "name": "Essential of a Modern Workforce"  
}, {
  "id": 42,
  "name": "Situational Leadership"  
}
];

// it skills




const it_skill = [{
  "id": 1, 
      "name": "Python"
  },
  {
      "id": 2, 
      "name": "Cloud Computing and Virtualization"
  }, {
        "id": 3, 
      "name": "Data and Database"
  }, {
         "id": 4, 
      "name": "Block Chain"
  }, {
      "id": 5, 
      "name": "Deep Learning"
  }, {
       "id": 6, 
      "name": "Cyber Security"
  }, {
        "id": 7, 
      "name": "Artificial Intelligence"
  }, {
       "id": 8, 
      "name": "Machine Learning"
  }, {
      "id": 9, 
      "name": "Big Data"
  }, {
      "id": 10, 
      "name": "Ethical Hacking"  
  }, {
      "id": 11, 
      "name": "Networking and Telecommunication"  
  }, {
      "id": 12, 
      "name": "Microsoft ASURE"  
  }, {
      "id": 13, 
      "name": "Data Science"  
  }, {
     "id": 14, 
      "name": "Design Thinking"   
  }, {
      "id": 15, 
      "name": "Amazon Web Service Solution"   
  }, {
      "id": 16, 
      "name": "Apprentice Web Programmer" 
  }, {
      "id": 17, 
      "name": "Operating system and service" 
  }, {
      "id": 18, 
      "name": "Software Testing" 
  }, {
      "id": 19,
      "name": "Mobile Application Development" 
  }, {
    "id": 20,
      "name": "Software Design and Development"   
  }, {
      "id": 21,
      "name": "Web development and Graphic Design"   
  }, {
      "id": 22,
      "name": "Internet of Things"   
  }, {
      "id": 23,
      "name": "Enterprise Resource Planning"   
  },{
      "id": 24,
      "name": "Digital Transformation"   
  },{
      "id": 25,
      "name": "Programming in Hadoop"   
  },{
      "id": 26,
      "name": "Mobile Development"   
  }, {
      "id": 27,
      "name": "Software Programming for Beginner"   
  }, {
      "id": 28,
      "name": "Learning C++"   
  }, {
      "id": 29,
      "name": "Oracle Database 12 C"      
  }, {
      "id": 30,
      "name": "Front End Development"   
  }, {
      "id": 31,
      "name": "Back End Development"   
  }, {
      "id": 32,
      "name": "Google Data Engineer"   
  }
  ];

  // Certification

  const certification = [{
    "id":1,
    "name":"Amazon"
},
 {
    "id": 2,
    "name": "American Society for Quality (ASQ)"
}, {
    "id": 3,
    "name": "BCS Professional Certification"
}, {
 "id": 4,
    "name": "Cisco"
}, {
   "id": 5,
    "name": "CompTIA" 
}, {
   "id": 6,
    "name": "E C-Council"  
}, {
    "id": 7,
    "name": "Google"  
}, {
    "id": 8,
    "name": "Human Resource Certification Institute"  
}, {
    "id": 9,
    "name": "(HRCI)"  
}, {
    "id": 10,
    "name": "Information System Audit and Control"  
}, {
    "id": 11,
    "name": "Association (ISACA)" 
}, {
    "id": 12,
    "name": "(ISC)2" 
}, {
    "id": 13,
    "name": "SAS" 
}, {
    "id": 14,
    "name": "TOGAF" 
}, {
    "id": 15,
    "name": "International Software Testing Qualification"    
}, {
    "id": 16,
    "name": "Board (ISTQB)"    
}, {
    "id": 17,
    "name": "Artificial Intelligent"    
}, {
    "id": 18,
    "name": "Cyber Security"    
}, {
    "id": 19,
    "name": "Python"    
}, {
    "id": 20,
    "name": "Microsoft"   
}, {
     "id": 21,
    "name": "Oracle"
}, {
     "id": 22,
    "name": "ITIL"
}, {
      "id": 23,
    "name": "Juniper"
},{
     "id": 24,
    "name": "PRINCE 2"
}, {
      "id": 25,
    "name": "Project Management Institute (PMI)"
}, {
       "id": 26,
    "name": "Red Hat"
}, {
       "id": 27,
    "name": "ISOGRAD"
}, {
     "id": 28,
    "name": "Linux Professional Institute"
}, {
     "id": 29,
    "name": "International Institute of Business Analysis (IIBA)"
}];

// productive&collaboration

const productive_collaboration = [{
  "id": 1, 
  "name": "Six Sigma – Green Yellow Six Sigma – Green Belt"
}, {
   "id": 2, 
  "name": "Social Media and Digital Marketing"
}, {
  "id": 3, 
  "name": "Business Skills and IT Professionals"
}, {
    "id": 4, 
  "name": "Business Application"
}, {
     "id": 5, 
  "name": "Computer Graphics, Adobe Photoshop"
}, {
    "id": 6, 
  "name": "Google"
},
{
     "id": 7, 
  "name": "Graphics and Design"
}, {
    "id": 8, 
  "name": "Competitive Strategies"
}, {
  "id": 9, 
  "name": "Process Improvement" 
}, {
  "id": 10, 
  "name": "Android App Development Essentials" 
}, {
  "id": 11, 
  "name": "Animation and Video Editing" 
}, {
  "id": 12, 
  "name": "Six Sigma – Black Belt" 
},{
  "id": 13, 
  "name": "Microsoft Office 2019" 
}, {
  "id": 14, 
  "name": "Microsoft Office 365"   
}, {
  "id": 15, 
  "name": "Productivity Tools"   
}, {
  "id": 16, 
  "name": "Social Networking Tools"  
}, {
  "id": 17, 
  "name": "Mobile Device and Computer Skills"  
}, {
  "id": 18, 
  "name": "Collaboration Tools"  
}, {
  "id": 19, 
  "name": "IBM for End Users"  
}, {
  "id": 20, 
  "name": "Internet"  
}, {
  "id": 21, 
  "name": "Advanced Excel Pathway" 
}]



  return (
    <div id="course">
      
      {/* Course Section 1 */}
      
       



<section id="course-section-1">
<div className='container' id='course-section-1-1'>
<h6 id="course-section-1-h6-1">Courses</h6>
<p id="course-section-1-p-1">Home <FaAngleRight id="course-section-1-icons" /> Courses</p>
</div>
</section>


{/* Course Section 2 */}

<section id="course-section-2">
    <div className='container'>
    <div id="course-section-2-1">
      <div id="course-section-2-1-1">
        <p id="course-section-2-1-1-p-1">Courses</p>
        <p id="course-section-2-1-1-p-2">"We offer online courses accessible to learners around the world, providing high-quality education globally."</p>
      </div>
      <div id="course-section-2-1-2">
        <p id="course-section-2-1-2-p-1">Search</p>
        <div id="course-section-2-1-2-div">
        <input type="text" id="course-section-2-1-2-input" placeholder='Find your course' />
        <IoSearch id="course-section-2-1-2-icons" />
        </div>
      </div>
    </div>
    </div>
</section>

{/* Course Section 3 */}

<section id="course-section-3">
   <div className='container'>
      <div id="course-section-3-1">
       <div id="course-section-3-1-1">
           
       </div>
       <div id="course-section-3-1-2">
           <p id="course-section-3-1-2-p-1">Popular Management Course</p>
           <p id="course-section-3-1-2-p-2"> SUNY and NEF University have added more Job-Ready courses under the MAKE INDIA GREAT PROGRAM – MIG. Now, 103 Courses are available in high-demand learning areas at an affordable fee structure to students, and professionals.</p>
           </div>
      </div>
   </div>
</section>

  {/* Course-section-4 */}

  <section id="course-section-4">
    <div className='container'>
       <div id="course-section-4-1">
          <div id="course-section-4-1-row">

            {
               course_1.map((item) => (
                
             <div id="course-section-4-1-card">
             <div id="course-section-4-1-1-head">
                <img id="course-section-4-1-1-img" src={item.image} alt={item.image} />
             </div>
             <div id="course-section-4-1-1-content">
                 <div id="course-section-4-1-1-content-1">
                  <p id="course-section-4-1-1-content-1-p-1">{item.name}</p>
                  <div id="course-section-4-1-1-content-1-1">
                    <FaStar id="course-section-4-1-1-content-1-1-star" />
                    <p id="course-section-4-1-1-content-1-1-p-1">{item.rating}</p>
                  </div>
                 </div>
                 <div id='course-section-4-1-1-content-2'>
                   <p id="course-section-4-1-2-content-1-p-1">Duration : {item.duration}</p>
                 </div>
                 <div id='course-section-4-1-1-content-3'>
                   <p id="course-section-4-1-3-content-1-p-1">{item.description}</p>
                 </div>
                 <div id="course-section-4-1-1-content-4">
                   <button id="course-section-4-1-1-button-4">Enroll Now</button>
                 </div>
             </div>
          </div>
               ))
            }

          </div>
       </div>
    </div>
  </section>

  {/* course Section 5 */}

  <section id="course-section-5">
    <div className='container'>
     
     <div id="course-section-5-1">

      <div id="course-section-5-1-1">
         <img id="course-section-5-1-1-img" src={img1} alt={img1} />
      </div>

      <div id="course-section-5-1-2">
      
      <p id="course-section-5-1-2-p-1">Interships & Placements</p>

      <p id="course-section-5-1-2-p-2">Career Outcomes</p>

      <p id="course-section-5-1-2-p-3">Annually the top ‘Certificate Holders’ in Cyber Security, Artificial Intelligence, Blockchain, Data Science, Machine Learning, Deep Thinking, Ethical Hacking, Big Data, Cloud Computing, and Project Management & all other courses holders are also eligible for Internships & Placements across pan India, and abroad subject to securing “A” grade with distinction.</p>

      </div>

     </div>

    </div>
   </section>

{/* Course Section 6 */}



<section id="course-section-6">
   <div className='container'>
      <div id="course-section-6-1">
       <div id="course-section-6-1-1">
           
       </div>
       <div id="course-section-6-1-2">
           <p id="course-section-6-1-2-p-1">IT Certificate Courses</p>
           <p id="course-section-6-1-2-p-2"> Courses are designed to deliver Industry Skills in IT & Management domain to enable placements opportunity.</p>
           </div>
      </div>
   </div>
</section>

   {/* Course Section 7 */}



  <section id="course-section-7">
    <div className='container'>
       <div id="course-section-7-1">
          <div id="course-section-7-1-row">

            {
               course_2.map((item) => (
             <div id="course-section-7-1-card">
             <div id="course-section-7-1-1-head">
                <img id="course-section-7-1-1-img" src={item.image} alt={item.image} />
             </div>
             <div id="course-section-7-1-1-content">
                 <div id="course-section-7-1-1-content-1">
                  <p id="course-section-7-1-1-content-1-p-1">{item.name}</p>
                  <div id="course-section-7-1-1-content-1-1">
                    <FaStar id="course-section-7-1-1-content-1-1-star" />
                    <p id="course-section-7-1-1-content-1-1-p-1">{item.rating}</p>
                  </div>
                 </div>
                 <div id='course-section-7-1-1-content-2'>
                   <p id="course-section-7-1-2-content-1-p-1">Duration : {item.duration}</p>
                 </div>
                 <div id='course-section-7-1-1-content-3'>
                   <p id="course-section-7-1-3-content-1-p-1">{item.description}</p>
                 </div>
                 <div id="course-section-7-1-1-content-4">
                   <button id="course-section-7-1-1-button-4">Enroll Now</button>
                 </div>
             </div>
          </div>
               ))
            }

          </div>
       </div>
    </div>
  </section>

  {/* course-section-8 */}

  <section id="course-section-8">
   <div className='container'>
     <div id="course-section-8-1">
      <p id="course-section-8-1-p">Other Top Courses</p>
       <div id="course-section-8-1-1">

          <div id="course-section-8-1-1-1">
              <div id="course-section-8-1-1-1-1">
                  <p id="course-section-8-1-1-1-1-p-1">Business Skills</p>
              </div>
              <div id="course-section-8-1-1-1-2">
                {
                  business.map((item) => (
                    <div id="course-section-8-1-1-1-2-1">
                    <div id="course-section-8-1-1-1-2-1-1">
                    <GiGraduateCap id="course-section-8-1-1-1-2-1-1-icon"  />
                    </div>
                    <div id="course-section-8-1-1-1-2-1-2">
                      <p id="course-section-8-1-1-1-2-1-2-p"> {item.name} </p>
                    </div>
                 </div>
                  ))
                }
              
              </div>
          </div>

          <div id="course-section-8-1-1-1">
              <div id="course-section-8-1-1-1-1">
                  <p id="course-section-8-1-1-1-1-p-1">IT Skills</p>
              </div>
              <div id="course-section-8-1-1-1-2">
                {
                  it_skill.map((item) => (
                    <div id="course-section-8-1-1-1-2-1">
                    <div id="course-section-8-1-1-1-2-1-1">
                    <GiGraduateCap id="course-section-8-1-1-1-2-1-1-icon"  />
                    </div>
                    <div id="course-section-8-1-1-1-2-1-2">
                      <p id="course-section-8-1-1-1-2-1-2-p"> {item.name} </p>
                    </div>
                 </div>
                  ))
                }
              
              </div>
          </div>


          <div id="course-section-8-1-1-1">
              <div id="course-section-8-1-1-1-1">
                  <p id="course-section-8-1-1-1-1-p-1">Certifications</p>
              </div>
              <div id="course-section-8-1-1-1-2">
                {
                  certification.map((item) => (
                    <div id="course-section-8-1-1-1-2-1">
                    <div id="course-section-8-1-1-1-2-1-1">
                    <GiGraduateCap id="course-section-8-1-1-1-2-1-1-icon"  />
                    </div>
                    <div id="course-section-8-1-1-1-2-1-2">
                      <p id="course-section-8-1-1-1-2-1-2-p"> {item.name} </p>
                    </div>
                 </div>
                  ))
                }
              
              </div>
          </div>

          
          <div id="course-section-8-1-1-1">
              <div id="course-section-8-1-1-1-1">
                  <p id="course-section-8-1-1-1-1-p-1">Productivity & Collaboration</p>
              </div>
              <div id="course-section-8-1-1-1-2">
                {
                 productive_collaboration.map((item) => (
                    <div id="course-section-8-1-1-1-2-1">
                    <div id="course-section-8-1-1-1-2-1-1">
                    <GiGraduateCap id="course-section-8-1-1-1-2-1-1-icon"  />
                    </div>
                    <div id="course-section-8-1-1-1-2-1-2">
                      <p id="course-section-8-1-1-1-2-1-2-p"> {item.name} </p>
                    </div>
                 </div>
                  ))
                }
              
              </div>
          </div>

       </div>
     </div>
   </div>
  </section>

  {/* course Section 9 */}

  <section id="course-section-9">
        <div className='container'>
         <div id="course-section-9-1">
            <p id='course-section-9-1-head-content'>Why Choose Us</p>
            <div id="course-section-9-1-line"></div>
         </div>
         <div id="course-section-9-2">
           <p id="course-section-9-2-head-content">Best Learning Platform</p>
           <p id="course-section-9-2-para-content">One platform, endless courses designed to enhance your skills and knowledge. Elevate your career with flexible learning options tailored just for you.</p>
         </div>
         <div id="course-section-9-3">
            <div id="course-section-9-3-1">
               <div id="course-section-9-3-2">
                  <div id="course-section-9-3-2-1">
                     <img id="course-section-9-3-2-1-img" src={why1} alt={why1} />
                  </div>
                  <div id="course-section-9-3-2-2">
                    <p id="course-section-9-3-2-2-p-1">Quality Education</p>
                    <p id='course-section-9-3-2-2-p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                  </div>
               </div>
               <div id="course-section-9-3-2">
                  <div id="course-section-9-3-2-1">
                  <GrGroup id="course-section-9-3-2-1-group-icon" />
                  </div>
                  <div id="course-section-9-3-2-2">
                    <p id="course-section-9-3-2-2-p-1">Professional training</p>
                    <p id='course-section-9-3-2-2-p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                  </div>
               </div>
               <div id="course-section-9-3-2">
                  <div id="course-section-9-3-2-1">
                  <IoBookSharp id="course-section-9-3-2-1-group-icon" />
                  </div>
                  <div id="course-section-9-3-2-2">
                    <p id="course-section-9-3-2-2-p-1">Online Learning</p>
                    <p id='course-section-9-3-2-2-p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                  </div>
               </div>
            </div>
         </div>
        </div>
       </section>

       {/* course-section-10 */}

       <section id="course-section-10">
        <div id="course-section-10-1">
            <div id="course-section-10-1-1">
                <div className='container' id="course-section-10-1-1-1">
                <p id='course-section-10-1-1-p-1'>Testimonials</p>
                <p id="course-section-10-1-1-p-2">What a wonderful experience with Intwhizz</p>
                </div>
            </div>
            <div id="course-section-10-1-2">
              <div className='container'>
              <div id="course-section-10-1-2-1">

<div id="course-section-10-1-2-2">
   <div id="course-section-10-1-2-3">
    <img id="course-section-10-1-2-3-img" src={test1} alt={test1} />
   </div>
   <div id="course-section-10-1-2-4">
     <p id="course-section-10-1-2-4-p">Sara</p>
     <p id="course-section-10-1-2-5-p">Graphic Design Course</p>
     <p id="course-section-10-1-2-6-p"><FaQuoteLeft id="course-section-10-1-2-6-quote" />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia aliquid iusto illo laboriosam, sit, nostrum id quaerat pariatur repellendus quis ullam hic in, non harum inventore cumque laudantium . <FaQuoteRight id="course-section-10-1-2-6-quote" /></p>
     <p id="course-section-10-1-2-7-star-flex"> <FaStar id="course-section-10-1-2-7-star-fill" />   <FaStar id="course-section-10-1-2-7-star-fill" />   <FaStar id="course-section-10-1-2-7-star-fill" />   <FaStar id="course-section-10-1-2-7-star-fill" />  <FaStar id="course-section-10-1-2-7-star-unfill" />
      </p>
    </div>
</div>

<div id="course-section-10-1-2-2">
   <div id="course-section-10-1-2-3">
    <img id="course-section-10-1-2-3-img" src={test1} alt={test1} />
   </div>
   <div id="course-section-10-1-2-4">
     <p id="course-section-10-1-2-4-p">Sara</p>
     <p id="course-section-10-1-2-5-p">Graphic Design Course</p>
     <p id="course-section-10-1-2-6-p"><FaQuoteLeft id="course-section-10-1-2-6-quote" />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia aliquid iusto illo laboriosam, sit, nostrum id quaerat pariatur repellendus quis ullam hic in, non harum inventore cumque laudantium . <FaQuoteRight id="course-section-10-1-2-6-quote" /></p>
     <p id="course-section-10-1-2-7-star-flex"> <FaStar id="course-section-10-1-2-7-star-fill" />   <FaStar id="course-section-10-1-2-7-star-fill" />   <FaStar id="course-section-10-1-2-7-star-fill" />   <FaStar id="course-section-10-1-2-7-star-fill" />  <FaStar id="course-section-10-1-2-7-star-unfill" />
      </p>
    </div>
</div>

<div id="course-section-10-1-2-2">
   <div id="course-section-10-1-2-3">
    <img id="course-section-10-1-2-3-img" src={test1} alt={test1} />
   </div>
   <div id="course-section-10-1-2-4">
     <p id="course-section-10-1-2-4-p">Sara</p>
     <p id="course-section-10-1-2-5-p">Graphic Design Course</p>
     <p id="course-section-10-1-2-6-p"><FaQuoteLeft id="course-section-10-1-2-6-quote" />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia aliquid iusto illo laboriosam, sit, nostrum id quaerat pariatur repellendus quis ullam hic in, non harum inventore cumque laudantium . <FaQuoteRight id="course-section-10-1-2-6-quote" /></p>
     <p id="course-section-10-1-2-7-star-flex"> <FaStar id="course-section-10-1-2-7-star-fill" />   <FaStar id="course-section-10-1-2-7-star-fill" />   <FaStar id="course-section-10-1-2-7-star-fill" />   <FaStar id="course-section-10-1-2-7-star-fill" />  <FaStar id="course-section-10-1-2-7-star-unfill" />
      </p>
    </div>
</div>

</div>
              </div>
            </div>
        </div>
        </section>
      
 


{/* course-section-11 */}

<section id="course-section-11">
<div className='container'>
   <div id='course-section-11-1'>
     <div id="course-section-11-1-1">
        <p id="course-section-11-1-1-p">Contact</p>
     </div>

     <div id="course-section-11-1-2">
        <div id="course-section-11-1-2-1">
           <div id="course-section-11-1-2-1-1">
           <FaPhoneAlt id="course-section-11-1-2-2-phone" />
           </div>
           <div id="course-section-11-1-2-1-2">
             <p id="course-section-11-1-2-1-2-p-1">Phone Number</p>
             <p id="course-section-11-1-2-1-2-p-2">+91 90437 21244</p>
           </div>
        </div>
        <div id="course-section-11-1-2-2">
        <div id="course-section-11-1-2-2-1">
           <MdEmail id="course-section-11-1-2-2-email" />
           </div>
           <div id="course-section-11-1-2-2-2">
             <p id="course-section-11-1-2-2-2-p-1">Email</p>
             <p id="course-section-11-1-2-2-2-p-2">info@intwhizz.in</p>
           </div>
        </div>
        <div id="course-section-11-1-2-3">
        <div id="course-section-11-1-2-3-1">
           <IoLocationSharp id="course-section-11-1-2-3-location" />
           </div>
           <div id="course-section-11-1-2-3-2">
             <p id="course-section-11-1-2-3-2-p-1">Address</p>
             <p id="course-section-11-1-2-3-2-p-2">3 A/1 1st Floor, 60 Feet Road, STC College Road, Near Indian Bank, Perumalpuram,Tirunelveli 627007</p>
           </div>
        </div>
     </div>

     <div id="course-section-11-1-3">
       <div id="course-section-11-1-3-1">
         <div id="course-section-11-1-3-1-1">
             <p id="course-section-11-1-3-1-1-p"> Get Enquiry Now </p> 
             <div id="course-section-11-1-3-1-1-line">
             </div> 
             <div id="course-section-11-1-3-1-2">
               <form id="course-section-11-1-3-1-2-form">
                <div id="course-section-11-1-3-1-2-1">
                    <input type="text" id="course-section-11-1-3-1-2-1-input-1" placeholder='your name' />
                    <input type="email" id="course-section-11-1-3-1-2-1-input-2" placeholder='your email' />
                </div>
                <div id="course-section-11-1-3-1-2-2">
                    <input type="phone" id="course-section-11-1-3-1-2-2-input-1" placeholder='Phone number' />
                    <select id='course-section-11-1-3-1-2-2-input-2' name="Course Type">
                    <option>Selected Course</option>
                    </select>
                </div>
                <div id="course-section-11-1-3-1-2-3">
                    <textarea type="phone" id="course-section-11-1-3-1-2-3-input-1" placeholder='Address' />
                </div>
                <button id="course-section-11-1-3-1-2-3-button">Enquiry Now</button>
               </form>
             </div>
         </div>
         <div id="course-section-11-1-3-1-3">
            <img id="course-section-11-1-3-1-3-img" src={img4} alt={img4} />
         </div>
       </div>
     </div>

   </div>
</div>
</section>

    </div>
  )
}

export default Course;