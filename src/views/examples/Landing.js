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
// import ServiceSectionSimple from "components/Sections/ServiceSectionSimple";
import CTABanner from '../../components/Sections/CTABanner';
import PlanningSection from '../../components/Sections/PlanningSection';
import ServicesGrid from '../../components/Sections/ServicesGrid';
import LogoBrandsGroup from '../../components/Icons/LogoBrands';
import MaterialSelection from '../../components/Sections/MaterialSelection';
import OurTeamSection from '../../components/Sections/OurTeamSection';
import NewsletterSection from '../../components/Sections/NewsletterSection';
import WorkCTAForm from '../../components/Sections/WorkCTAForm';
import BenefitsGrid from '../../components/Features/BenefitsGrid';


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
          {/* <ServiceSectionSimple /> */}
          <ServicesGrid />
          <BenefitsGrid />
          <OverviewSection />
          <LogoBrandsGroup title="Our Brands" text="Great Pricing, Premium Quality Product and Excellent Customer Service!" />
          <OurProcessSection />
          <MaterialSelection />
          <PlanningSection />
          <OurTeamSection />
          <CTABanner />
          <NewsletterSection subtitle="We Make Countertop Projects Easy For You." description="Sign up for the latest news on promotions, products and events!" cta="Subscribe to our newletter" />
          <WorkCTAForm />
          {/* CTA Form */}
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
                          color="darker"
                          size="lg"
                          type="button"
                        >
                          Get Started
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          {/* End CTAForm */}
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
