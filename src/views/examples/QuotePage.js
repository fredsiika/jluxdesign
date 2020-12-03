import React from 'react'
import { useForm } from 'react-hook-form'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactHookForm from '../../components/Forms/ReactHookForm'
import SimpleFooter from '../../components/Footers/SimpleFooter.js'
import NavbarBasic from '../../components/Navbars/NavbarBasic'
import JumbotronBasic from '../../components/Jumbotrons/JumbotronBasic'
// import JumbotronFluid from '../../components/Jumbotrons/JumbotronFluid'
// const LogoBlack = (<img src={require("../../assets/img/logos/logo-black.png")}></img>)
// const LogoWhite = (<img src={require("../../assets/img/logos/logo-white.png")}></img>)

// import { QuoteFormHeader } from "./components/Forms/QuoteFormHeader";
// import ContactForm from './ContactForm'

import { Step1 } from '../../components/Forms/Step1'
import { Step2 } from '../../components/Forms/Step2'
import { Step3 } from '../../components/Forms/Step3'
import { Step4 } from '../../components/Forms/Step4'
import { Step5 } from '../../components/Forms/Step5'
import { Result } from '../../components/Forms/Result'
import { QuoteFormHeader } from 'components/Forms/QuoteFormHeader'

const LogoBlack = (
	<img src={require('../../assets/img/logos/logo-black.png')}></img>
)

const QuotePage = () => {
	return (
		<>
			<QuoteFormHeader />
			<Router>
				<Switch>
					<Route
						exact
						path="quote/step1"
						render={(props) => (
							<Step1 title="Step 1 - Contact Info" {...props} />
						)}
					/>
					<Route
						exact
						path="quote/step2"
						render={(props) => (
							<Step2 title="Step 2 - Project Type" {...props} />
						)}
					/>
					<Route
						exact
						path="quote/step3"
						render={(props) => (
							<Step3 title="Step 3 - Upload Pictures " {...props} />
						)}
					/>
					<Route
						exact
						path="quote/step4"
						render={(props) => (
							<Step4 title="Step 4 - Additional details " {...props} />
						)}
					/>
					<Route
						exact
						path="quote/step5"
						render={(props) => <Step5 title="Step 5 - " {...props} />}
					/>
					<Route
						exact
						path="quote/result"
						render={(props) => <Result title="Results " {...props} />}
					/>
				</Switch>
			</Router>
		</>
	)
}

export default QuotePage
