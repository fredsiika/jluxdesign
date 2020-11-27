import React from 'react'
import {
  Col,
  Row
} from 'reactstrap';

const BenefitsHeader = (props) => {
  return (
    <Row className="text-center justify-content-center">
      <Col lg="12">
        <h3 className="text-base text-primary text-uppercase">{props.tag}</h3>
        <p className="display-3 text-darker">{props.title}</p>
        <p className="lead text-muted">{props.subtitle}</p>
      </Col>
    </Row>
  )
}

export default BenefitsHeader
