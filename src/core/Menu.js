import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#f0232a" };
  } else {
    return { color: "#001022" };
  }
};

const Menu = ({ history }) => {
  return (
    <Fragment>
      <header className="header">
        <div className="topbar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="d-block d-md-flex align-items-center text-center">
                  <div className="mr-3 d-inline-block">
                    <Link to="tel:1-800-555-1234">
                      <i className="fa fa-phone mr-2 fa fa-flip-horizontal"></i>
                      1-800-555-1234{" "}
                    </Link>
                  </div>
                  <div className="mr-auto d-inline-block">
                    <span className="mr-2 text-white">Get App:</span>
                    <Link className="pr-1" to="#">
                      <i className="fab fa-android"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-apple"></i>
                    </Link>
                  </div>

                  <div className="social d-inline-block">
                    <ul className="list-unstyled">
                      <li>
                        <Link to="#">
                          {" "}
                          <i className="fab fa-facebook-f"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          {" "}
                          <i className="fab fa-twitter"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          {" "}
                          <i className="fab fa-linkedin"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          {" "}
                          <i className="fab fa-pinterest"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          {" "}
                          <i className="fab fa-instagram"></i>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  {!isAuthenticated() && (
                  <Fragment>
                      <div className="login d-inline-block">
                    <a  target="_black" href="http://localhost:3001/">
                      sign in<i className="fa fa-user pl-2"></i>
                    </a>
                  </div>
                 
                  </Fragment>
                  )}


{isAuthenticated() && (
                  <Fragment>
                   
                  <div className="login d-inline-block">
                    <span
                      onClick={() =>
                        signout(() => {
                          history.push("/");
                        })
                      }
                      style={{ cursor: "pointer", color: "#ffffff" }}
                    >
                      sign out<i className="fa fa-user pl-2"></i>
                    </span>
                  </div>
                  </Fragment>
                  )}



                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-light bg-white navbar-static-top navbar-expand-lg header-sticky">
          <div className="container-fluid">
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <i className="fas fa-align-left"></i>
            </button>
            <Link className="navbar-brand" to="#">
              <img className="img-fluid" src="images/nasdlogop.jpg" alt="logo" />
            </Link>
            <div className="navbar-collapse collapse justify-content-center">
              <ul className="nav navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About<i class="fas fa-chevron-down fa-xs"></i></a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/WhoWeAre">Who We Are</a></li>
                  <li><a className="dropdown-item" href="#">complaints</a></li>
                 
                </ul>
              </li>

                <li className="nav-item dropdown">
                  <Link
                  to="#"
                    className="nav-link"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                  >
                    How it works<i className="fas fa-chevron-down fa-xs"></i>
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link className="dropdown-item" to="/howitworksissuers">
                        For Issuers
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/HowItWorksInvestors">
                        For Investors
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={isActive(history, "/project")}
                    to="/project"
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/contact"
                  
                   
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {isAuthenticated() && (
              <Fragment>
              <div className="add-listing d-none d-sm-block">
              <a target="_black"  className="btn btn-primary btn-md" href="http://161.35.32.18/">
                Dashboard
              </a>
            </div>
              </Fragment>

            )}

        {!isAuthenticated() && (
              <Fragment>
              <div className="add-listing d-none d-sm-block">
              <a target="_black" className="btn btn-primary btn-md" href="http://161.35.32.18/">
                Sumbit Project
              </a>
            </div>
              </Fragment>

            )}
           
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default withRouter(Menu);
