import React, { Fragment } from "react";
import Slider from "./Slider";
import HomeSectionTwo from "./HomeSectionTwo";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import ProjectHome from "./ProjectHome";


const Home = () => {
 

  const needHelpLayout = () => {
    return (
      <Fragment>
        <section class="space-ptb">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-title text-center">
                  <h2>Need any help?</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellat, perferendis!
                  </p>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-4 mb-4 mb-md-0">
                <div class="bg-light h-100 p-5">
                  <h4>Chat to us online</h4>
                  <p>
                    Chat to us online if you have a question about using our
                    Mortgage calculator.
                  </p>
                  <Link class="btn btn-primary btn-sm mt-3" to="#">
                    {" "}
                    start web chat
                  </Link>
                </div>
              </div>
              <div class="col-md-4 mb-4 mb-md-0">
                <div class="bg-primary h-100 p-5">
                  <h4 class="text-white">Call us</h4>
                  <p class="text-white">
                    Our mortgage loan officers will work with you to meet your
                    lending needs.
                  </p>
                  <h2 class="text-white mt-4 mb-0">(123) 345-6789</h2>
                </div>
              </div>
              <div class="col-md-4">
                <div class="bg-dark h-100 p-5">
                  <h4 class="text-white">
                    Contact us now to lock in your rate.
                  </h4>
                  <span class="text-white mt-1 mb-0 d-block">
                    Find a mortgage loan officer call
                  </span>
                  <h2 class="text-white mt-4 mb-0">(456) 478-2589</h2>
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
      {needHelpLayout()}
    <Footer />
    </Fragment>
  );
};

export default Home;
