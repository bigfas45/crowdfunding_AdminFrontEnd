import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Footer from "../core/Footer";




const HowItWorksInvestors = () => {

const content = () => {
    return(
        <Fragment>
        <section class="space-ptb bg-holder">
  <div class="container">
     <div class="section-title text-center">
          <h2>HOW IT WORKS FOR INVESTORS</h2>
        </div> 
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6 text-center position-relative overflow-hidden">
         <img class="img-fluid" src="https://nasdng.com/wp-content/uploads/2020/05/newreg.jpg" height="1000" alt=""/>
      </div>
      <div class="col-md-6 mt-5 mt-md-0">
          <h1 class="mb-4">Register</h1>
          <p class="lead">Kindly register your interest as an investor in NASD VentureRamp in 2 simple steps:</p>
          <ul class="pl-3">
            <li class="mb-2">Click here to complete the investor registration form</li>
            <li class="mb-2">Upload the required investor registration documents and bio-data here</li>
            
          </ul>
      </div>
    </div>
  </div>

<br/><br/><br/><br/>
  <div class="container">
    
    <div class="row justify-content-center align-items-center">
     
      <div class="col-md-6 mt-5 mt-md-0">
          <h1 class="mb-4">View Projects</h1>
          <p class="lead">You can view listed projects here.</p>
         
      </div>

       <div class="col-md-6 text-center position-relative overflow-hidden">
         <img class="img-fluid" src="https://nasdng.com/wp-content/uploads/2020/05/projects.jpg" height="1000" alt=""/>
      </div>

    </div>
  </div>


  <br/><br/>
 

<br/><br/>
  <div class="container">
    
    <div class="row justify-content-center align-items-center">

       
     
      <div class="col-md-6 mt-5 mt-md-0">
          <h1 class="mb-4">Invest</h1>
          <p class="lead">We have a lot of new and exciting projects seeking your funding. Click here to start investing.</p>
         
      </div>

      <div class="col-md-6 text-center position-relative overflow-hidden">
         <img class="img-fluid" src="images/coinivest.jpg" height="1000" alt=""/>
      </div>

    </div>
  </div></section>
        </Fragment>
    )
}


    return(
        <Fragment>
{content()}

            <Footer />
        </Fragment>
    )


}


export default HowItWorksInvestors