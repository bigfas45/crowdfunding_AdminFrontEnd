import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';
import { getProductPayment } from "./apiCore";


const Card = ({project}) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
let amount=0
let total =0
let percentage=0

  const init = () => {
    getProductPayment(project._id).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setData(data);
      }
    });
  };

  const payment = () => {
    data.map((p,i) => {
      amount = p.amount
      total += amount
     
    })
  }

  const perce = (pledge)  => {
    percentage = ( ((total)/pledge) *100 )
    return percentage
  }



  useEffect(() => {
   
    init();
   
  }, []);

  const projectType = (type) => {
    if(type === 'Equity'){
      return 'Shares'
    }
  }


 
    return (
  
      <div class="property-item">
              <div class="property-image bg-overlay-gradient-04">
              <ShowImage item={project} url="project" />
                <div class="property-lable">
                 
                 <span class="badge badge-md badge-primary">{project.category.title}</span>
                  <span class="badge badge-md badge-info">{project.projectType} </span>
                </div>
                {  payment()}

              
                <div class="property-agent-popup">
                  <a href="#"><i class="fas fa-camera"></i> 06</a>
                </div>
              </div>
              <div class="property-details">
                <div class="property-details-inner">
                  <h5 class="property-title"><a href="project2.php">{project.title} </a></h5>
                 
                  <span class="property-agent-date"> <br/><i style="color: green;"  class="fas fa-chart-bar" style={{margin: "4px 0px 0px 0px"}}></i> &nbsp;{project.projectType === 'Equity' ? 'Shares' : project.returns }% returns in {project.duration} months
                </span>
                  <br/>
                  <br/>
                  <div class="w3-light-grey w3-round-xlarge">
                  <div class="w3-container w3-blue w3-round-xlarge" style={{width:`${perce(project.pledge).toFixed(0)}%`}}>{perce(project.pledge).toFixed(0)}%</div>
                </div>
                 
                  <ul class="property-info list-unstyled d-flex">
                    <li class="flex-fill property-bed"> <div class="goal-price">₦{project.pledge.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</div>
                      <p style={{fontSize: "15px", fontWeight: "bolder"}}>Goal</p></li>
                   
                     <li class="flex-fill property-bed"> <div class="pledged-price">₦{total.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} </div>
                      <p style={{fontSize: "15px", fontWeight: "bolder"}}>pledged</p></li>
                    <li class="flex-fill property-bath"><div class="duration">Duration</div>
                      <p style={{fontSize: "15px", fontWeight: "bolder"}}>{moment(project.createdAt). fromNow()} </p></li>
                    
                  </ul>
                  
                </div>
                <div class="property-btn">
                <Link class="property-link" to={`/project/details/${project._id}`}>See Details</Link>
                
                </div>
              </div>
         
              </div>
       
    );
};

export default Card;