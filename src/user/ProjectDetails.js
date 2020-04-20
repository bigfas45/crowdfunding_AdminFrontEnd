import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProject, getProjectGallery } from "./ApiUser";
import moment from "moment";
import Footer from "../core/Footer";
import ReactHtmlParser from 'react-html-parser';
import '../styles.css';
import {API} from '../config';




const ProjectDetails = ({ match }) => {
  const [projectAll, setProjectAll] = useState([]);
  const [gallery, setGallery] = useState([]);

  const [error, setError] = useState(false);
  let count =0;

  const init = (projectId) => {
    getProject(projectId).then(data => {
      if (data.error) {
         setError(data.error);
      }else{
        setProjectAll(data);
      }
  });
};

const initProjectGallery = (projectId) => {
  getProjectGallery(projectId).then(data => {
      if (data.error) {
         setError(data.error)
      }else{
          setGallery(data)
      }
  });
};
  
useEffect(() => {
  init(match.params.projectId);
  initProjectGallery(match.params.projectId)
}, []);

  const breadcrumb = () => {
    return (
      <Fragment>
        <div className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="#">
                      {" "}
                      <i className="fas fa-home"></i>{" "}
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    {" "}
                    <i className="fas fa-chevron-right"></i>{" "}
                    <Link href="#">Pages</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    {" "}
                    <i className="fas fa-chevron-right"></i>{" "}
                    <span>Project details </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  const content = () => {
    return (
      <Fragment>
        {projectAll.map((d,i) => {
          return(
            <div className="wrapper" key={i}>
            <section className="space-pt">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 mb-5 mb-lg-0 order-lg-2">
                    <div className="sticky-top">
                      <div className="mb-4">
                       <a target="_black" href={`${d.website}`} > <h3>{d.title}</h3></a>
                        <span class="badge badge-pill badge-danger">{d.category.name} </span>
                        <span class="d-block mb-3">
                          <i className="fas fa-map-marker-alt fa-xs pr-2"></i>
                            {d.location}
                        </span>
                        <span className="price font-xll text-primary d-block">
                        ₦{d.pledge.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                        </span>
                        <p>Goal</p>
                        <span className="price font-xll text-success d-block">
                          ₦50,000
                        </span>
                        <p>Pledged</p>
                        <span className="sub-price font-lg text-dark d-block">
                          <b>
                            <i
                              className="fas fa-chart-bar"
                              style={{ margin: " 4px 0px 0px 0px" }}
                            ></i>
                            &nbsp;{d.returns}% returns in {d.duration} months
                          </b>{" "}
                        </span>
                        <ul className="property-detail-meta list-unstyled ">
                          <li className="share-box">
                            <a href="#">
                              {" "}
                              <i className="fas fa-share-alt"></i>{" "}
                            </a>
                            <ul className="list-unstyled share-box-social">
                              <li>
                                {" "}
                                <a href="#">
                                  <i className="fab fa-facebook-f"></i>
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a href="#">
                                  <i className="fab fa-twitter"></i>
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a href="#">
                                  <i className="fab fa-linkedin"></i>
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a href="#">
                                  <i className="fab fa-instagram"></i>
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a href="#">
                                  <i className="fab fa-pinterest"></i>
                                </a>{" "}
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <i className="fas fa-heart"></i>{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="agent-contact">
                        <div className="d-flex align-items-center p-4 border border-bottom-0">
                          <div className="agent-contact-name">
                            <label>Amout(₦)</label>
                            <input className="form-control" type="number" name="" />
                          </div>
                        </div>
                        <div className="d-flex">
                          <a
                            href="http://161.35.32.18/"
                            className="btn btn-primary col ml-0 b-radius-none"
                          >
                            Invest Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 order-lg-1">
                
                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">

  { gallery.map((g, i) => {
    count++;
    let active
if(count === 1){
   active ="active"

}else{
  active =""
}

                     return(
                       <Fragment>
    <div class={`carousel-item ${active}`}>
      <img  className="d-block w-100" src={`${API}/gallery/file/${g._id}`} alt={g.name}  />

    </div>
    </Fragment>
   )
  })}
   
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>

</div>
  
  
                    <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
                    <div className="property-description">
                      <div className="row">
                        <div className="col-sm-3 mb-3 mb-sm-0">
                          <h3>Description</h3>
                        </div>
                        <div className="col-sm-9">
                         {ReactHtmlParser(d.description)}
                          
                        </div>
                      </div>
                    </div>
  
                    <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
                    <div className="property-video">
                      <div className="row">
                        <div className="col-sm-3 mb-3 mb-sm-0">
                          <h5>Project video</h5>
                        </div>
                        <div className="col-sm-9">
                          <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                              width="560"
                              height="315"
                              src="https://www.youtube.com/embed/kacyaEXqVhs"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
                  </div>
                </div>
              </div>
            </section>
  
            <section className="space-pt"></section>
          </div>
        )
      })}
      
      </Fragment>
    );
  };

  return (
    <Fragment>
      {breadcrumb()}
      {content()}
      <Footer />
    </Fragment>
  );
};

export default ProjectDetails;
