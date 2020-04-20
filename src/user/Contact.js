import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../core/Footer";


const Contact = () => {

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
              <p>(123) 345-6789</p>
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
                <input type="text" className="form-control" id="name" placeholder="Your name" />
              </div>
              <div className="form-group col-md-6">
                <input type="email" className="form-control" id="inputEmail4" placeholder="Your email" />
              </div>
              <div className="form-group col-md-6">
                <input type="text" className="form-control" id="phone" placeholder="Your phone" />
              </div>
              <div className="form-group col-md-6">
                <input type="text" className="form-control" id="subject" placeholder="Subject" />
              </div>
              <div className="form-group col-md-12">
                <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
              </div>
              <div className="form-group col-md-12">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label pr-5" for="customCheck1">I consent to having this website store my submitted information so they can respond to my inquiry.</label>
                </div>
              </div>
              <div className="col-md-12">
                <Link className="btn btn-primary" to="#">Send message</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
   <div className="row mt-1 mt-md-2">
      <div className="col-12">
        <h4 className="mb-4 my-4 my-sm-5">Additional contact Info</h4>
      </div>
      <div className="col-md-4">
        <div className="d-flex">
          <i className="flaticon-time-call font-xlll text-primary"></i>
          <div className="ml-4">
            <h5>Estate agency offices</h5>
            <p>Our Estate Agency offices can help with you buying or selling a home.</p>
            <Link to="#">Click to contact an estate agency branch</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-4 mt-md-0">
        <div className="d-flex">
          <i className="flaticon-email-1 font-xlll text-primary"></i>
          <div className="ml-4">
            <h5>Lettings offices</h5>
            <p>Our Lettings offices can assist with you letting your home, protection and moving home.</p>
            <Link to="#">Click to contact a lettings branch</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-4 mt-md-0">
        <div className="d-flex">
          <i className="flaticon-group font-xlll text-primary"></i>
          <div className="ml-4">
            <h5>Chat to us online</h5>
            <p className="mb-0">Chat to us online if you have a question about using our Mortgage calculator.</p>
            <Link className="btn btn-primary btn-sm mt-3" to="#"> Start web chat</Link>
          </div>
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
{content()}
<Footer />
        </Fragment>
    )

}


export default Contact 