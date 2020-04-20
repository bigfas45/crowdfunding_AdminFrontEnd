import React, { Fragment} from "react";
import { Link } from "react-router-dom";


const Footer = () => {

    const footer = () => {
        return (
          <Fragment>
         <footer class="footer bg-dark space-pt">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <div class="footer-contact-info">
          <h5 class="text-primary mb-4">About NASD</h5>
          <p class="text-white mb-4"></p>
          <ul class="list-unstyled mb-0">
            <li> <b> <i class="fas fa-map-marker-alt"></i></b><span>Lagos, Nigeria</span> </li>
            <li> <b><i class="fas fa-microphone-alt"></i></b><span>(123) 345-6789</span> </li>
            <li> <b><i class="fas fa-headset"></i></b><span>support@nasdng.com</span> </li>
          </ul>
        </div>
      </div>
     <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
        <div class="footer-link">
          <h5 class="text-primary mb-4">Useful links</h5>
          <ul class="list-unstyled mb-0">
            <li> <a href="#">Fees </a> </li>
            <li> <a href="#">FAQs </a> </li>
            <li> <a href="#">Reports </a> </li>
            <li> <a href="#">Complaint </a> </li>
          </ul>
          
        </div>
      </div>

     
     
      <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
        <h5 class="text-primary mb-4">Subscribe us</h5>
        <div class="footer-subscribe">
          <p class="text-white">Sign up to our newsletter to get the latest news and offers.</p>
          <form>
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Enter email" />
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Get notified</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4 text-center text-md-right">
          <p class="mb-0 text-white"> &copy;Copyright <span id="copyright"> <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script></span> <a href="#"> NASD </a> All Rights Reserved </p>
        </div>
        <div class="col-md-4 text-center my-3 mt-md-0 mb-md-0">
          <a id="back-to-top" class="back-to-top" href="#"><i class="fas fa-angle-double-up"></i> </a>
        </div>
        <div class="col-md-4 text-center text-md-right">
          <p class="mb-0 " style={{color: "white"}}><a href=""> Data protection Policy</a> | <a href=""> Privacy Policy</a> | <a href="">Terms of Use</a>
            </p>
        </div>
      </div>
    </div>
  </div>
</footer>
          </Fragment>
        );
      };
    


    return (
        <Fragment>
          {footer()}
    
        
        </Fragment>
      );

}


export default Footer;
