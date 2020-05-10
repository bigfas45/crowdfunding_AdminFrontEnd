import React, { Fragment, useState, useEffect } from "react";
import Slider from "./Slider";
import HomeSectionTwo from "./HomeSectionTwo";
import { Link } from "react-router-dom";
import {getBlogs} from "./apiCore"
import Footer from "./Footer";
import ProjectHome from "./ProjectHome";
import "../styles.css"
import WordLimit from 'react-word-limit';
import moment from 'moment';
import ShowImage from './ShowImage';
import ReactHtmlParser from 'react-html-parser';
import {API} from '../config';
import ShowLikes from './ShowLikes';
import { getFilteredBlog } from "../user/ApiUser";


const Blogs =props => {
    const [myFilters, setMyFilters] = useState({
        filters: { category: [] }
      });
    const [data, setData] = useState([]);

    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(3);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filterResults, setFilterResults] = useState([]);

    const init = () => {
        getBlogs().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setData(data);
            }
        });
    };


    const loadFilterResult = newFilters => {
        // console.log(newFilters);
        getFilteredBlog(skip, limit, newFilters).then(data => {
          if (data.error) {
            setError(data.error);
          } else {
            setFilterResults(data.data);
            setSize(data.size);
            setSkip(0);
          }
        });
      };
    
      const loadLoadMore = () => {
        let toSkip = skip + limit;
        // console.log(newFilters);
        getFilteredBlog(toSkip, limit, myFilters.filters).then(data => {
          if (data.error) {
            setError(data.error);
          } else {
            setFilterResults([...filterResults, ...data.data]);
            setSize(data.size);
            setSkip(toSkip);
          }
        });
      };
    
      const loadMoreButton = () => {
        return (
          size > 0 &&
          size >= limit && (
            <button onClick={loadLoadMore} className="btn btn-warning mb-5">
              Load more
            </button>
          )
        );
      };







    useEffect(() => {
        init();
        loadFilterResult(skip, limit, myFilters.filters);

    }, []);


const content = () => {
    return(
        <Fragment>
            <div class="bg-light">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item"><a href="index.html"> <i class="fas fa-home"></i> </a></li>
      
          <li class="breadcrumb-item active"> <i class="fas fa-chevron-right"></i> <span> News, tips & articles </span></li>
        </ol>
      </div>
    </div>
  </div>
</div>



<section class="space-ptb">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="section-title text-center">
          <h2>News, tips & articles</h2>
         
        </div>
      </div>
    </div>
    <div class="row">
      
      
     
     {filterResults.map((b,i) => {
            let word = (b.description)
         return(
             <Fragment>
    <div class="col-lg-4 mt-4 mt-lg-0" key={i}>
        <div class="blog-post">
          <div class="blog-post-image">
          <ShowImage item={b} url="blog"/>
          </div>
          <div class="blog-post-content">
            <div class="blog-post-details">
              <div class="blog-post-category">
                <a class="mb-3" href="#"></a>
              </div>
              <div class="blog-post-title">
                <h5><Link to={ `/blog/${b._id}`}>{ b.title}</Link></h5>
              </div>
              <div class="blog-post-description">
                 <p className="mb-0"><WordLimit limit={100}>{word}</WordLimit></p>      
             </div>
            </div>
            <div class="blog-post-footer">
              <div class="blog-post-time">
                <a href="#"> <i class="far fa-clock"></i>30 March 2020</a>
              </div>
              <div class="blog-post-author">
                <span> By <a href="#"> Admin</a> </span>
              </div>
              <div class="blog-post-comment">
                <a href="#"> <i class="far fa-comment"></i>(45) </a>
              </div>
            </div>
          </div>
        </div>
      </div>
             </Fragment>
         )
     }  )}
  


    </div>
       <div class="row">
          <div class="col-12">
          <hr />
                  {loadMoreButton()}
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

export default Blogs