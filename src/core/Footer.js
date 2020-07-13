import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {contactForm} from './apiCore';
import swal from "sweetalert";


const Footer = () => {
  const [values, setValues] = useState({
    email: "",
    error: "",
    pop: false,
    success: ""
  });
  const { email, error, success, pop } = values;
  const handleChnage = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  useEffect(() => {
    window.scrollTo(0, 0)
});

  const clickSubmit = event => {
    event.preventDefault();
    setValues({...values, error:false});
    contactForm({  email }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false , pop: false});
      } else {
        setValues({
          ...values,
          email: "",
          error:false,
          success: true
        });
      }
    });
  };




  const dashboarddashboard = (title, text) => {
    swal({
      title: ` ${title}`,
      text: `${text}`,
      icon: "error"
    });
  };
  const dashboarddashboard2 = (title, text) => {
    swal({
      title: ` ${title}`,
      text: `${text}`,
      icon: "success"
    });
  };




  const showLoading = () =>{
  if (success) {
    return dashboarddashboard2("Contact Form Added Succesfully", `Your form has been sent to admin, We will get back to you shortly. `)
  }if (error){
    return dashboarddashboard("An Error Occured", error) 
  }
  }
 

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
          <li> <b> <i class="fas fa-map-marker-alt"></i></b><span>9th Floor, UBA House, 57 Marina, Lagos State, Nigeria</span> </li>
            <li> <b><i class="fas fa-microphone-alt"></i></b><span>+234-902-455-9686</span> </li>
            <li> <b><i class="fas fa-headset"></i></b><span>info@ventureramp.com.ng</span> </li>
          </ul>
        </div>
      </div>
     <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
        <div class="footer-link">
          <h5 class="text-primary mb-4">Useful links</h5>
          <ul class="list-unstyled mb-0">
            <li> <a href="#">FAQs </a> </li>
            <li> <Link to="/complaintsfrom">Complaint </Link> </li>
            <li> <a href="#">Fees </a> </li>
            <li> <a href="#">Security </a> </li>
            <li> <Link to="#">&nbsp; </Link> </li>
          </ul>

          
          <ul class="list-unstyled mb-0">
            <li> <Link to="/riskwarning">Risk Warnings </Link> </li>
            <li> <Link to="/privatenotice">Privacy Notice</Link> </li>
            <li> <Link to="/security">Security</Link> </li>
            <li> <Link to="#">&nbsp; </Link> </li>
            <li> <Link to="#">&nbsp; </Link> </li>
          </ul>
        </div>
      </div>

     
     
      <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
        <h5 class="text-primary mb-4">Subscribe us</h5>
        <div class="footer-subscribe">
          <p class="text-white">Sign up to our newsletter to get the latest news and offers.</p>
          <form>
            <div class="form-group">
              <input type="email"    onChange={handleChnage("email")}    value={email} class="form-control" placeholder="Enter email" />
            </div>
            <button    onClick={clickSubmit} type="submit" class="btn btn-primary btn-sm">Get notified</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4 text-center text-md-right">
          <p class="mb-0 text-white"> &copy;Copyright <span id="copyright"> <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script></span> <a href="#"> VentureRamp 2020 </a> All Rights Reserved </p>
        </div>
        <div class="col-md-4 text-center my-3 mt-md-0 mb-md-0">
          <a id="back-to-top" class="back-to-top" href="#"><i class="fas fa-angle-double-up"></i> </a>
        </div>
        <div class="col-md-4 text-center text-md-right">
          <p class="mb-0 " style={{color: "white"}}><Link to="/dataprotection"> Data protection Policy</Link> | <Link to="/Privacypolicy"> Privacy Policy</Link> | <Link to="/term_of_use">Terms of Use</Link>
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
          {showLoading()}
          {footer()}
        </Fragment>
      );
}


export default Footer;
