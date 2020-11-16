import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getProject,
  getProjectGallery,
  getProjectRelatedCategory,
} from './ApiUser';
import moment from 'moment';
import Footer from '../core/Footer';
import ReactHtmlParser from 'react-html-parser';
import '../styles.css';
import { API } from '../config';
import WordLimit from 'react-word-limit';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { getProductPayment, paystackInti } from '../core/apiCore';
import Card from '../core/Card';

import { PaystackButton } from 'react-paystack';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ProjectDetails = (props) => {
  const publicKey = 'pk_live_098c35141fc51e791417dbd444a3f1a152d968df';
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [errors, setErrors] = useState('');



  


  let status = 1;
  const [referenceId, setRefre] = useState('');

  const initPayments = (projectId) => {

      paystackInti({ projectId, amount, status, referenceId }).then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          console.log(data);
        }
      });
    };

  const componentProps = {
    email,
    amount: amount*100,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: 'Donate Now',
    onSuccess: (data) => {
      initPayments(props.match.params.projectId);
      console.log(data);
      setOpen(false);
      alert('Thanks for doing business with us! Come back soon!!');
    },

    onClose: () => alert("Wait! Don't leave :("),
  };

  

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [projectAll, setProjectAll] = useState([]);
  const [projectCat, setProjectCat] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [data, setData] = useState([]);

  let amount2 = 0;
  let total = 0;
  let percentage = 0;

  const [error, setError] = useState(false);
  let count = 0;

  const initPayment = (projectId) => {
    getProductPayment(projectId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setData(data);

      }
    });
  };

  const payment = () => {
    data.map((p, i) => {
      amount2 = p.amount;
      total += amount2;
    });
  };

  const perce = (pledge) => {
    percentage = (total / pledge) * 100;
    return percentage;
  };

  const init = (projectId) => {
    getProject(projectId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProjectAll(data);
        //fetch related projects
        getProjectRelatedCategory(projectId).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setProjectCat(data);
          }
        });
      }
    });
  };

  const initProjectGallery = (projectId) => {
    getProjectGallery(projectId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setGallery(data);
      }
    });
  };

 

  useEffect(() => {
    init(props.match.params.projectId);
    initProjectGallery(props.match.params.projectId);
    initPayment(props.match.params.projectId);
     setRefre(new Date().getTime());
  }, [props]);

  const modal = () => {
    return (
      <div>
        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
          Donate Now
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To donate, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>

            <div class="form-group">
              <label for="exampleInputName">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputName"
                aria-describedby="NameHelp"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
              {/* <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small> */}
            </div>
            <div class="form-group">
              <label for="exampleInputEmail">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPhone">Phone</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPhone"
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div class="form-group">
              <label for="exampleInputAmount">Amount</label>
              <input
                type="number"
                class="form-control"
                id="exampleInputAmount"
                placeholder="Pledge Amount"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <PaystackButton {...componentProps} />
          </DialogActions>
        </Dialog>
      </div>
    );
  };

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
                      {' '}
                      <i className="fas fa-home"></i>{' '}
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    {' '}
                    <i className="fas fa-chevron-right"></i>{' '}
                    <Link href="#">Pages</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    {' '}
                    <i className="fas fa-chevron-right"></i>{' '}
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

  const similarProject = () => {
    return (
      <Fragment>
        <section class="space-pt">
          <div class="container">
            <hr class="mb-5 mt-0" />
            <h5 class="mb-4">Similar projects</h5>
            <div class="row">
              {projectCat.map((pcat, i) => {
                return (
                  <div class="col-sm-4">
                    <Card project={pcat} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Fragment>
    );
  };

  const projectDetailsContent = () => {
    return (
      <Fragment>
        {projectAll.map((d, i) => {
       
          return (
            <div class="wrapper">
              {payment()}

              <section class="space-pt">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6 mb-5 mb-lg-0 order-lg-2">
                      <div class="sticky-top">
                        <div class="mb-4">
                          <h3>{d.title}</h3>
                          <span class="d-block mb-3">
                            <i class="fas fa-map-marker-alt fa-xs pr-2"></i>
                            {d.location}
                          </span>
                          {/* <WordLimit limit={10}>{d.description} </WordLimit>            */}
                          <span class="property-agent-date">
                            {' '}
                            <br />
                            <i
                              style="color: green;"
                              class="fas fa-chart-bar"
                              style={{ margin: '4px 0px 0px 0px' }}
                            ></i>{' '}
                            &nbsp;{d.returns}% returns in {d.duration} months
                          </span>
                          <br />
                          <br />
                          <div class="w3-light-grey w3-round-xlarge">
                            <div
                              class="w3-container w3-blue w3-round-xlarge"
                              style={{
                                width: `${perce(d.pledge).toFixed(0)}%`,
                              }}
                            >
                              {perce(d.pledge).toFixed(0)}%
                            </div>
                          </div>
                          <ul class="property-info list-unstyled d-flex">
                            <li class="flex-fill property-bed">
                              {' '}
                              <div class="goal-price">
                                ₦
                                {d.pledge.toLocaleString(navigator.language, {
                                  minimumFractionDigits: 0,
                                })}
                              </div>
                              <p
                                style={{
                                  fontSize: '15px',
                                  fontWeight: 'bolder',
                                }}
                              >
                                Goal
                              </p>
                            </li>
                            <li class="flex-fill property-bed">
                              {' '}
                              <div class="pledged-price">
                                ₦
                                {total.toLocaleString(navigator.language, {
                                  minimumFractionDigits: 0,
                                })}{' '}
                              </div>
                              <p
                                style={{
                                  fontSize: '15px',
                                  fontWeight: 'bolder',
                                }}
                              >
                                pledged
                              </p>
                            </li>
                            <li class="flex-fill property-bath">
                              <div class="duration">Duration</div>
                              <p
                                style={{
                                  fontSize: '15px',
                                  fontWeight: 'bolder',
                                }}
                              >
                                {moment(d.createdAt).fromNow()}{' '}
                              </p>
                            </li>
                          </ul>

                          {d.projectType === 'Donations' ? (
                            modal()
                          ) : (
                            <a
                              class="btn btn-primary"
                              href="https://account.ventureramp.com.ng/"
                            >
                              <span>LOGIN TO INVEST</span>
                            </a>
                          )}

                          <br />
                          <br />
                          <div class="social-icon d-flex">
                            <span>Share this project:</span>

                            <ul class="list-unstyled mb-0 ml-3 list-inline">
                              <li class="list-inline-item">
                                {' '}
                                <a href="#">
                                  {' '}
                                  <i class="fab fa-facebook-f"></i>{' '}
                                </a>{' '}
                              </li>
                              <li class="list-inline-item">
                                {' '}
                                <a href="#">
                                  {' '}
                                  <i class="fab fa-twitter"></i>{' '}
                                </a>{' '}
                              </li>
                              <li class="list-inline-item">
                                {' '}
                                <a href="#">
                                  {' '}
                                  <i class="fab fa-instagram"></i>{' '}
                                </a>{' '}
                              </li>
                              <li class="list-inline-item">
                                {' '}
                                <a href="#">
                                  {' '}
                                  <i class="fab fa-linkedin"></i>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                      <div class="property-detail-gallery overflow-hidden">
                        <ul
                          class="nav nav-tabs nav-tabs-02 mb-4"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li class="nav-item">
                            <a
                              class="nav-link shadow active"
                              aria-selected="true"
                            >
                              {d.category.name}
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link shadow" aria-selected="false">
                              {d.projectType}
                            </a>
                          </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                          <Carousel>
                            {gallery.map((g, i) => {
                              return (
                                <div>
                                  <img
                                    src={`${API}/gallery/file/${g._id}`}
                                    alt={g.location}
                                  />
                                  <p className="legend">{g.name}</p>
                                </div>
                              );
                            })}
                          </Carousel>
                        </div>
                      </div>
                      <div class="property-info mt-5">
                        <div class="row"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section class="space-pb sticky-top">
                <div class="container">
                  <div class="row">
                    <div class="col-12">
                      <ul
                        class="nav nav-tabs mb-4"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            id="overview-tab"
                            data-toggle="pill"
                            href="#overview"
                            role="tab"
                            aria-controls="overview"
                            aria-selected="true"
                          >
                            Overview
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            id="listing-tab"
                            data-toggle="pill"
                            href="#listing"
                            role="tab"
                            aria-controls="listing"
                            aria-selected="false"
                          >
                            Updates
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            id="agents-tab"
                            data-toggle="pill"
                            href="#agents"
                            role="tab"
                            aria-controls="agents"
                            aria-selected="false"
                          >
                            Documents
                          </a>
                        </li>
                      </ul>
                      <div class="tab-content" id="pills-tabContent">
                        <div
                          class="tab-pane fade show active"
                          id="overview"
                          role="tabpanel"
                          aria-labelledby="overview-tab"
                        >
                          <div class="row">
                            <div class="col-md-12">
                              {ReactHtmlParser(d.description)}
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="listing"
                          role="tabpanel"
                          aria-labelledby="listing-tab"
                        >
                          <div class="row">
                            <div class="row">
                              <div class="col-sm-12">
                                <div class="mb-4"></div>
                                <hr />
                                <div class="mb-4"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="agents"
                          role="tabpanel"
                          aria-labelledby="agents-tab"
                        >
                          <div class="row">
                            <div class="col-12">
                              <div class="section-title">
                                <h2>LOGIN TO VIEW DOCUMENTS.</h2>
                              </div>

                              <a
                                class="btn btn-primary"
                                href="https://account.ventureramp.com.ng/"
                              >
                                <span>LOGIN</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </Fragment>
    );
  };

  return (
    <Fragment>
      {breadcrumb()}
      {projectDetailsContent()}
      {similarProject()}

      <Footer />
    </Fragment>
  );
};

export default ProjectDetails;
