import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './ServiceSectionSimple.css'
import FloatingBtnGroup from '../Buttons/FloatingBtnGroup'
// import TripleArrowAnimation from '../Buttons/TripleArrowAnimation'

const ServiceSectionSimple = () => {
  return (
    <section className="section section-sm">
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