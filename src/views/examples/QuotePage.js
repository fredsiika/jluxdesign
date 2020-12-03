import React from 'react'
import { useForm } from 'react-hook-form'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import ReactHookForm from '../../components/Forms/ReactHookForm'
import SimpleFooter from '../../components/Footers/SimpleFooter.js'
import NavbarBasic from '../../components/Navbars/NavbarBasic'
import JumbotronBasic from '../../components/Jumbotrons/JumbotronBasic'
// import JumbotronFluid from '../../components/Jumbotrons/JumbotronFluid'
// const LogoBlack = (<img src={require("../../assets/img/logos/logo-black.png")}></img>)
// const LogoWhite = (<img src={require("../../assets/img/logos/logo-white.png")}></img>)


// import { QuoteFormHeader } from "./components/Forms/QuoteFormHeader";
// import ContactForm from './ContactForm'

import { Step1 } from "../../components/Forms/Step1"
import { Step2 } from "../../components/Forms/Step2";
import { Step3 } from "../../components/Forms/Step3";
import { Step4 } from "../../components/Forms/Step4";
import { Step5 } from "../../components/Forms/Step5";
import { Result } from "../../components/Forms/Result";
import { QuoteFormHeader } from 'components/Forms/QuoteFormHeader';

const LogoBlack = (<img src={require("../../assets/img/logos/logo-black.png")}></img>)

const QuotePage = () => {
  return (
    <>
      <QuoteFormHeader />
      {/* <ReactHookForm /> */}
      <Router>
        <Switch>
          <Route exact path="quote/step1" render={(props) => <Step1 title="Step 1" {...props} />} />
          <Route exact path="quote/step2" render={(props) => <Step2 title="Step 2" {...props} />} />
          <Route exact path="quote/step3" component={Step3} />
          <Route exact path="quote/step4" component={Step4} />
          <Route exact path="quote/step5" component={Step5} />
          <Route exact path="quote/result" component={Result} />
        </Switch>
      </Router>
      <SimpleFooter />
    </>
  )
}

export default QuotePage
