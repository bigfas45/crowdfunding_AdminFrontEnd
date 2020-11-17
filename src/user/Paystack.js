import React, { Fragment, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../core/Footer';
import { contactForm, paystackInti } from '../core/apiCore';
import swal from 'sweetalert';
import { PaystackButton } from 'react-paystack';

const Contact = (props) => {
  const publicKey = 'pk_test_27cb2b122303557f86d645cfd358a7cb365ae2aa';
  const [referenceId, setRefre] = useState('');
  useEffect(() => {
    setRefre(new Date().getTime());
  }, [props]);
  const [values, setValues] = useState({
    name: '',
    telephone: '',
    email: '',
    phone: '',
    subject: '',
    amount: '',
    error: '',
    redirectToReferrer: false,
  });
  const { name, email, telephone, amount, error, redirectToReferrer } = values;
  const handleChnage = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
    
  };


  let userId = '5fb4256989c6efe6eb985c39';


  const clickSubmit = (event) => {
    event.preventDefault();
   
  };
  let status = 1;
  const initPayments = (projectId) => {
    paystackInti({ projectId, amount, status, referenceId, userId }).then(
      (data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        }
        return <Redirect to="/" />;
      }
    );
  };




  const componentProps = {
    email: email ? email : 'anonymous@nasdng.com',
    amount: amount * 100,
    referenceId,
    metadata: {
      name: name ? name : 'Anonymous',
      phone: telephone,
    },
    publicKey,
    text: 'Donate Now',
    onSuccess: (data) => {
      initPayments(props.match.params.projectId);
      setValues({
        ...values,
        redirectToReferrer: true,
      });

     return(<Redirect to="/" />) 
    },

    onClose: () => alert("Wait! Don't leave :("),
  };

  const redirectUser = () => {
    if (redirectToReferrer) {
      return (
        <Redirect
          to={`/Project/payment/${props.match.params.projectId}`}
        ></Redirect>
      );
    }
  };

  const content = () => {
    return (
      <Fragment>
        <div className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="index.html">
                      {' '}
                      <i className="fas fa-home"></i>{' '}
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    {' '}
                    <i className="fas fa-chevron-right"></i>{' '}
                    <Link to="#">Pages</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    {' '}
                    <i className="fas fa-chevron-right"></i>{' '}
                    <span>Payment </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <section className="space-ptb">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h2>Payment</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-7 mt-4 mt-lg-0">
                <div className="contact-form">
                  <h4 className="mb-4">Enter your card details to pay</h4>
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <input
                          onChange={handleChnage('name')}
                          value={name}
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          onChange={handleChnage('email')}
                          value={email}
                          type="email"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          onChange={handleChnage('telephone')}
                          value={telephone}
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="Your phone"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          onChange={handleChnage('amount')}
                          value={amount}
                          type="number"
                          className="form-control"
                          id="amount"
                          placeholder="Amount"
                        />
                      </div>
                      {/* <div className="form-group col-md-12">
                        <textarea
                          onChange={handleChnage('message')}
                          value={message}
                          className="form-control"
                          rows="4"
                          placeholder="Your message"
                        ></textarea>
                      </div> */}

                      <div className="col-md-12">
                        <button
                          onClick={clickSubmit}
                          type="submit"
                          className="btn btn-primary"
                          to="#"
                        >
                          <PaystackButton {...componentProps} />
                        </button>
                      </div>
                    </div>
                  </form>
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
      {content()}
      {redirectUser()}
      <Footer />
    </Fragment>
  );
};

export default Contact;
