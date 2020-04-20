import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Footer from "../core/Footer";




const HowItWorksInvestors = () => {

const content = () => {
    return(
        <Fragment>
        <div class="bg-light">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item"><a href="index.html"> <i class="fas fa-home"></i> </a></li>
          <li class="breadcrumb-item"> <i class="fas fa-chevron-right"></i> <a href="#">Pages</a></li>
          <li class="breadcrumb-item active"> <i class="fas fa-chevron-right"></i> <span>No result found </span></li>
        </ol>
      </div>
    </div>
  </div>
</div>

<section class="space-ptb bg-holder">
  <div class="container">
     <div class="section-title text-center">
          <h2>HOW IT WORKS FOR INVESTORS</h2>
        </div> 
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6 text-center position-relative overflow-hidden">
         <img class="img-fluid" src="images/reg.jpg" height="1000" alt="" />
      </div>
      <div class="col-md-6 mt-5 mt-md-0">
          <h1 class="mb-4">Register</h1>
          <p class="lead">We've searched more than 305 jobs we did note ani jobs for your search.</p>
          <ul class="pl-3">
            <li class="mb-2">Check your spelling and by again.</li>
            <li class="mb-2">Try a similar but different search team like sofa instead of settee.</li>
            <li class="mb-2">Keep your search team simple as our search facility works best with a shorter description.</li>
            <li class="mb-2">Try looking within the department shown below</li>
          </ul>
      </div>
    </div>
  </div>

<br /><br /><br /><br />
  <div class="container">
    
    <div class="row justify-content-center align-items-center">
     
      <div class="col-md-6 mt-5 mt-md-0">
          <h1 class="mb-4">Connect with issuers</h1>
          <p class="lead">We've searched more than 305 jobs we did note ani jobs for your search.</p>
          <ul class="pl-3">
            <li class="mb-2">Check your spelling and by again.</li>
            <li class="mb-2">Try a similar but different search team like sofa instead of settee.</li>
            <li class="mb-2">Keep your search team simple as our search facility works best with a shorter description.</li>
            <li class="mb-2">Try looking within the department shown below</li>
          </ul>
      </div>

       <div class="col-md-6 text-center position-relative overflow-hidden">
         <img class="img-fluid" src="images/deal.jpg" height="1000" alt="" />
      </div>

    </div>
  </div>


  <br/><br/>
 

<br/><br/>
  <div class="container">
    
    <div class="row justify-content-center align-items-center">

       
     
      <div class="col-md-6 mt-5 mt-md-0">
          <h1 class="mb-4">Invest</h1>
          <p class="lead">We've searched more than 305 jobs we did note ani jobs for your search.</p>
          <ul class="pl-3">
            <li class="mb-2">Check your spelling and by again.</li>
            <li class="mb-2">Try a similar but different search team like sofa instead of settee.</li>
            <li class="mb-2">Keep your search team simple as our search facility works best with a shorter description.</li>
            <li class="mb-2">Try looking within the department shown below</li>
          </ul>
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