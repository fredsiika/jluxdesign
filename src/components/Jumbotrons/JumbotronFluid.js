import React from 'react'
import { Container, Col, Jumbotron, Row } from 'reactstrap';

const JumbotronFluid = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <Row>
            <Col>

            </Col>
          </Row>
          <h1 className="display-3" defaultValue="Fluid Jumbotron title">Countertop Quotation Estimator Form</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default JumbotronFluid
