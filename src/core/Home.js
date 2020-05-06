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
            
             
            <div class="row justify-content-center">
      <div class="col-md-6 mb-6 mb-md-0">
        <div class="bg-light h-100 p-5">
          <h4>Chat to us online</h4>
          <p>Chat to us online if you have a question.</p>
          <a class="btn btn-primary btn-sm mt-3" href="https://tawk.to/chat/5eb20a7ba1bad90e54a209e4/default" target="_blank"> start web chat</a>
        </div>
      </div>
      <div class="col-md-6 mb-6 mb-md-0">
        <div class="bg-primary h-100 p-5">
          <h4 class="text-white">Call us</h4>
          <p class="text-white">We are here to answer all your questions</p>
          <h2 class="text-white mt-4 mb-0">+234-902-455-9686</h2>
        </div>
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
