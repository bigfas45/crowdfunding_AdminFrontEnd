import React, { Fragment } from "react";
import Layout from '../core/Layout'
import {isAuthenticated} from '../auth'
import {Link} from "react-router-dom";

const AdminDashboard = () => {


    const {user: {_id, firstname, lastname, email, role}} = isAuthenticated()


    const adminLink = () => {
        return (
            <div className="card">
                <h4 className="card-header">Admin Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/">Create User</Link>
                    </li>
                    <li className="list-group-item">
                    <Link className="nav-link" to="/">Create category</Link>

                    </li>
                    <li className="list-group-item">
                    <Link className="nav-link" to="/">Projects</Link>

                    </li>
                </ul>
            </div>
        )
    }

    const adminInfo = () => (
        <div className="card mb-5">
        <h3 className="card-header">User Infromation</h3>
        <ul className="list-group">
            <li className="list-group-item">{firstname + " " + lastname}</li>
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{role === 1 ? 'Admin' : 'Registered User'} </li>
        </ul>
    </div>
    )

    const purchaseHistory = () => (
        
        <div className="card mb-5">
            <h3 className="card-header">Payment history</h3>
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
                {adminLink()}
            </div>
            <div className="col-9">
                {adminInfo()}
                {purchaseHistory()}
            </div>      

        </div>
        
       </Layout>
        </Fragment>
)

}

export default AdminDashboard