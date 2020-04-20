import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth";
import { Spinner } from "reactstrap";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false
  });
  const { email, password, error, loading, redirectToReferrer } = values;
  const {user} = isAuthenticated()

  const handleChnage = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true
          });
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

  const showLoading = () =>
    loading && (
      <div>
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="secondary" />
        <Spinner type="grow" color="success" />
        <Spinner type="grow" color="danger" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="light" />
        <Spinner type="grow" color="dark" />
      </div>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return <Redirect to="/http://localhost:3001/"></Redirect>;
      }else{
        return <Redirect to="/http://localhost:3001/"></Redirect>;
      }
    }
  };

  const signinForm = () => {
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
                    <i class="fas fa-chevron-right"></i> <span> Login </span>
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
                  <h2 class="text-center">Login</h2>
                </div>
                <ul
                  class="nav nav-tabs nav-tabs-02 justify-content-center"
                  id="myTab"
                  role="tablist"
                >
                  <li class="nav-item">
                    <Link class="nav-link active " to="/signin">
                      Login
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link " to="/signup">
                      Register
                    </Link>
                  </li>
                </ul>
                <br />
                {showError()}
                {showLoading()}
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="agent"
                    role="tabpanel"
                    aria-labelledby="agent-tab"
                  >
                    <form class="form-row mt-4 align-items-center">
                      <div class="form-group col-sm-12">
                        <label>Email Address:</label>
                        <input
                          onChange={handleChnage("email")}
                          type="email"
                          class="form-control"
                          placeholder=""
                          value={email}
                        />
                      </div>
                    
                      <div class="form-group col-sm-12">
                        <label>Password:</label>
                        <input
                          onChange={handleChnage("password")}
                          type="Password"
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
                          Login
                        </button>
                      </div>
                      <div class="col-sm-6">
                        <ul class="list-unstyled d-flex mb-1 mt-sm-0 mt-3">
                          <li class="mr-1">
                            <Link to="#">
                              Don't have an account? Click here to Register
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </form>
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

      {signinForm()}
      {redirectUser()}
    </Fragment>
  );
};

export default Signin;
