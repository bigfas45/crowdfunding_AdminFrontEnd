import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Footer from "../core/Footer";




const HowItWorksIssuers = () => {

const content = () => {
    return(
        <Fragment>
            <section class="space-ptb bg-holder">
  <div class="container">
     <div class="section-title text-center">
          <h2>HOW IT WORKS FOR ISSUERS</h2>
        </div> 
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6 text-center position-relative overflow-hidden">
         <img class="img-fluid" src="https://nasdng.com/wp-content/uploads/2020/05/register.jpg" height="1000" alt=""/>
      </div>
      <div class="col-md-6 mt-5 mt-md-0">
          <h1 class="mb-4">Register</h1>
          <p class="lead">Kindly register your company in 3 simple steps:</p>
          <ul class="pl-3">
            <li class="mb-2">Click here to complete the issuer registration form</li>
            <li class="mb-2">Upload the required company registration documents here</li>
            <li class="mb-2"> Upload your company profile here</li>


          </ul>
      </div>
    </div>
  </div>

<br/><br/><br/><br/>
  <div class="container">
    
    <div class="row justify-content-center align-items-center">
     
      <div class="col-md-6 mt-5 mt-md-0">
          <h1 class="mb-4">Submit Project</h1>
          <p class="lead">We would like to know more about your intended project. Follow the link to provide more details about your project.</p>
         
      </div>

       <div class="col-md-6 text-center position-relative overflow-hidden">
         <img class="img-fluid" src="images/add_pro.jpg" height="1000" alt=""/>
      </div>

    </div>
  </div>


  <br/><br/>
  <div class="container">
    
    <div class="row justify-content-center align-items-center">

       <div class="col-md-6 text-center position-relative overflow-hidden">
         <img class="img-fluid" src="https://nasdng.com/wp-content/uploads/2020/05/project.jpg" height="1000" alt=""/>
      </div>
     
      <div class="col-md-6 mt-5 mt-md-0">
          <h1 class="mb-4">Project Verification</h1>
          <p class="lead">Click here to see the status of your project.</p>
         
      </div>

      

    </div>
  </div>

<br/>

   <div class="container">
    
    <div class="row justify-content-center align-items-center">

      <div class="col-md-6 mt-5 mt-md-0">
          <h1 class="mb-4">Connect with Investors</h1>
          <p class="lead">We have a long list of investors waiting to invest in your project. Kindly click here to make your project visible to them.</p>
         
      </div>


       <div class="col-md-6 text-center position-relative overflow-hidden">
         <img class="img-fluid" src="images/deal.jpg" height="1000" alt=""/>
      </div>
     
      
      

    </div>
  </div>


<br/>
  <div class="container">
    
    <div class="row justify-content-center align-items-center">

         <div class="col-md-6 text-center position-relative overflow-hidden">
         <img class="img-fluid" src="https://nasdng.com/wp-content/uploads/2020/05/getfund.jpg" height="1000" alt=""/>
      </div>
     
      <div class="col-md-6 mt-5 mt-md-0">
          <h1 class="mb-4">View Interests</h1>
          <p class="lead">You have an opportunity to view which investors have looked at your profile and invested in your project.</p>
         
      </div>

    

    </div>
  </div>
  
  </section>
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


export default HowItWorksIssuers