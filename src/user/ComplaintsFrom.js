import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import Footer from "../core/Footer";


const ComplaintsFrom = () => {

    const content = () => {
        return (
            <Fragment>
          <section class="space-ptb">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="section-title d-flex align-items-center">
          <h2>COMPLAINTS FORM</h2>

        </div>

          <p style={{margin: "-40px 0px 0px 0px" }}>To address your complaint, kindly provide the following information:</p>
          <br/>
        <div class="row">
          <div class="col-12">
        </div>
            <div class="tab-content mt-4" id="myTabContent">
              <div class="tab-pane fade show active" id="tab-01" role="tabpanel" aria-labelledby="tab-01-tab">
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label>Name of the Person(s) or Corporate Entity filing the Complaint (“the Complainant”).</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>

                   
                    <br/><br/><br/>
                    <label>Contact information of the Complainant (please include email address and phone number if possible).</label>

                     <div class="form-row">


                    <div class="form-group col-md-6 select-border">
                      <label>Phone</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="form-group col-md-6 select-border">
                      <label>Email</label>
                       <input type="email" class="form-control" />
                    </div>

                  </div>

                   <div class="form-row">
                    <div class="form-group col-md-12 select-border">
                      <label>Are you requesting that this Complaint be kept confidential?</label>
                      <br/>
                      <small>(if yes, please explain why you are requesting confidentiality)</small>
                        <br/>
                        <br/>
                        <input type="radio"/>
                        <label for="female">YES</label><br/>
                        <input type="radio" />
                        <label for="other">NO</label>
                        <br/>
                         <textarea class="form-control" rows="4"></textarea>
                    </div>
                  </div>
                  <br/>

                  <div class="form-row">
                    <div class="form-group col-md-12 select-border">
                      <label>Please provide the name or a description of the Project at issue.</label>
                       <textarea class="form-control" rows="4"></textarea>
                    </div>
                  </div>
                  <br/>

                    <div class="form-row">
                    <div class="form-group col-md-12 select-border">
                      <label>Please describe the nature of harm that has been caused or might be caused by the Project :</label>
                       <textarea class="form-control" rows="4"></textarea>
                    </div>
                  </div>


                  <br/>
                  <div class="form-row">
                    <div class="form-group col-md-12 select-border">
                      <label>Are you requesting that this Complaint be kept confidential? </label>
                      <br/>
                      <small>(if yes, please explain why you are requesting confidentiality)</small>
                        <br/>
                        <br/>
                        <input type="radio"/>
                        <label for="female">YES</label><br/>
                        <input type="radio" />
                        <label for="other">NO</label>
                        <br/>
                         <textarea class="form-control" rows="4"></textarea>
                    </div>
                  </div>

                   <br/>

                    <div class="form-row">
                    <div class="form-group col-md-12 select-border">
                      <label>Do you wish to be informed on our findings and/or action taken in respect of your complaint?</label>
                       <textarea class="form-control" rows="4"></textarea>
                    </div>
                  </div>
                  <div>
                    <button class="btn btn-primary" type="submit">Submit</button>
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
        )

    }


    return (
        <Fragment> {
            content()
        }

            <Footer/>
        </Fragment>
    )

}


export default ComplaintsFrom

