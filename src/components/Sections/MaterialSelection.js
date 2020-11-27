import React from 'react'
import {
  Button,
  Card,
  CardImg,
  Col,
  Container,
  Row
} from 'reactstrap';

const MaterialSelection = () => {
  return (
    <section className="section bg-secondary">
      <Container>
        <Row className="row-grid align-items-center">
          <Col md="6">
            <div className="pl-md-5">
              <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mb-5">
                <i className="ni ni-settings text-darker" />
              </div>
              <h3 className="text-primary">Material Selection</h3>
              <p className="display-4 pb-3">Find the perfect material match for your lifestyle at JLuxDesign.com</p>
              <p className="display-4">We proudly offer an extensive library of over 2,000 colors of stone.</p>
              <Button
                aria-pressed={true}
                className="font-weight-bold mt-5"
                color="darker"
                href="#!"
                onClick={e => e.preventDefault()}
                role="button"
                size="lg"
                block
              >
                Contact us for material availability
              </Button>
            </div>
          </Col>
          <Col md="6">
            <Card className="bg-dark shadow border-0">
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
                <p className="lead text-primary">Being mindful of the planet.</p>
                <p className="lead text-italic text-white">
                  Our Eco-Thinking means high-quality, long-lasting materials that tread lightly on the environment.
                </p>
              </blockquote>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MaterialSelection
