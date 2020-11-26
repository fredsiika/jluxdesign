/*!

=========================================================
* J Lux Design System - v1.0.1
=========================================================

* Product Page: https://fredsiika.github.io/jluxdesign.com
* Copyright 2020 Fred Siika (https://www.github.com/fredsiika)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Fred C. Siika

=========================================================
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './custom.scss'
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import "./views/app.css"
import 'semantic-ui-css/semantic.min.css'

// import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
// import Login from "views/examples/Login.js";
// import Profile from "views/examples/Profile.js";
// import Register from "views/examples/Register.js";
import AboutPage from "views/examples/AboutPage.js";
import Contact from "views/examples/Contact.js";
import KnowledgeBase from "views/examples/KnowledgeBase.js";
import ServicesPage from "views/examples/ServicesPage.js";
import Products from "views/examples/Products.js";
import NotFound from "views/examples/404.js";

ReactDOM.render(
  <>
  <BrowserRouter>
    <Switch>
      <Route
          path="/landing-page"
          exact
          render={props => <Landing {...props} />}
      />
      <Route
        path="/landing"
        exact
        render={props => <Landing {...props} />}
      />
      <Route
        path="/"
        exact render={props => <Landing {...props} />}
      />
      <Route
        path="/home"
        exact
        render={props => <Landing {...props} />}
      />
      <Route
        path="/about"
        exact
        render={props => <AboutPage title="About Us" {...props} />}
      />
      <Route
        path="/contact"
        exact
        render={props => <Contact {...props} />}
      />
      <Route
        path="/knowledge-base"
        exact
        render={props => <KnowledgeBase {...props} />}
      />
      <Route
        path="/services"
        exact
        render={props => <ServicesPage title="Our Services" {...props} />}
      />
      <Route
        path="/products"
        exact
        render={props => <Products {...props} />}
      />
      <Route
        path="/404"
        exact
        render={props => <NotFound {...props} />}
      />
      <Redirect to="/404" />
      {/* <Route
        path="/login-page"
        exact render={props => <Login {...props} />}
      /> */}
      {/* <Route
        path="/profile-page"
        exact render={props => <Profile {...props} />}
      /> */}
      {/* <Route
        path="/register-page"
        exact render={props => <Register {...props} />}
      /> */}
    </Switch>
  </BrowserRouter>
  </>,
  document.getElementById("root")
);
