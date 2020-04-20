import React, { Fragment } from "react";
import Slider from "./Slider";
import HomeSectionTwo from "./HomeSectionTwo";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import ProjectHome from "./ProjectHome";
import "../styles.css"


const Home = () => {
 

  const blog = () => {
    return(
      <Fragment>
        <section className="space-ptb">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="section-title text-center">
          <h2>News, tips & articles</h2>
         
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <div className="blog-post">
          <div className="blog-post-image">
            <img className="img-fluid" src="images/blog/01.jpg" alt="" />
          </div>
          <div className="blog-post-content">
            <div className="blog-post-details">
              <div className="blog-post-category">
                <a className="mb-3" href="#"><strong>Home improvement</strong></a>
              </div>
              <div className="blog-post-title">
                <h5><a href="blog-detail.html">7 pieces of advice to newbies</a></h5>
              </div>
              <div className="blog-post-description">
                <p className="mb-0">You are going on a cruise, but when the ship sets sail, you discover.</p>
              </div>
            </div>
            <div className="blog-post-footer">
              <div className="blog-post-time">
                <a href="#"> <i className="far fa-clock"></i>02 Jan 2019</a>
              </div>
             
              <div className="blog-post-comment">
                <a href="#"> <i className="far fa-comment"></i>(12) </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mt-4 mt-lg-0">
        <div className="blog-post">
          <div className="blog-post-image">
            <img className="img-fluid" src="images/blog/02.jpg" alt="" />
          </div>
          <div className="blog-post-content">
            <div className="blog-post-details">
              <div className="blog-post-category">
                <a className="mb-3" href="#"><strong>Tips and advice</strong></a>
              </div>
              <div className="blog-post-title">
                <h5><a href="blog-detail.html">Where to Invest in Real Estate</a></h5>
              </div>
              <div className="blog-post-description">
                <p className="mb-0">You will sail along until you collide with an immovable object.</p>
              </div>
            </div>
            <div className="blog-post-footer">
              <div className="blog-post-time">
                <a href="#"> <i className="far fa-clock"></i>14 Feb 2019</a>
              </div>
              
              <div className="blog-post-comment">
                <a href="#"> <i className="far fa-comment"></i>(32) </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mt-4 mt-lg-0">
        <div className="blog-post">
          <div className="blog-post-image">
            <img className="img-fluid" src="images/blog/03.jpg" alt="" />
          </div>
          <div className="blog-post-content">
            <div className="blog-post-details">
              <div className="blog-post-category">
                <a className="mb-3" href="#"><strong>Market trends</strong></a>
              </div>
              <div className="blog-post-title">
                <h5><a href="blog-detail.html">Cutting your losses in Real Estate</a></h5>
              </div>
              <div className="blog-post-description">
                <p className="mb-0">Trying to go through life without clarity is similar to sailing.</p>
              </div>
            </div>
            <div className="blog-post-footer">
              <div className="blog-post-time">
                <a href="#"> <i className="far fa-clock"></i>30 March 2019</a>
              </div>
            
              <div className="blog-post-comment">
                <a href="#"> <i className="far fa-comment"></i>(45) </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </Fragment>
    )
  }




  const needHelpLayout = () => {
    return (
      <Fragment>
        <section className="space-ptb">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h2>Need any help?</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellat, perferendis!
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="bg-light h-100 p-5">
                  <h4>Chat to us online</h4>
                  <p>
                    Chat to us online if you have a question about using our
                    Mortgage calculator.
                  </p>
                  <Link className="btn btn-primary btn-sm mt-3" to="#">
                    {" "}
                    start web chat
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="bg-primary h-100 p-5">
                  <h4 className="text-white">Call us</h4>
                  <p className="text-white">
                    Our mortgage loan officers will work with you to meet your
                    lending needs.
                  </p>
                  <h2 className="text-white mt-4 mb-0">(123) 345-6789</h2>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-dark h-100 p-5">
                  <h4 className="text-white">
                    Contact us now to lock in your rate.
                  </h4>
                  <span className="text-white mt-1 mb-0 d-block">
                    Find a mortgage loan officer call
                  </span>
                  <h2 className="text-white mt-4 mb-0">(456) 478-2589</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <Slider
        title="With NASD"
        description="You Are Investing In Companies With Personality"
      ></Slider>
      <HomeSectionTwo></HomeSectionTwo>
      <ProjectHome></ProjectHome>
      {blog()}
      {needHelpLayout()}
    <Footer />
    </Fragment>
  );
};

export default Home;
