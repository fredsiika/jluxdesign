import React from 'react'
import { useForm } from 'react-hook-form'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Step1 } from "./Step1"
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Result } from "./Result";
// import { Header } from "./components/Header";
import { Container, Col, Row } from 'reactstrap'
import ContactForm from './ContactForm'

const LogoBlack = (<img src={require("../../assets/img/logos/logo-black.png")}></img>)

const ReactHookForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
    <section className="section section-lg pt-lg-10 mt-200">

      <div className="brand ">
        <img src={require("../../assets/img/logos/logo-black.png")}></img>
      </div>
      <Container className="mt-5">
        <Row>
          <Col>
            <div className="header">
            <h1 className="text">Countertop Quotation Estimator Form</h1>
            <div className="header-description">
              <p className="lead text-muted">
                The Instant Estimate Form provides an approximate price for your countertop project, which may be different than the final cost for various reasons.<br />
                Not all options or materials are represented within this tool.<br /><br />
                For more information please <a href="/about">contact an associate from your nearest JLuxDesign.com location.</a>.
              </p>
            </div>
          </div>
          </Col>
        </Row>
      </Container>

      <Router>
        <Switch>
          <Route exact path="/quote/" component={Step1} />
          <Route path="/quote/step2" component={Step2} />
          <Route path="/quote/step3" component={Step3} />
          <Route path="/quote/result" component={Result} />
        </Switch>
      </Router>
    </section>
    </>
  )
}

export default ReactHookForm
