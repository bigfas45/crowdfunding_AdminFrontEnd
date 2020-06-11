import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../core/Footer";


const WhoWeAre = () => {



    const content = () => {
        return(
            <Fragment>
          <section class="space-ptb bg-holder">
  <div class="container">
     <div class="section-title text-center">
          <h2>WHO WE ARE </h2>
        </div> 
    <div class="row justify-content-center align-items-center">
     
      <div class="col-md-12 mt-5 mt-md-0">
          <h1 class="mb-4">Our Mission</h1>
         <p class="lead"><span style={{fontWeight: "bolder"}}> NASD VentureRamp</span> is focused on connecting entrepreneurs and investors and creating the basis for promising business ideas together.</p>


         <p class="lead"> We believe that economic growth and expansion lies in the hands of young and innovative MSMEs. Historically access to finance has been identified as a major impediment to the growth and development of these enterprises. Therefore, we have made it our goal to support these entrepreneurs in laying the foundations required for the realisation of their dreams.</p>


         <p class="lead"> Through NASD VentureRamp, we are bridging the financing gap experienced by MSMEs and mitigating the challenges encountered when applying to access capital from traditional providers of capital. In addition, NASD VentureRamp provides a unique avenue for individuals to invest in enterprises and ideas in which they believe show a promising potential for growth. </p>

          
         
      </div>
       {/* <!-- <div class="col-md-6 text-center position-relative overflow-hidden">
         <img class="img-fluid" src="images/buss.jpg" height="1000" alt="">
      </div> --></div> */}
    </div>
  </div>

<br /><br /><br /><br />
  <div class="container">
    
    <div class="row justify-content-center align-items-center">
     
      <div class="col-md-12 mt-5 mt-md-0">
          <h1 class="mb-4">Our principles</h1>
          <p class="lead"><strong>NASD VentureRamp</strong> is more than a crowd funding platform. NASD VentureRamp is the connecting link between entrepreneurs and investors, helping them realise their capital raise objectives and investment goals respectively. We are driven by our guiding philosophy:</p>
          <h3>TRANSPARENCY </h3>
          <p class="lead">We will provide information that is relevant, necessary and timely. </p>

          <h3>PERFORMANCE</h3>
          <p class="lead">We will ensure that all requirements are executed to exceed stakeholders’ expectations </p>

          <h3>INTEGRITY </h3>
          <p class="lead">We will honour all commitments and never compromise our ethics.</p>
          
      </div>

    </div>
  </div>

</section>
<br/><br/><br/>
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