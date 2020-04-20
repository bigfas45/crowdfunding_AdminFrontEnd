import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {getProjectAll, getCategories, getFilteredProduct} from './ApiUser';
import moment from 'moment';
import ShowImage from '../core/ShowImage';
import CheckBox from '../core/Checkbox';
import CardProject from '../core/CardProject';
import Card from '../core/Card';


const Project = () => {
    const [myFilters, setMyFilters] = useState({
        filters:  {category: []}
    });
    const [projectAll, setProjectAll] = useState([]);
    const [error, setError]  = useState(false);
    const [limit, setLimit]  = useState(6);
    const [skip, setSkip]  = useState(0);
    const [size, setSize]  = useState(0);
    const [filterResults, setFilterResults] = useState([]);
    const [categories, setCategories] = useState([]);

    const loadCategories = () => {

        getCategories().then(data => {
            if (data.error) {
                console.log(data.error)
            }else{
                setCategories(data)
            }
        });

    };
  
    const init = () => {
        getProjectAll().then(data => {
          if (data.error) {
             setError(data.error);
          }else{
            setProjectAll(data);
          }
      });
  };

  const loadFilterResult = newFilters => {
   // console.log(newFilters);
    getFilteredProduct(skip, limit, newFilters).then(data => {
        if (data.error) {
            setError(data.error);
        }else{
            setFilterResults(data.data);
            setSize(data.size)
           setSkip(0)
        }
    })
};

const loadLoadMore = () => {
  let toSkip = skip + limit
  // console.log(newFilters);
   getFilteredProduct(toSkip, limit, myFilters.filters).then(data => {
       if (data.error) {
           setError(data.error);
       }else{
           setFilterResults([...filterResults, ...data.data]);
           setSize(data.size)
          setSkip(toSkip)
       }
   })
};

const loadMoreButton = () =>{
  return(
    size > 0 && size >= limit && (
      <button onClick={loadLoadMore} className="btn btn-warning mb-5">Load more</button>
    )
  )
}
  
  
  useEffect(() => {
    init();
    loadCategories();
    loadFilterResult(skip, limit, myFilters.filters)
  
  }, []);




  const handleFilters = (filters, filterBy) => {
    //console.log("SHOP", filters, filterBy)
    const newFilters = {...myFilters};
    newFilters.filters[filterBy] = filters;

   
    loadFilterResult(myFilters.filters);
    setMyFilters(newFilters);
 };


 const breadcrum = () => {
   return(
     <Fragment>
       <div className="bg-light">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><Link to="#"> <i className="fas fa-home"></i> </Link></li>
          <li className="breadcrumb-item"> <i className="fas fa-chevron-right"></i> <Link href="#">Pages</Link></li>
          <li className="breadcrumb-item active"> <i className="fas fa-chevron-right"></i> <span>No result found </span></li>
        </ol>
      </div>
    </div>
  </div>
</div>
     </Fragment>
   )
 }


  const searchBar = () => {
      return(
          <Fragment>
                <div className="col-lg-12">
        <div className="property-filter d-sm-flex">
          <ul className="property-short list-unstyled d-sm-flex mb-0">
            <li>
              <form className="form-inline">
                <div className="form-group d-lg-flex d-block">
                  <label className="justify-content-start">Short by:</label>
                  <div className="short-by">
                    <select className="form-control basic-select">
                      <option>Date new to old</option>
                      <option>Price Low to High</option>
                      <option>Price High to Low</option>
                      <option>Date Old to New</option>
                      <option>Date New to Old</option>
                    </select>
                  </div>
                </div>
              </form>
            </li>
          </ul>
          <ul className="property-view-list list-unstyled d-flex mb-0">
            <li>
              <form className="form-inline">
                <div class="form-group d-lg-flex d-block">
                  <label className="justify-content-start pr-2">Sort by: </label>
                  <div className="short-by">
                    <select className="form-control basic-select">
                      <option>12</option>
                      <option>18 </option>
                      <option>24 </option>
                      <option>64 </option>
                      <option>128</option>
                    </select>
                  </div>
                </div>
              </form>
            </li>
            </ul>

            </div>
            </div>

          </Fragment>
      )
  }
  





    const content = () =>  {
        return(
            <Fragment>
               
    

            <div class="row mt-4">
                {filterResults.map((p,i) => {
                    return(
                        <div className="col-sm-6" key={i}>
                        <div className="property-item">
                   <Card project={p} />
                   </div>
                  
                   </div>
                    )
                })}
                 <hr />
                   {loadMoreButton()}
      
        </div>


       
            </Fragment>
        )
    }







  const footer = () => {
    return (
      <Fragment>
        <footer className="footer bg-dark space-pt">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-contact-info">
                  <h5 className="text-primary mb-4">About NASD</h5>
                  <p className="text-white mb-4"></p>
                  <ul className="list-unstyled mb-0">
                    <li>
                      {" "}
                      <b>
                        {" "}
                        <i class="fas fa-map-marker-alt"></i>
                      </b>
                      <span>Lagos, Nigeria</span>{" "}
                    </li>
                    <li>
                      {" "}
                      <b>
                        <i class="fas fa-microphone-alt"></i>
                      </b>
                      <span>(123) 345-6789</span>{" "}
                    </li>
                    <li>
                      {" "}
                      <b>
                        <i class="fas fa-headset"></i>
                      </b>
                      <span>support@nasdng.com</span>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                <div className="footer-link">
                  <h5 className="text-primary mb-4">Useful links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      {" "}
                      <Link to="#">Projects </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="#">Contact</Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="#">Companies </Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <h5 className="text-primary mb-4">Subscribe us</h5>
                <div className="footer-subscribe">
                  <p className="text-white">
                    Sign up to our newsletter to get the latest news and offers.
                  </p>
                  <form>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm">
                      Get notified
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-4 text-center text-md-left">
                  <Link to="index.html">
                    <img
                      className="img-fluid footer-logo"
                      src="images/nasdlogop.jpg"
                      alt=""
                    />{" "}
                  </Link>
                </div>
                <div className="col-md-4 text-center my-3 mt-md-0 mb-md-0">
                  <Link id="back-to-top" className="back-to-top" to="#">
                    <i className="fas fa-angle-double-up"></i>{" "}
                  </Link>
                </div>
                <div className="col-md-4 text-center text-md-right">
                  <p className="mb-0 text-white">
                    {" "}
                    &copy;Copyright{" "}
                    <span id="copyright">
                      {" "}
                      <script>
                        document.getElementById('copyright').appendChild(document.createTextNode(new
                        Date().getFullYear()))
                      </script>
                    </span>{" "}
                    <Link to="#"> NASD </Link> All Rights Reserved{" "}
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
      {breadcrum()}
      
        <section className="space-ptb">
            <div className="container-fluid">
            <div class="section-title text-center">
          <h2>Crowdfunding Projects</h2>
        </div> 
                <div className="row">
          
                <div className="col-md-12 col-lg-2 col-xl-2 card m-l-30 cat">
           <div class="panel panel-primary">
              <h6 className="card-body"><b>Filter by categories</b></h6> <hr/>
              </div>
                        <ul>
                        <CheckBox categories={categories}  handleFilters={filters => handleFilters(filters, 'category')} />
                        </ul>
                        
                    </div>
                    <div className="col-10">
                     {content()}
                
                     </div>
                </div>
            </div>
        </section>

     {footer()}
    </Fragment>
  );
};

export default Project;
