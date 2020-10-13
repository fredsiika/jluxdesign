/*!

=========================================================
* J Lux Design System - v1.0.1
=========================================================

* Product Page: https://fredsiika.github.io/jluxdesign.com
* Copyright 2020 Fred Siika (https://www.github.com/fredsiika)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Fred C. Siika

=========================================================
*

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Navbar, Alert } from "reactstrap";

// core components
import NavbarBasic from "components/Navbars/NavbarBasic";
import CardsFooter from "components/Footers/CardsFooter.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections
import HeroSection from "../components/Heros/HeroSection.js";
import Buttons from "./IndexSections/Buttons.js";
import Inputs from "./IndexSections/Inputs.js";
import CustomControls from "./IndexSections/CustomControls.js";
import Menus from "./IndexSections/Menus.js";
import Navbars from "./IndexSections/Navbars.js";
import TabSection from "../components/all/TabSection.js";
import Progress from "./IndexSections/Progress.js";
import Pagination from "./IndexSections/Pagination.js";
import Pills from "./IndexSections/Pills.js";
import Labels from "./IndexSections/Labels.js";
import Alerts from "./IndexSections/Alerts.js";
import Typography from "./IndexSections/Typography.js";
import Modals from "./IndexSections/Modals.js";
import Datepicker from "./IndexSections/Datepicker.js";
import TooltipPopover from "./IndexSections/TooltipPopover.js";
import Carousel from "./IndexSections/Carousel.js";
import Icons from "./IndexSections/Icons.js";
import Login from "./IndexSections/Login.js";
import Download from "./IndexSections/Download.js";
// import HeroSecondary from '../components/Heros/HeroSecondary'
import Card from '../components/Cards/Card'
import '../components/Cards/Card.css'
import SectionGroup from '../components/Sections/Section'

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <NavbarBasic />
        <main ref="main">
        Hero Section
        {/* <HeroSecondary /> */}
        {/* Alert */}

          <section className="section">
          <Container>
            <TabSection />
          </Container>
          <Container className="mt-2">
            <Card
              title="Distribution"
              text="We do distrubution"
              image="../../assets/img/backgrounds/cool-background.png"
            />
            <Services />
          </Container>
          </section>

          <section className="section">
          <div clasName="container">
          <Row>
            <Col className="col-sm">
              <Navbar className="bg-dark text-white">
                <p className="text-white">Navbar section</p>
              </Navbar>
            </Col>
            <Col className="col-sm">
              <Navbar className="bg-secondary text-white">
                <p className="text-white">Navbar section</p>
              </Navbar>
            </Col>
            <Col className="col-sm">
              <Navbar className="bg-warning text-white">
                <p className="text-white">Navbar section</p>
              </Navbar>
            </Col>
            </Row>
          </div>
          </section>
          
          
           <Container>
           <div class="alert alert-darker text-center" role="alert">
          <strong className="text-info">COVID-19 Update! </strong>
          <span className="text-white">We are now offering Virtual Stone Selection in DFW!</span>
        </div>
           </Container>
          {/* <Buttons />
          <Inputs /> */}
          {/* <section className="section">
            <Container>
              <CustomControls />
              <Menus />
            </Container>
          </section> */}

          {/* <Navbars /> */}

          <section className="section section-components">
            <Container>
              {/* <Tabs /> */}
              <Row className="row-grid justify-content-between align-items-center mt-lg">
                {/* <Progress /> */}
                {/* <Pagination /> */}
              </Row>
              <Row className="row-grid justify-content-between">
                {/* <Pills /> */}
                {/* <Labels /> */}
              </Row>
              {/* <Alerts /> */}
              {/* <Typography /> */}
              {/* <Modals /> */}
              {/* <Datepicker /> */}
              {/* <TooltipPopover /> */}
            </Container>
          </section>

          {/* <Carousel /> */}
          {/* <Icons /> */}
          {/* <Login /> */}
          {/* <Download /> */}
        </main>
        {/* <CardsFooter /> */}
        <SimpleFooter />
      </>
    );
  }
}

export default Index;

function Services() {
  return (
    <div class="container">
      <div class="text-center">
        <h3 class="text-muted">Services</h3>
      </div>
    <div class="row">
      <div class="col">
        <h4 class="text-primary">Distributor</h4>
        <p class="lead">We cut out the middleman as distributors</p>
      </div>
      <div class="col">
        <h4 class="text-primary">Fabricator</h4>
        <p class="lead">Elimate additional costs and the liability of working third-party subcontractors. Our fabrication crew.</p>     
          <h4 class="text-primary">Benefit</h4>
          <p class="text-muted">Finding third-party subcontractors qualified to handle your project is a hit or miss.<br />
          <p class="text-muted">Our specialized team of stone fabricators use the highest quality do one thing and one thing only. </p>
          </p>
        </div>
      <div class="col">
        <h4 class="text-primary">Installation</h4>
        <p class="lead">Our in-house team of stone installation specialists will elimate the added cost and liability of working with a separate fabrication team</p>
      </div>
    </div>
  </div>
  );
}