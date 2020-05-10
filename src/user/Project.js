import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjectAll, getCategories, getFilteredProduct } from "./ApiUser";
import moment from "moment";
import ShowImage from "../core/ShowImage";
import CheckBox from "../core/Checkbox";
import CardProject from "../core/CardProject";
import Card from "../core/Card";

const Project = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [] }
  });
  const [projectAll, setProjectAll] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filterResults, setFilterResults] = useState([]);
  const [categories, setCategories] = useState([]);

  const loadCategories = () => {
    getCategories().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  const init = () => {
    getProjectAll().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProjectAll(data);
      }
    });
  };

  const loadFilterResult = newFilters => {
    // console.log(newFilters);
    getFilteredProduct(skip, limit, newFilters).then(data => {
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
    getFilteredProduct(toSkip, limit, myFilters.filters).then(data => {
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
    loadCategories();
    loadFilterResult(skip, limit, myFilters.filters);
  }, []);

  const handleFilters = (filters, filterBy) => {
    //console.log("SHOP", filters, filterBy)
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    loadFilterResult(myFilters.filters);
    setMyFilters(newFilters);
  };

  const breadcrum = () => {
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
                    <span>Project </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  const test = () => {
    return (
      <Fragment>
        <section class="space-ptb">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="section-title mb-3 mb-lg-4">
                  <h2>
                    <span class="text-primary">{projectAll.lenght}</span>{" "}
                    Results
                  </h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 mb-5 mb-lg-0">
                <div class="sidebar">
                  <div class="widget">
                    <div class="widget-title widget-collapse">
                      <h6>Filter By Status</h6>
                      <a
                        class="ml-auto"
                        data-toggle="collapse"
                        href="#status-property"
                        role="button"
                        aria-expanded="false"
                        aria-controls="status-property"
                      >
                        {" "}
                        <i class="fas fa-chevron-down"></i>{" "}
                      </a>
                    </div>
                    <div class="collapse show" id="status-property">
                      <ul class="list-unstyled mb-0 pt-3">
                        <li>
                          <a href="#">
                            Loan
                            <span class="ml-auto">
                              <input type="checkbox" name="" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Equity
                            <span class="ml-auto">
                              <input type="checkbox" name="" />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="widget">
                    <div class="widget-title widget-collapse">
                      <h6>Filter By Categories</h6>
                      <a
                        class="ml-auto"
                        data-toggle="collapse"
                        href="#type-property"
                        role="button"
                        aria-expanded="false"
                        aria-controls="type-property"
                      >
                        {" "}
                        <i class="fas fa-chevron-down"></i>{" "}
                      </a>
                    </div>
                    <div class="collapse show" id="type-property">
                      <CheckBox
                        categories={categories}
                        handleFilters={filters =>
                          handleFilters(filters, "category")
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="row mt-4">
                  {filterResults.map((p, i) => {
                    return (
                      <div class="col-sm-6" key={i}>
                        <CardProject project={p} />
                      </div>
                    );
                  })}
                  <hr />
                  {loadMoreButton()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  };

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

      {test()}

      {footer()}
    </Fragment>
  );
};

export default Project;
