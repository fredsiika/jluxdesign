/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// import { Link } from 'react-router-dom'
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
// import DemoNavbar from "components/Navbars/DemoNavbar.js";
import NavbarBasic from '../../components/Navbars/NavbarBasic';
// import CardsFooter from "components/Footers/CardsFooter.js";
import SimpleFooter from '../../components/Footers/SimpleFooter'

// index page sections
// import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <NavbarBasic />
        {/* Hero  */}
        <div className="Hero">
          <div className="HeroGroup">
            <h1>Launch the <br />perfect home renovation project</h1>
            <p>We'll help you select, cut and install your custom stone and tile countertop.</p>            
            <div className="btn-wrapper">
              <Button
                className="btn-icon mb-3 mb-sm-0"
                color="info"
                href="/services-page"
              >
                <span className="btn-inner--icon mr-1">
                  <i className="ni ni-settings" />
                </span>
                <span className="btn-inner--text">Services</span>
              </Button>

              <Button 
                className="btn-neutral btn-icon mb-3 mb-sm-0" 
                color="success" 
                outline type="button"
                href="/start"
              >
                <span className="bt-inner--icon mr-1">
                  <i className="ni ni-spaceship" />
                </span>
                <span className="nav-link-inner--text ml-1">
                  Get Started
                </span>
              </Button>
            </div>
          </div>
        </div>
        {/* End Hero Section */}

        <main ref="main">
          {/* Our process */}
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                
                {/* Floating image */}
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>

                {/* Web copy */}
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-danger shadow rounded-circle mb-5">
                      <i className="ni ni-diamond" />
                    </div>
                    <h3>From concept to completion</h3>
                    <p>Professional Countertop Stone Installation, Distribution and Fabrication Services in the Dallas/Fort-Worth Area - all in one place.</p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="default"
                            >
                              <i className="ni ni-world" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Products sourced from around the world
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="default"
                            >
                              <i className="ni ni-shop" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Design Consultants, fabricators, and installers are 100% in-house.</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="default"
                            >
                              <i className="ni ni-books" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Amazing knowledge base of stone and tile resources
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/* End Our Process */}


          {/* Services Section */}
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              {/* Background Bubbles */}
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              {/* End Background Bubbles */}

              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="12">
                      <h3 className="display-3 text-white text-center">
                        Start designing your new home{" "}
                        <span>Distribution, fabrication and Installation Services in DFW Area</span>
                      </h3>
                    </Col>
                  </Row>
                </div>
              </Container>

              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          {/* End Services Section */}

          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            First-class Stone distribution.
                          </h6>
                          <p className="description mt-3">
                            Choosing the right countertop surface is vital to the project.<br /> 
                            Having the it in stock is even more critical.<br />
                            With well over 50,000 slabs of stone in stock, JLuxDesign is ready to handle your project.
                          </p>
                          <div>
                            <p className="lead">Customer Segment</p>
                            <Badge color="primary" pill className="mr-1">
                              Homeowners
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Designers
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Builders
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Architects
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            State-of-the-art Stone Fabrication
                          </h6>
                          <p className="description mt-3">
                            Eliminate wasted time and money of outsourcing stone fabrication.
                            Our in-house team of professional fabricators guarantee the level of craftsmanship for the perfect stone cut.
                            JLuxDesign processes hundreds of countertops every week with CNC enabled machinery
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Stone Countertop Installation
                          </h6>
                          <p className="description mt-3">
                            Custom installation teams work with homeowners to ensure a hassle-free experience.<br />
                            From template to installation, our customer server team is here to create the home of your dreams.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              Homeowners
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              House flippers
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Custom Home Developers
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>



          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("../../assets/img/backgrounds/eco-thinking.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Eco-Thinking
                      </h4>
                      <p className="lead">Being mindful of the planet.</p>
                      <p className="lead text-italic text-white">
                        Our Eco-Thinking means high-quality, long-lasting materials that tread lightly on the environment.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Our customers</h3>
                    <p className="lead">
                      Here's some random text that has to do with our customers and what they expect from J Lux Design.
                    </p>
                    <p>
                      Here's some random text that has to do with our customers and what they expect from J Lux Design.
                    </p>
                    <p>
                      Here's some random text that has to do with our customers and what they expect from J Lux Design.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#!"
                      onClick={e => e.preventDefault()}
                    >
                      Discovery more about Eco-Thinking
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ill/ill-2.svg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Planning is key</h4>
                      <p className="lead">Service and skill to match.</p>
                      <p className="text-white">
                        At J Lux Design we plan just about every minute detail to ensure smooth completion of every project.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-default">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Bespoke service
                          </h5>
                          <p>
                            When it comes to creating colors, patterns and textures, our level of experience and expertise is unique. Share your inspiration. If you can dream it, we can probably do it—from stone to glass, Victorian to Art Deco, Arts and Crafts to contemporary.
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-danger rounded-circle text-default">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-danger">
                            Custom Capabilities
                          </h5>
                          <p>
                            We welcome custom orders as one more opportunity to help you find just the right tile.
                          </p>
                          <a
                            className="text-danger"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            See Options
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-info rounded-circle text-default">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-info">
                            Custom colors, sizes, designs
                          </h5>
                          <p>
                            We're here to help you find just the right tile—whether it already exists, or not. We offer custom color matching, custom sizes and custom designs. (This doesn’t apply to all collections, so look for the Custom callout.) In addition, many of our artists offer field sizes, colors and designs not shown here on the website.
                          </p>
                          <a
                            className="text-info"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            See Options
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-default">
                            <i className="ni ni-settings" />
                          </div>
                          <div className="pl-4">
                            <h5 className="title text-primary">
                              Matching samples
                            </h5>
                            <p>Put us to the test. Bring in a sample of the color you wish to match. In 2-3 weeks, a sample will be sent from Ann Sacks Collection manufacturing to the showroom for your inspection.</p>
                            <a
                            className="text-primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            See Options
                          </a>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">The amazing Team</h2>
                  <p className="lead text-muted">
                    What makes us special is a direct result of our hard working team who work tirelessley to deliver the best quality work.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Jon Moraa</span>
                        <small className="h6 text-muted">Founder/CEO</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Romina Hadid</span>
                        <small className="h6 text-muted">
                          Marketing Strategist
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Alexander Smith</span>
                        <small className="h6 text-muted">UI/UX Designer</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">John Doe</span>
                        <small className="h6 text-muted">Founder and CEO</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          
        {/* Newsletter */}
          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-success shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                        We're making countertop and backsplash projects easier for you.
                      </h3>
                      <p className="lead text-white mt-3">
                        Sign up for the latest news on promotions, products and events!

                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href="#!"
                        size="lg"
                      >
                        Subscribe to our newletter
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
          {/* End Newsletter */}

          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Work with us</h2>
                  <p className="lead text-white">
                    Now more than ever is it easier to get started with J Lux Design. In only three steps.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-collection text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Fill out form</h5>
                  <p className="text-white mt-3">
                    Fill out this simple form to get started on your next custom stone and tile project. 
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-calendar-grid-58 text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Schedule onboarding call</h5>
                  <p className="text-white mt-3">
                    Once your form is submitted you'll be given the option to schedule an initial client call. This is where will discuss the details of your project.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-diamond text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Project Launch</h5>
                  <p className="text-white mt-3">
                    If we're a good fit for your project, then the next step is to come into our showroom where we'll help you find and select the perfect stone and/or tile for your project.
                  </p>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>

          

          {/* Work with us */}
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to work with us?</h4>
                      <p className="mt-0">
                        Your project is very important to us.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          {/* End Work with us */}
          
          {/* <Download /> */}
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
