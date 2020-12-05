import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { DataProvider } from 'DataContext'
import NavbarBasic from 'components/Navbars/NavbarBasic'
import SimpleFooter from 'components/Footers/SimpleFooter'

import { Step1 } from 'components/Forms/Step1'
import { Step2 } from 'components/Forms/Step2'
import { Step3 } from 'components/Forms/Step3'
import { Result } from 'components/Forms/Result'
// import { QuoteFormHeader } from 'components/Forms/QuoteFormHeader'
// import { NavbarBrand } from 'reactstrap';
import LayoutForm from 'components/Forms/LayoutForm'
import JumbotronBasic from 'components/Jumbotrons/JumbotronBasic'

const QuotePage = () => {
	return (
		<>
			<NavbarBasic />
			<JumbotronBasic />
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
						path="quote/result"
						render={(props) => <Result title="Results " {...props} />}
					/>
				</Switch>
			</Router>
			<SimpleFooter />
		</>
	)
}

export default QuotePage
