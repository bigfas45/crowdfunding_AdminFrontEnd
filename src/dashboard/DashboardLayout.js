import React, { Fragment } from "react";
import Layout from '../core/Layout'
import {isAuthenticated} from '../auth'
import {Link} from "react-router-dom";

const DashboardLayout = () => {


    const {user: {_id, firstname, lastname, email, role}} = isAuthenticated()


    const userLink = () => {
        return (
            <div className="card">
                <h4 className="card-header text-white bg-dark mb-3">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/">Create Project</Link>
                    </li>
                    <li className="list-group-item">
                    <Link className="nav-link" to="/">Submit Form</Link>

                    </li>
                    <li className="list-group-item">
                    <Link className="nav-link" to="/">Update Profile</Link>

                    </li>
                </ul>
            </div>
        )
    }

    const userInfo = () => (
        <div className="card mb-5">
        <h3 className="card-header text-blue  mb-3" >User Infromation</h3>
        <ul className="list-group">
            <li className="list-group-item">{firstname + " " + lastname}</li>
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{role === 1 ? 'Admin' : 'Registered User'} </li>
        </ul>
    </div>
    )

    const purchaseHistory = () => (
        
        <div className="card mb-5">
            <h3 className="card-header text-blue  mb-3" >Payment history</h3>
            <ul className="list-group">
                <li className="list-group-item">History</li>
              
            </ul>
        </div>
    )
  


return(
    <Fragment>
       <Layout title="Dashboard" description={`G'day ${firstname}  ${lastname} `} className="container-fluid">
    
        <div className="row">
            <div className="col-3">
                {userLink()}
            </div>
            <div className="col-9">
                {userInfo()}
                {purchaseHistory()}
            </div>      

        </div>
        
       </Layout>
        </Fragment>
)

}

export default DashboardLayout