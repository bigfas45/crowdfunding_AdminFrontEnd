import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from './Card';
import {getProject, getCategories} from './apiCore';


const ProjectHome = () => {
  const [project, setProject] = useState([]);
  const [error, setError]  = useState(false)

  const init = () => {
    getProject().then(data => {
        if (data.error) {
           setError(data.error);
        }else{
          setProject(data);
        }
    });
};


useEffect(() => {
  init();

}, [])



  return <Fragment>
      <section class="space-pb">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section-title text-center">
           <h2>Investment Projects</h2>

          </div>
        </div>
      </div>
      <div class="row">
      
      {project.map((project, i) => ( 
 <div class="col-md-4" key={i}>
          <Card  project={project} />
</div>
          ))} 



          
            </div>
          </div>
          <div class="col-12 text-center">
            <Link class="btn btn-link" to="/project"><i class="fas fa-plus"></i>View All Projects</Link>
          </div>
  </section>


  </Fragment>;
};

export default ProjectHome;
