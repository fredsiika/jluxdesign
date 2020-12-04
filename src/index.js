import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { DataProvider } from './DataContext'

import './custom.scss'
import 'assets/vendor/nucleo/css/nucleo.css'
import 'assets/vendor/font-awesome/css/font-awesome.min.css'
import 'assets/scss/argon-design-system-react.scss?v1.1.0'
import './views/app.css'
import 'semantic-ui-css/semantic.min.css'

// import Index from "views/Index.js";
import Landing from 'views/examples/Landing.js'
import Login from 'views/examples/Login.js'
import Profile from 'views/examples/Profile.js'
import Register from 'views/examples/Register.js'
import AboutPage from 'views/examples/AboutPage.js'
import Contact from 'views/examples/Contact.js'
import KnowledgeBase from 'views/examples/KnowledgeBase.js'
import ServicesPage from './views/examples/ServicesPage.js'
import Products from './views/examples/Products.js'
import NotFound from './views/examples/404.js'
import QuotePage from './views/examples/QuotePage'
import Step1 from './components/Forms/Step1'
import Step2 from './components/Forms/Step2'
import Step3 from './components/Forms/Step3'
import Result from './components/Forms/Result'
import Complete from './components/Forms/Complete'

ReactDOM.render(
	<>
		<DataProvider>
			<BrowserRouter>
				<Switch>
					<Route
						path="/landing-page"
						exact
						render={(props) => <Landing {...props} />}
					/>
					<Route
						path="/landing"
						exact
						render={(props) => <Landing {...props} />}
					/>
					<Route path="/" exact render={(props) => <Landing {...props} />} />
					<Route
						path="/home"
						exact
						render={(props) => <Landing {...props} />}
					/>
					<Route
						path="/about"
						exact
						render={(props) => <AboutPage title="About Us" {...props} />}
					/>
					<Route
						path="/contact"
						exact
						render={(props) => <Contact {...props} />}
					/>
					<Route
						path="/knowledge-base"
						exact
						render={(props) => <KnowledgeBase {...props} />}
					/>
					<Route
						path="/services"
						exact
						render={(props) => <ServicesPage title="Our Services" {...props} />}
					/>
					<Route
						path="/products"
						exact
						render={(props) => <Products {...props} />}
					/>
					<Route path="/login" exact render={(props) => <Login {...props} />} />
					<Route
						path="/profile-page"
						exact
						render={(props) => <Profile {...props} />}
					/>
					<Route
						path="/register"
						exact
						render={(props) => <Register {...props} />}
					/>
					<Route
						path="/quote"
						exact
						render={(props) => <QuotePage {...props} />}
					/>

					<Route
						path="/quote-form"
						exact
						render={(props) => <QuotePage {...props} />}
					/>
					<Route path="/quote/step-1" exact component={Step1} />
					<Route path="/quote/step1" exact component={Step1} />

					<Route path="/quote/step-2" exact component={Step2} />
					<Route path="/quote/step2" exact component={Step2} />

					<Route path="/quote/step-3" exact component={Step3} />
					<Route path="/quote/step3" exact component={Step3} />

					<Route path="/quote/result" exact component={Result} />
					<Route
						path="/quote/complete"
						exact
						render={(props) => <Complete />}
					/>
					<Route
						path="/404"
						exact
						render={(props) => <NotFound {...props} />}
					/>
					<Redirect to="/404" />
				</Switch>
			</BrowserRouter>
		</DataProvider>
	</>,
	document.getElementById('root')
)
