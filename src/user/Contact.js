import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../core/Footer";
import {contactForm} from '../core/apiCore';
import swal from "sweetalert";



const Contact = () => {

  const [values, setValues] = useState({
    name: "",
    telephone:"",
    email: "",
    message: "",
    subject: "",
    error: "",
    success: ""
  });
  const { name, email,telephone, message,subject, error, success } = values;
  const handleChnage = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({...values, error:false});
    contactForm({  name, email, telephone, message,subject }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false , pop: false});
      } else {
        setValues({
          ...values,
          name: "",
          telephone:"",
          email: "",
          message: "",
          subject: "",
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
    return dashboarddashboard2("Email Added Succesfully", `Your ${email} has been added successfully, you have subscribed to the crowd funding newsletter to get the latest news and offers. `)

  }if (error){
    return dashboarddashboard("An Error Occured", error) 
  }
  
  }
 

    const content = () => {
        return(
            <Fragment>
<div className="bg-light">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><Link to="index.html"> <i className="fas fa-home"></i> </Link></li>
          <li className="breadcrumb-item"> <i className="fas fa-chevron-right"></i> <Link to="#">Pages</Link></li>
          <li className="breadcrumb-item active"> <i className="fas fa-chevron-right"></i> <span> Contact us </span></li>
        </ol>
      </div>
    </div>
  </div>
</div>

<section className="space-ptb">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="section-title">
          <h2>Contact Us</h2>
        </div>
      </div>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-5">
        <div className="contact-address bg-light p-4">
          <div className="d-flex mb-3">
            <div className="contact-address-icon">
              <i className="flaticon-map text-primary font-xlll"></i>
            </div>
            <div className="ml-3">
              <h6>Address</h6>
              <p>Lags, Nigeria</p>
            </div>
          </div>
          <div className="d-flex mb-3">
            <div className="contact-address-icon">
              <i className="flaticon-email text-primary font-xlll"></i>
            </div>
            <div className="ml-3">
              <h6>Email</h6>
              <p>info@nasd.com</p>
            </div>
          </div>
          <div className="d-flex mb-3">
            <div className="contact-address-icon">
              <i className="flaticon-call text-primary font-xlll"></i>
            </div>
            <div className="ml-3">
              <h6>Phone Number</h6>
              <p>234-902-455-9686</p>
            </div>
          </div>
         
          <div className="social-icon-02">
            <div className="d-flex align-items-center">
              <h6 className="mr-3">Social:</h6>
              <ul className="list-unstyled mb-0 list-inline">
                <li><Link to="#"> <i className="fab fa-facebook-f"></i> </Link></li>
                <li><Link to="#"> <i className="fab fa-twitter"></i> </Link></li>
                <li><Link to="#"> <i className="fab fa-linkedin"></i> </Link></li>
                <li><Link to="#"> <i className="fab fa-pinterest"></i> </Link></li>
                <li><Link to="#"> <i className="fab fa-instagram"></i> </Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-7 mt-4 mt-lg-0">
        <div className="contact-form">
          <h4 className="mb-4">Need assistance? Please complete the contact form</h4>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <input onChange={handleChnage("name")} value={name} type="text" className="form-control" id="name" placeholder="Your name" />
              </div>
              <div className="form-group col-md-6">
                <input onChange={handleChnage("email")}  value={email} type="email" className="form-control" id="inputEmail4" placeholder="Your email" />
              </div>
              <div className="form-group col-md-6">
                <input onChange={handleChnage("telephone")}  value={telephone} type="text" className="form-control" id="phone" placeholder="Your phone" />
              </div>
              <div className="form-group col-md-6">
                <input onChange={handleChnage("subject")}    value={subject} type="text" className="form-control" id="subject" placeholder="Subject" />
              </div>
              <div className="form-group col-md-12">
                <textarea onChange={handleChnage("message")}    value={message} className="form-control" rows="4" placeholder="Your message"></textarea>
              </div>
              <div className="form-group col-md-12">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label pr-5" for="customCheck1">I consent to having this website store my submitted information so they can respond to my inquiry.</label>
                </div>
              </div>
              <div className="col-md-12">
                <button onClick={clickSubmit} type="submit" className="btn btn-primary" to="#">Send message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</section>
            </Fragment>
        )
    }


    return(
        <Fragment>
             {showLoading()}
{content()}
<Footer />
        </Fragment>
    )

}


export default Contact 