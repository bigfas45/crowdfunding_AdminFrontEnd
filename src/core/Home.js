import React, {Fragment, useState, useEffect} from "react";
import Slider from "./Slider";
import HomeSectionTwo from "./HomeSectionTwo";
import {Link} from "react-router-dom";
import {getBlogFrontEnd, updateBlogLikes, getBlogLikes} from "./apiCore"
import Footer from "./Footer";
import ProjectHome from "./ProjectHome";
import "../styles.css"
import WordLimit from 'react-word-limit';
import moment from 'moment';
import ShowImage from './ShowImage';
import ShowLikes from './ShowLikes';
import addNotification from 'react-push-notification';
import swal from "sweetalert";


const Home = () => {

    const [data, setData] = useState([]);

    const [error, setError] = useState(false);


    const init = () => {
        getBlogFrontEnd().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setData(data);
            }
        });
    };


    const initBlogLikes = (blog) => {
        updateBlogLikes(blog).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                init()
            }
        });
    };


    useEffect(() => {
        init();
        window.scrollTo(0, 0)
    }, []);


    const dashboarddashboard = () => {
        swal({
          title: `RISK WARNING`,
          text: `
         
            1. Crowd-sourced funding is risky. Issuers using this portal include new or rapidly growing enterprises. Investment in these types of enterprises is speculative and carries high risks. 
            
            2. You may lose your entire investment, and you should be in a position to bear this risk without undue hardship. 
       
            3. Even if the company is successful, the value of your investment and any return on the investment could be reduced if the company issues more shares.
           
            4. Even if the company is successful, the value of your investment and any return on the investment could be reduced if the company issues more shares.
            
            5. Even though you have remedies for misleading statements in the offer document or misconduct by the company, you may have difficulty recovering your money
            
            6. Your investment is unlikely to be liquid. This means you are unlikely to be able to sell your shares quickly or at all if you need the money or decide that this investment is not right for you.
           
            7. Even though you have remedies for misleading statements in the offer document or misconduct by the company, you may have difficulty recovering your money.
           
            8. Ask questions, read all information given carefully, and seek independent financial advice before committing yourself to any investment. 

         
          `,
          icon: "success"
        });
      };
      



    const blog = () => {
        return (
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
                            {
                            data.map((b, i) => {

                                let word = (b.description)

                                return (
                                    <Fragment>
                                        <div className="col-lg-4">
                                            <div className="blog-post">
                                                <div className="blog-post-image">
                                                    <ShowImage item={b}
                                                        url="blog"/>
                                                </div>
                                                <div className="blog-post-content">
                                                    <div className="blog-post-details">
                                                        <div className="blog-post-category">
                                                            {/* <a className="mb-3" href="#"><strong>Home improvement</strong></a> */} </div>
                                                        <div className="blog-post-title">
                                                            <h5>
                                                                <Link to={
                                                                    `/blog/${
                                                                        b._id
                                                                    }`
                                                                }>
                                                                    {
                                                                    b.title
                                                                }</Link>
                                                            </h5>
                                                        </div>
                                                        <div className="blog-post-description">
                                                            <p className="mb-0">
                                                                <WordLimit limit={100}>
                                                                    {word}</WordLimit>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="blog-post-footer">
                                                        <div className="blog-post-time">
                                                            <a href="#">
                                                                <i className="far fa-clock"></i>
                                                                {
                                                                moment(b.createdAt).fromNow('LL')
                                                            }</a>
                                                        </div>

                                                        <div className="blog-post-comment">
                                                            <Link onClick={
                                                                    () => initBlogLikes(b._id)
                                                                }
                                                                className="far fa-comment"></Link><ShowLikes blog={b}/>
                                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            })
                        } </div>
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
                                    NASD VentureRamp.... the contemporary hub for Crowdfunding!!!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">


                            <div class="row justify-content-center">
                                <div class="col-md-6 mb-6 mb-md-0">
                                    <div class="bg-light h-100 p-5">
                                        <h4>Chat with us</h4>
                                        <p>Chat to us online if you have a question.</p>
                                        <a class="btn btn-primary btn-sm mt-3" href="https://tawk.to/chat/5eb20a7ba1bad90e54a209e4/default" target="_blank">
                                            start web chat</a>
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
       {dashboarddashboard()}
            <Slider title="With NASD" description="You Are Investing In Companies With Personality"></Slider>
            <HomeSectionTwo></HomeSectionTwo>
            <ProjectHome></ProjectHome>
            {
            blog()
        }
            {
            needHelpLayout()
        }




            <Footer/>
        </Fragment>
    );
};

export default Home;

