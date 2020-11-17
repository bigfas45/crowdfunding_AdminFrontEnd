import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import DashboardLayout from "./dashboard/DashboardLayout";
import {signout} from "./auth";
import Menu from "./core/Menu";
import PrivateRoute from './auth/PrivateRoute'
import AdminRoute from './auth/AdminRoute'
import AdminDashboard from "./dashboard/AdminDashboard";
import Project from "./user/Project";
import ProjectDetails from "./user/ProjectDetails";
import HowItWorksIssuers from "./user/HowItWorksIssuers";
import HowItWorksInvestors from "./user/HowItWorksInvestors";
import WhoWeAre from "./user/WhoWeAre";
import Contact from "./user/Contact";
import Risk from "./user/Risk";
import PrivateNotice from "./user/PrivateNotice";
import ComplaintsFrom from "./user/ComplaintsFrom";
import PrivacyPolicy from "./user/PrivacyPolicy";
import Paystack from './user/Paystack';

import Security from "./user/Security";
import DataProtection from "./user/DataProtection";
import Termofuse from "./user/Termofuse";
import BlogDetails from "./core/BlogDetails";
import Blogs from "./core/Blogs";





const Routes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute
          path="/user/dashboard"
          exact
          component={DashboardLayout}
        />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <Route path="/signout" exact component={signout} />
        <Route path="/Project" exact component={Project} />
        <Route
          path="/Project/details/:projectId"
          exact
          component={ProjectDetails}
        />
        <Route
          path="/Project/payment/:projectId"
          exact
          component={Paystack}
        />
        <Route path="/howitworksissuers" exact component={HowItWorksIssuers} />
        <Route
          path="/HowItWorksInvestors"
          exact
          component={HowItWorksInvestors}
        />
        <Route path="/WhoWeAre" exact component={WhoWeAre} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/riskwarning" exact component={Risk} />
        <Route path="/privatenotice" exact component={PrivateNotice} />
        <Route path="/security" exact component={Security} />
        <Route path="/dataprotection" exact component={DataProtection} />
        <Route path="/term_of_use" exact component={Termofuse} />
        <Route path="/blog/:blogId" exact component={BlogDetails} />
        <Route path="/blogs" exact component={Blogs} />
        <Route path="/complaintsfrom" exact component={ComplaintsFrom} />
        <Route path="/Privacypolicy" exact component={PrivacyPolicy} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
