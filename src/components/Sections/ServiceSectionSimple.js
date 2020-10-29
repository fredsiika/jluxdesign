import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './ServiceSectionSimple.css'
import FloatingBtnGroup from '../Buttons/FloatingBtnGroup'
// import TripleArrowAnimation from '../Buttons/TripleArrowAnimation'

const ServiceSectionSimple = () => {
  return (
    <section className="section section-sm">c
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="col-12">
            <div>
              <h2 className="text-default text-center">Launch the <br className="d-none d-sm-inline-block" />perfect home renovation project</h2>
              <p className="lead text-center">We'll help you select, cut and install your custom stone and tile countertop.</p>
            </div>
            <FloatingBtnGroup />
          </Col>
        </Row>
      </Container>
      {/* <TripleArrowAnimation /> */}
    </section>
  )
}

export default ServiceSectionSimple

{/*
<div className="pill-button-group">
              <button
                type="button"
                class="btn btn-sm btn-primary rounded-pill font-weight-medium px-4 py-2 mr-2">
                  Kitchens
              </button>
              <button
                type="button"
                class="btn btn-sm btn-primary rounded-pill font-weight-medium px-4 py-2 mr-2">
                  Bathrooms
              </button>
              <button
                type="button"
                class="btn btn-sm btn-primary rounded-pill font-weight-medium px-4 py-2 mr-2">
                  Bath Surrounds
              </button>
              <button
                type="button"
                class="btn btn-sm btn-primary rounded-pill font-weight-medium px-4 py-2 mr-2">
                  Fireplaces
              </button>
              <button
                type="button"
                class="btn btn-sm btn-primary rounded-pill font-weight-medium px-4 py-2 mr-2">
                  Bar Countertops
              </button>
              <button
                type="button"
                class="btn btn-sm btn-primary rounded-pill font-weight-medium px-4 py-2 mr-2">
                  Much More!
              </button>
            </div>

            */}