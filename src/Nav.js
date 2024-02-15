import React from 'react'
import './Nav.css'
import bhuvan from './assets/bhuvan1.png'
import home from './assets/home.png'
import tcu from './assets/dashboardtcu.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Nav = () => {

  return (
    <div>
       
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
            <a href="#" data-toggle="popover" title="Added soon" > <button  className=' ms-2 btn btn-outline-dark rounded  disabled'>View CV</button>
            </a>
          
            </div>
          
        </div>

     


        {/* work <section></section> */}

    <div className="container-fluid bg4" id='Work'>
        <h1 className='cl text-center' >My Recent Works</h1>

        <div className="card-box ">
            <div className="row  "  >
                <div className="col-md-4">
                  <a className='unstyled' href="https://github.com/nandhakrishnanp/Comet">
                  <div className="card m-3"  data-aos="fade-up"
     data-aos-duration="1000" >
   <img src={home} class="card-img-top" alt="not loading.."/>
  <i class=" vicon fa-solid fa-eye"></i>
  <div className="card-body">
    <p className="card-text"> <span className='badge badge-primary'>fullstack</span> <br />
<span className='cl'>CometCharge </span> : Ev-charging Platform with Reservation-enabled EV Charging Stations, AI-driven Admin Analysis, QuickFind Navigation, and Reward Integration</p>
  </div>
</div>
                  </a>
              
                </div>
                <div className="col-md-4">
               <a href="https://github.com/nandhakrishnanp/Bhuvan">   
                <div className="card m-3" data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="5000">
  <img src={bhuvan} class="card-img-top" alt="..."/>
  <i class=" vicon fa-solid fa-eye"></i>
  <div className="card-body">
    <p className="card-text"><span className='cl'>BhuvanChatBot </span>: Your Virtual Guide to Bhuvan Websites, Harnessing Natural Language Processing, Voice Recognition, and Responsive UI for Seamless Interaction</p>
  </div>
</div>


</a> 
             
                </div>
                <div className="col-md-4">
            <a href="https://github.com/nandhakrishnanp/tcs">   <div className="card m-3" data-aos="fade-up"
     data-aos-duration="1000" >
  <img src={tcu} class="card-img-top cimg" alt="..."/>
  <i class=" vicon fa-solid fa-eye"></i>
  <div className="card-body">
    <p className="card-text"> <span className='badge badge-primary'>frontend</span> <br /><span className='cl'>Telematic Control Unit </span>: Streamlined UI Design for Telematic Control Unit (TCU) Enabled Vehicles, Monitoring Fuel Levels, Engine Temperature, and More</p>
  </div>
</div></a>     
          
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
          
  



      {/* Contact page*/}
      <div  id='Contact' className="contact w110  ">
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
     
        <button className='btn btn-dark  rob mt-2 ' > Send </button>
    
     
       </div>

       <div className="col-md-6 Msg-card " data-aos="fade-left"
     data-aos-duration="1000" >
                 <div className="msgwrapper">
                         <h2>Lets Make Some Amazing Projects Together !</h2>
                 </div>
       </div>

          <div className="mail mt-5 ">
                 <p className='cl text-center pop pe-5'> <i class="fa fa-envelope" aria-hidden="true"></i> nandhakrishnandev@gmail.com</p>
          </div>
      </div>
     
    
   
     
      
    </form>
           </div>
        
      </div>
  
    </div>
  )
}

export default Nav