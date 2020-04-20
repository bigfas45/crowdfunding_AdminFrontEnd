import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';






const Card = ({project}) => {



    return (
       
       
        <div class="property-item">
      <div class="property-image bg-overlay-gradient-04">
         {/* <img class="img-fluid" src="images/property/puzzle-959x539.jpg" alt=""/> */}
         <ShowImage item={project} url="project" />
        
        <div class="property-agent-popup">
          <Link to="#"><i class="fas fa-camera"></i> 12</Link>
        </div>
      </div>
      <div class="property-details">
        <div class="property-details-inner">
          <h5 class="property-title"><Link to="project.php">{project.title}</Link></h5>
          <span class="property-address"><i class="fas fa-map-marker-alt fa-xs"></i>{project.location}</span>
          <span class="property-agent-date"><i class="far fa-clock fa-md"></i>{moment(project.createdAt). fromNow()}</span>
          <div class="property-price">₦{project.pledge.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}<span></span> </div>
          <br />
          <ul class="property-info list-unstyled d-flex">
            
            <i class="fas fa-chart-bar" style={{margin: "4px 0px 0px 0px;"}}></i> &nbsp;&nbsp;{project.returns}% returns in {project.duration} months
           
          </ul>
        </div>
        <div class="property-btn">
          <Link class="property-link" to={`/project/details/${project._id}`}>See Details</Link>
          <ul class="property-listing-actions list-unstyled mb-0">
            <li class="property-compare"><Link data-toggle="tooltip" data-placement="top" title="Compare" to="#"><i class="fas fa-exchange-alt"></i></Link></li>
            <li class="property-favourites"><Link data-toggle="tooltip" data-placement="top" title="Favourite" to="#"><i class="far fa-heart"></i></Link></li>
          </ul>
        </div>
      </div>
    </div>
    
       
    );
};

export default Card;