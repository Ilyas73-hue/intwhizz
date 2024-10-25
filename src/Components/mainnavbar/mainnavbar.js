import React from 'react';
import img from "../../assets/intwhizz_logo.png";
import "./mainnavbar.css";


function Mainnavbar() {
  return (
    <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="/"><img id="main_navbar_logo" src="https://intwhizz.in/wp-content/uploads/2023/09/main_logo.png" alt={img} /> </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0" id="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" id="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="nav-link" href="/about">About</a>
          </li>          
          <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/">Courses</a>
          </li>          
          <li class="nav-item">
            <a class="nav-link" id="nav-link" href="/blog">Blog</a>
          </li>          
          <li class="nav-item">
            <a class="nav-link" id="nav-link" href="/contact_us">Contact</a>
          </li>
        </ul>
        <div className='d-flex'>
             <div id="nav-flex">
                <a id="nav-ahref" href="/">Login</a>
                <p id="nav-ahref1">/</p>
                <a id="nav-ahref" href="/">Register</a>
             </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Mainnavbar;