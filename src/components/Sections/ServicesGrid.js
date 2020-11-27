import React from 'react'
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from 'reactstrap';
import BenefitsHeader from '../Features/BenefitsHeader';

const ServicesGrid = (props) => {
  return (
    <section className="section section-lg pt-lg-0 mt--200">
      <Container>
        <Row className="justify-content-center">
        <BenefitsHeader tag="all-in-one solution" title="Cut out the middle-man." subtitle={"We'll handle everything from finding, sourcing, templating/measurements, to fabricate, and install your custom stone countertops."} />
          <Col lg="12">
            <Row className="row-grid">
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-5">
                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                      <i className="ni ni-check-bold text-darker" />
                    </div>
                    <h6 className="text-primary text-uppercase">Distribution</h6>
                    <p className="lead text-strong mt-3">
                      Choosing the right countertop surface is vital.<br /> Having the it in stock is even more critical.
                    </p>
                    <p className="description mt-3">With well over 50,000 slabs of stone in stock, JLuxDesign is ready to handle your project.</p>
                    <Button
                      className="mt-4"
                      color="darker"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      block
                    >
                      Learn more
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-5">
                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                      <i className="ni ni-istanbul text-darker" />
                    </div>
                    <h6 className="text-primary text-uppercase">Fabrication</h6>
                    <p className="lead text-strong">Eliminate wasted time and money from outsourcing.</p>
                    <p className="description mt-3">
                      Our in-house team of professional fabricators guarantee the level of craftsmanship for the perfect stone cut.<br /><br />
                      JLuxDesign processes hundreds of countertops every week with CNC enabled machinery
                    </p>
                    <Button
                      className="mt-4"
                      color="darker"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      block
                    >
                      Learn more
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-5">
                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                      <i className="ni ni-planet text-darker" />
                    </div>
                    <h6 className="text-primary text-uppercase">
                      Installation
                    </h6>
                    <p className="lead text-strong mt-3">Custom installation teams.</p>
                    <p className="description mt-3">
                      From template to installation, we work with homeowners to ensure a hassle-free experience.<br /> Our customer service team is here to create the home of your dreams.
                    </p>
                    <Button
                      className="mt-4"
                      color="darker"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      block
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
  )
}

export default ServicesGrid
