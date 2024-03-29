import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
function Header(){
    return (
<Fragment><div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        
 
    <a href="/" class=" navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <h1 class="fs-4" >
            <b style={{fontSize:"3rem", fontWeight:"550", fontFamily:"Jost, sans-serif", color: "#439e46"}}>QUILL <span className='span-header'>QUEST</span></b>
            </h1>
      </a>
  
      

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page" >Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About Us</a></li>
        <li class="nav-item"><a href="#section-2" class="nav-link">Our Collections </a></li>
        <li class="nav-item"><a href="#section-3" class="nav-link">View Reviews</a></li>
        <li class="nav-item"><a href="#footer" class="nav-link">Contact us</a></li>
      </ul>
    </header>

  </div>
  
  <div className='hero-content'>
    

  <h1><span className='span-hero-content' style={{fontSize:"3rem"}}>1000+</span> Books available </h1>
  <h1>Discover, Dream, Read!</h1>
  <p>Escape the reality by diving into the books</p>


</div></Fragment>
       
    );
}
export default Header; 