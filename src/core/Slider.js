import React , {Fragment} from "react";
import { Link, withRouter } from "react-router-dom";

const Slider = ({title="title", description="Description", children, image="images/tractor2.jpg"}) =>


{
    return(
<Fragment>
<section class="clearfix">
  <div id="slider" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#slider" data-slide-to="0" class="active"></li>
      <li data-target="#slider" data-slide-to="1"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="img-fluid" src={image} alt=""/>
        <div class="slider-content">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10">
                  <span class="text-white animated-07">{title}</span>
                  <h1 class="text-white mb-3 animated-08">{description}</h1>
                  <Link to="/signin" class="btn btn-link animated-08">View more <i class="fas fa-arrow-right pl-2"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    <div class="d-none d-md-block">
      <a class="carousel-control-prev" href="#slider" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#slider" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
  </div>
  </div>
</section>
</Fragment>
    )
}

export default withRouter(Slider);
