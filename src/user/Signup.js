import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {signup} from '../auth';


const Signup = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    error: "",
    success: false
  });
  const { firstname, lastname, email, password, error, success } = values;

  const handleChnage = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };



  const clickSubmit = event => {
    event.preventDefault();
    setValues({...values, error:false});
    signup({ firstname, lastname, email, password }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          success: true
        });
      }
    });
  };

  const showError = () => {
    return (
     
        <div
          class="alert alert-danger"
          role="alert"
          style={{ display: error ? "" : "none" }}
        >
          {error}
        </div>
    
   
    );
  };

  const showSuccess = () => {
    return (
      <Fragment>
        <div
          class="alert alert-info"
          role="alert"
          style={{ display: success ? "" : "none" }}
        >
          New Account is created. Please <Link to="/signin">Signin</Link>  
        </div>
      </Fragment>
    );
  };

  const signupForm = () => {
    return (
      <Fragment>
        <div class="bg-light">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item">
                    <Link to="index.html">
                      {" "}
                      <i class="fas fa-home"></i>{" "}
                    </Link>
                  </li>
                  <li class="breadcrumb-item">
                    {" "}
                    <i class="fas fa-chevron-right"></i> <Link to="#">Pages</Link>
                  </li>
                  <li class="breadcrumb-item active">
                    {" "}
                    <i class="fas fa-chevron-right"></i> <span> Register </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <section class="space-ptb login">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-8 col-sm-10">
                <div class="section-title">
                  <h2 class="text-center">REGISTER</h2>
                </div>
                <ul
                  class="nav nav-tabs nav-tabs-02 justify-content-center"
                  id="myTab"
                  role="tablist"
                >
                  <li class="nav-item">
                    <Link class="nav-link " to="/signin">
                      Login
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" to="/signup">
                      Register
                    </Link>
                  </li>
                </ul>
                <br/>
                {showSuccess()}
                {showError()}
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade  show active"
                    id="regular-user"
                    role="tabpanel"
                    aria-labelledby="regular-user-tab"
                  >
                    <form class="form-row mt-4 mb-5 align-items-center">
                      <div class="form-group col-sm-12">
                        <label>First Name:</label>
                        <input
                          onChange={handleChnage("firstname")}
                          type="text"
                          class="form-control"
                          placeholder=""
                          value={firstname}
                        />
                      </div>
                      <div class="form-group col-sm-12">
                        <label>Last Name:</label>
                        <input
                          onChange={handleChnage("lastname")}
                          type="text"
                          class="form-control"
                          placeholder=""
                          value={lastname}
                        />
                      </div>
                      <div class="form-group col-sm-12">
                        <label>Email Address:</label>
                        <input
                          type="email"
                          onChange={handleChnage("email")}
                          class="form-control"
                          placeholder=""
                          value={email}
                        />
                      </div>
                      <div class="form-group col-sm-12">
                        <label>Password:</label>
                        <input
                          type="Password"
                          onChange={handleChnage("password")}
                          class="form-control"
                          placeholder=""
                          value={password}
                        />
                      </div>

                      <div class="col-sm-6">
                        <button
                          onClick={clickSubmit}
                          type="submit"
                          class="btn btn-primary btn-block"
                        >
                          Sign up
                        </button>
                      </div>
                      <div class="col-sm-6">
                        <ul class="list-unstyled d-flex mb-1 mt-sm-0 mt-3">
                          <li class="mr-1">
                            <Link to="#">
                              Already Registered User? Click here to login{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </form>
                    <div class="login-social-media border pl-4 pr-4 pb-4 pt-0 rounded">
                      <div class="mb-4 d-block text-center">
                        <b class="bg-white pl-2 pr-2 mt-3 d-block">
                          Login or Sign in with
                        </b>
                      </div>
                      <form class="row">
                        <div class="col-sm-6">
                          <Link
                            class="btn facebook-bg social-bg-hover d-block mb-3"
                            to="#"
                          >
                            <span>
                              <i class="fab fa-facebook-f"></i>Login with
                              Facebook
                            </span>
                          </Link>
                        </div>
                        <div class="col-sm-6">
                          <Link
                            class="btn twitter-bg social-bg-hover d-block mb-3"
                            to="#"
                          >
                            <span>
                              <i class="fab fa-twitter"></i>Login with Twitter
                            </span>
                          </Link>
                        </div>
                        <div class="col-sm-6">
                          <Link
                            class="btn google-bg social-bg-hover d-block mb-3 mb-sm-0"
                            to="#"
                          >
                            <span>
                              <i class="fab fa-google"></i>Login with Google
                            </span>
                          </Link>
                        </div>
                        <div class="col-sm-6">
                          <Link
                            class="btn linkedin-bg social-bg-hover d-block"
                            to="#"
                          >
                            <span>
                              <i class="fab fa-linkedin-in"></i>Login with
                              Linkedin
                            </span>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  };

  return <Fragment>
    {signupForm()}
    </Fragment>;
};

export default Signup;
