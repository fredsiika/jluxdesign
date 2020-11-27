import React from "react";
// import { Link } from 'react-router-dom'
// nodejs library that concatenates classes
import classnames from "classnames";
import {
  Button,
  Card,
  CardBody,
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
import NavbarBasic from '../../components/Navbars/NavbarBasic';
import SimpleFooter from '../../components/Footers/SimpleFooter';
import OverviewSection from '../../components/Containers/OverviewSection'
import OurProcessSection from '../../components/Sections/OurProcessSection'
import LandingHero from "components/Heros/LandingHero";
import ServiceSectionSimple from "components/Sections/ServiceSectionSimple";
import CTABanner from '../../components/Sections/CTABanner';
import SVGSeperator from '../../components/Icons/SVGSeparator';
import PlanningSection from '../../components/Sections/PlanningSection';
import BenefitsSection from '../../components/Sections/BenefitsSection';
import LogoBrandsGroup from '../../components/Icons/LogoBrands';
import MaterialSelection from '../../components/Sections/MaterialSelection';
import OurTeamSection from '../../components/Sections/OurTeamSection';
import NewsletterSection from '../../components/Sections/NewsletterSection';

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
        <LandingHero />
        <main ref="main">
          <ServiceSectionSimple />
          <hr />
          <OverviewSection />
          <LogoBrandsGroup title="Our Brands" text="Great Pricing, Premium Quality Product and Excellent Customer Service!" />
          <CTABanner />
          <OurProcessSection />
          <BenefitsSection />
          <MaterialSelection />
          <PlanningSection />
          <OurTeamSection />
          <NewsletterSection
            subtitle="We Make Countertop Projects Easy For You."
            description="Sign up for the latest news on promotions, products and events!"
            cta="Subscribe to our newletter"
          />

          {/* Work With Us Section */}
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
            <SVGSeperator />
          </section>

          {/* Contact Form - Work With Us Section */}
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
          {/* End Contact Form */}
          {/* End Work With Us Section */}
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
