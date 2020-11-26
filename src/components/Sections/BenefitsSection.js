import React from 'react'
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from 'reactstrap';

const BenefitsSection = (props) => {
  return (
    <section className="section section-lg pt-lg-0 mt--200">
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <div className="section-header text-center mb-5">
              <p className="display-3">Benefits</p>
            </div>
            <Row className="row-grid">
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-5">
                    <div className="icon icon-shape icon-shape-default rounded-circle mb-4">
                      <i className="ni ni-check-bold" />
                    </div>
                    <h6 className="text-default text-uppercase">
                      First-class Stone distribution.
                    </h6>
                    <p className="description mt-3">
                      Choosing the right countertop surface is vital to the project.<br />
                      Having the it in stock is even more critical.<br />
                      With well over 50,000 slabs of stone in stock, JLuxDesign is ready to handle your project.
                    </p>
                    <div>
                      <p className="lead">Customer Segment</p>
                      <Badge color="default" pill className="mr-1">
                        Homeowners
                      </Badge>
                      <Badge color="default" pill className="mr-1">
                        Designers
                      </Badge>
                      <Badge color="default" pill className="mr-1">
                        Builders
                      </Badge>
                      <Badge color="default" pill className="mr-1">
                        Architects
                      </Badge>
                    </div>
                    <Button
                      className="mt-4"
                      color="bg-default bg-info"
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
                    <div className="icon icon-shape icon-shape-default rounded-circle mb-4">
                      <i className="ni ni-istanbul" />
                    </div>
                    <h6 className="text-default text-uppercase">
                      State-of-the-art Stone Fabrication
                    </h6>
                    <p className="description mt-3">
                      Eliminate wasted time and money of outsourcing stone fabrication.
                      Our in-house team of professional fabricators guarantee the level of craftsmanship for the perfect stone cut.
                      JLuxDesign processes hundreds of countertops every week with CNC enabled machinery
                    </p>
                    <div>
                      <Badge color="default" pill className="mr-1">
                        business
                      </Badge>
                      <Badge color="default" pill className="mr-1">
                        vision
                      </Badge>
                      <Badge color="default" pill className="mr-1">
                        success
                      </Badge>
                    </div>
                    <Button
                      className="mt-4"
                      color="bg-default bg-info"
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
                    <div className="icon icon-shape icon-shape-default rounded-circle mb-4">
                      <i className="ni ni-planet" />
                    </div>
                    <h6 className="text-default text-uppercase">
                      Stone Countertop Installation
                    </h6>
                    <p className="description mt-3">
                      Custom installation teams work with homeowners to ensure a hassle-free experience.<br />
                      From template to installation, our customer server team is here to create the home of your dreams.
                    </p>
                    <div>
                      <Badge color="default" pill className="mr-1">
                        Homeowners
                      </Badge>
                      <Badge color="default" pill className="mr-1">
                        House flippers
                      </Badge>
                      <Badge color="default" pill className="mr-1">
                        Custom Home Developers
                      </Badge>
                    </div>
                    <Button
                      className="mt-4"
                      color="bg-default bg-info"
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
  )
}

export default BenefitsSection
