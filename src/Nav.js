import React from 'react'
import './Nav.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Nav = () => {

  return (
    <div>
         {/* <svg id='wav' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L120,144C240,160,480,192,720,197.3C960,203,1200,181,1320,170.7L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
        <nav class="navbar navbar-expand-md bg fixed-top">
            
  <div class="container-fluid " >
 
    <a class="navbar-brand cl" href="#">NandhaKrishnan</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Design Develope</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li class="nav-item " data-bs-dismiss="offcanvas">
            <a class="nav-link " aria-current="page" href="#">About</a>
          </li>
          <li class="nav-item "  data-bs-dismiss="offcanvas">
            <a class="nav-link " href="#Work">Works</a>
          </li>
          <li class="nav-item"  data-bs-dismiss="offcanvas">
            <a class="nav-link" href="#Skill">Skills</a>
          </li>
          <li class="nav-item"  data-bs-dismiss="offcanvas">
            <a class="nav-link" href="#Contact">Contact</a>
          </li>
        </ul>
      
      </div>
    </div>
  </div>
</nav>

{/* hero---------------------> */}

<div className="container-fluid d-flex align-items-center justify-content-center  w100">
          <div className='wrapper p-5'>
        
             <h1 className='cl'   >Hi  I'm Nandhakrishnan</h1>
              
             <h2>Building tomorrow's web today, with passion and precision</h2>
             <p className='fullstack'>a Fullstack Web Developer</p>
         
            <a href="https://www.linkedin.com/in/nandhakrishnanp/"> <button className='btn btn-dark rob' ><i class="fa-brands fa-linkedin me-1 "></i>LinkedIn</button></a>
             <button className=' ms-2 btn btn-outline-dark rounded '>View CV</button>
            
          
            </div>
          
        </div>

     


        {/* work <section></section> */}

    <div className="container-fluid bg4" id='Work'>
        <h1 className='cl text-center' >My Recent Works</h1>

        <div className="card-box p-3 ">
            <div className="row  "  >
                <div className="col-md-4">
                <div className="card m-3"  data-aos="fade-up"
     data-aos-duration="1000" >
  <img src="" class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                </div>
                <div className="col-md-4">
                <div className="card m-3" data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="5000">
  <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                </div>
                <div className="col-md-4">
                <div className="card m-3" data-aos="fade-up"
     data-aos-duration="1000" >
  <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                </div>
            </div>
        </div>
    </div>

  {/* Skill page */}


    <div id='Skill'  className="container Skill mt-4">
     <div className="skill-Items">
     <h1 className='text-center cl  ' >Skills</h1>
     <div className="skillwrapper  text-center ">
 
           
 <h3><span data-aos="fade-up"
     data-aos-anchor-placement="top-center" class="badge bg-secondary"> HTML  <i class="fas fa-code"></i> </span> </h3>
<h3><span data-aos="fade-up"
     data-aos-anchor-placement="top-center" class="badge bg-secondary"> CSS <i class="fa-brands fa-css3-alt"></i> </span> </h3>
<h3><span data-aos="fade-up"
     data-aos-anchor-placement="top-center" class="badge bg-secondary"> JavaScript <i class="fa-brands fa-js"></i> </span></h3>
<h3><span data-aos="fade-up"
     data-aos-anchor-placement="top-center" class="badge bg-secondary"> React.js  <i class="fab fa-react"></i> </span></h3>
<h3><span data-aos="fade-up"
     data-aos-anchor-placement="top-center" class="badge bg-secondary"> Node.js  <i class="fab fa-node "></i> </span></h3>
<h3><span data-aos="fade-up"
     data-aos-anchor-placement="top-center" class="badge bg-secondary"> Express.js  <i class="fa-solid fa-server"></i> </span></h3>
<h3><span data-aos="fade-up"
     data-aos-anchor-placement="top-center" class="badge bg-secondary"> MongoDB <i class="fas fa-database"></i> </span></h3>
<h3><span data-aos="fade-up"
     data-aos-anchor-placement="top-center" class="badge bg-secondary"> Bootstrap 5  <i class="fab fa-bootstrap"></i> </span></h3>
<h3><span data-aos="fade-up"
     data-aos-anchor-placement="top-center" class="badge bg-secondary"> Redux ToolKit <i class="fas fa-toolbox"></i> </span></h3>

 </div>
     </div>
 
        
    </div>
          
  



      
      <div  id='Contact' className="contact w100 ">
           <h1 className='ps-5 cl pt-5 ' > Let's Collaborate</h1>
           <div className="container">
           <form className="contact-form mt-5 p-4 ">
            <div className="row">
            
        <div className="col-md-5 ">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" required />
       
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" name="email" required />
      
       <label htmlFor="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" name="message" rows="5" placeholder='Hi Nandhakrishna ! Lets Work on a project ...' required />
        <button className='btn btn-danger rob mt-2 ' > Send </button>
       </div>

       <div className="col-md-6 Msg-card " data-aos="fade-left"
     data-aos-duration="1000" >
                 <div className="msgwrapper">
                         <h2>Lets Make Some Amazing Projects Together !</h2>
                 </div>
       </div>
      </div>
     
    
   
     
      
    </form>
           </div>
        
      </div>
  
    </div>
  )
}

export default Nav