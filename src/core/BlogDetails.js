import React, { Fragment, useState, useEffect } from "react";
import Slider from "./Slider";
import HomeSectionTwo from "./HomeSectionTwo";
import { Link } from "react-router-dom";
import {getSingleBlog} from "./apiCore"
import Footer from "./Footer";
import ProjectHome from "./ProjectHome";
import "../styles.css"
import WordLimit from 'react-word-limit';
import moment from 'moment';
import ShowImage from './ShowImage';
import ReactHtmlParser from 'react-html-parser';
import {API} from '../config';
import ShowLikes from './ShowLikes';


const BlogDetails =props => {

   const  [error, setError] = useState(false);
    const [data, setData] = useState([]);
  
  
   
    
    const init = (blogId) => {
        getSingleBlog(blogId).then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setData(data);
        }
      });
    };

    useEffect(() => {
        init(props.match.params.blogId);
      }, [props]);

const content = () => {
    return(
        <Fragment>
            {data.map((b,i) => {
                return(
                    <Fragment>
                         <div class="bg-light">
  <div class="container">
    <div class="row">
      <div class="col-12">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="index.html"> <i class="fas fa-home"></i> </a></li>
            <li class="breadcrumb-item"> <i class="fas fa-chevron-right"></i> <a href="#">Blog</a></li>
                <li class="breadcrumb-item active"> <i class="fas fa-chevron-right"></i> <span>{b.title}</span></li>
          </ol>
      </div>
    </div>
  </div>
</div>


<section class="space-ptb">
  <div class="container">
    <div class="row">
     <div class="col-lg-8">
        <div class="blog-detail">
          <div class="blog-post">
            <div class="blog-post-title">
              <h2>{b.title}</h2>
            </div>
            <div class="blog-post-category ">
              
            </div>
            <div class="blog-post-footer border-0 justify-content-start">
              <div class="blog-post-time ml-0">
                <a href="#"> <i class="far fa-clock"></i>{moment(b.createdAt). fromNow('LL')}</a>
              </div>
              <div class="blog-post-author">
                <span> By Admin </span>
              </div>
              <div class="blog-post-comment">
                <a href="#"> <i class="far fa-comment"></i><ShowLikes blog={b}/> </a>
              </div>
            </div>
            <div class="blog-post-image">
              <img class="img-fluid mb-4" src={`${API}/blog/image/${b._id}`} alt={b.name}/>
            </div>
            <div class="blog-post-content border-0">
              <div class="blog-post-description">
               {ReactHtmlParser(b.description)}

              </div>
              
             
             
               
                <div class="mt-4">
                 
                  <hr class="my-5" />
                 
                  
                  
                 
                  {/* <div class="mt-sm-4 mt-5">
                    <h5 class="mb-4">Leave a Reply</h5>
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <input type="text" class="form-control" id="name" placeholder="Your name"/>
                        </div>
                        <div class="form-group col-md-6">
                          <input type="email" class="form-control" id="inputEmail4" placeholder="Your email"/>
                        </div>
                        <div class="form-group col-12">
                          <input type="text" class="form-control" id="Website" placeholder="Website"/>
                        </div>
                        <div class="form-group col-md-12">
                          <textarea class="form-control" rows="4" placeholder="Your message"></textarea>
                        </div>
                        <div class=" form-group col-md-12">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                            <label class="custom-control-label pr-5" for="customCheck1">I consent to having this website store my submitted information so they can respond to my inquiry.</label>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <a class="btn btn-primary" href="#">Send message</a>
                        </div>
                      </div>
                    </form>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mt-5 mt-lg-0">
          <div class="blog-sidebar">
            
            
{/*           
            <div class="widget">
              <div class="widget-title">
                <h6>Categories</h6>
              </div>
              <ul class="list-unstyled list-style mb-0">
                <li><a href="#">Home improvement <span class="ml-auto">(23)</span></a></li>
                <li><a href="#">Tips and advice<span class="ml-auto">(12)</span></a></li>
                <li><a href="#">Market trends<span class="ml-auto">(10)</span></a></li>
                <li><a href="#">Technology<span class="ml-auto">(02)</span></a></li>
                <li><a href="#">The neighborhoods<span class="ml-auto">(45)</span></a></li>
              </ul>
            </div> */}
            
           
            
          </div>
        </div>
      </div>
    </div>
</section>
                     </Fragment>   
                )
            })}
           
        </Fragment>
    )
}


    return (
        <Fragment>
        {content()}
        <Footer />
        </Fragment>

    )




}

export default BlogDetails