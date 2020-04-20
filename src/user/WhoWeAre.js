import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../core/Footer";


const WhoWeAre = () => {



    const content = () => {
        return(
            <Fragment>
                <div class="bg-light">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item"><a href="index.html"> <i class="fas fa-home"></i> </a></li>
         
          <li class="breadcrumb-item active"> <i class="fas fa-chevron-right"></i> <span>About Us </span></li>
        </ol>
      </div>
    </div>
  </div>
</div>

<section class="space-ptb bg-holder">
  <div class="container">
     <div class="section-title text-center">
          <h2>WHO WE ARE </h2>
        </div> 
    <div class="row justify-content-center align-items-center">
     
      <div class="col-md-6 mt-5 mt-md-0">
          <h1 class="mb-4">Our Mission</h1>
          <p class="lead">We connect entrepreneurs and investors and create the basis for promising business ideas together.</p>
          <p class="lead">We believe that the future lies in the hands of young and innovative entrepreneurs. Therefore we have made it our goal to support these entrepreneurs, to lay the foundations together for the realisation of their dreams.</p>
         
      </div>
       <div class="col-md-6 text-center position-relative overflow-hidden">
         <img class="img-fluid" src="https://nasdng.com/wp-content/uploads/2020/04/buss.jpg" height="1000" alt="" />
      </div>
    </div>
  </div>

<br /><br /><br /><br />
  <div class="container">
    
    <div class="row justify-content-center align-items-center">
     
      <div class="col-md-12 mt-5 mt-md-0">
          <h1 class="mb-4">Our principles</h1>
          <p class="lead">NASD is more than a crowdinvesting platform. NASD is the connecting link between entrepreneurs and investors, helping them realise something great together.</p>
          <p class="lead">At NASD people take priority.We place particular emphasis and value on personal contact and regional proximity – whether it concerns the entrepreneurs, our investors, our partners or of course our international team.</p>
          <p class="lead">At NASD people take priority.We place particular emphasis and value on personal contact and regional proximity – whether it concerns the entrepreneurs, our investors, our partners or of course our international team.</p>
          <p class="lead">At NASD people take priority.We place particular emphasis and value on personal contact and regional proximity – whether it concerns the entrepreneurs, our investors, our partners or of course our international team.</p>
          
      </div>

    </div>
  </div>

</section>
<br /><br /><br /><br />
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


export default WhoWeAre