/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from 'react'
// reactstrap components
import {
	Button,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from 'reactstrap'

class SimpleFooter extends React.Component {
	render() {
		return (
			<>
				<footer className=" footer">
					<Container>
						<Row className=" row-grid align-items-center mb-5">
							<Col lg="6">
								<h3 className=" text-primary font-weight-light mb-2">
									Thank you for supporting us!
								</h3>
								<h4 className=" mb-0 font-weight-light">
									Let's get in touch on any of these platforms.
								</h4>
							</Col>
							<Col className="text-lg-center btn-wrapper" lg="6">
								<Button
									className="btn-icon-only rounded-circle"
									color="twitter"
									href="#!"
									id="tooltip475038074"
									target="_blank">
									<span className="btn-inner--icon">
										<i className="fa fa-twitter" />
									</span>
								</Button>
								<UncontrolledTooltip delay={0} target="tooltip475038074">
									Follow us
								</UncontrolledTooltip>
								<Button
									className="btn-icon-only rounded-circle ml-1"
									color="facebook"
									href="#!"
									id="tooltip837440414"
									target="_blank">
									<span className="btn-inner--icon">
										<i className="fa fa-facebook-square" />
									</span>
								</Button>
								<UncontrolledTooltip delay={0} target="tooltip837440414">
									Like us
								</UncontrolledTooltip>
								<Button
									className="btn-icon-only rounded-circle ml-1"
									color="success"
									href="#!"
									id="tooltip829810202"
									target="_blank">
									<span className="btn-inner--icon">
										<i className="fa fa-houzz" />
									</span>
								</Button>
								<UncontrolledTooltip delay={0} target="tooltip829810202">
									Follow us
								</UncontrolledTooltip>
								<Button
									className="btn-icon-only rounded-circle ml-1"
									color="instagram"
									href="#0"
									id="tooltip495507257"
									target="_blank">
									<span className="btn-inner--icon">
										<i className="fa fa-instagram" />
									</span>
								</Button>
								<UncontrolledTooltip delay={0} target="tooltip495507257">
									Follow us on Instagram
								</UncontrolledTooltip>
							</Col>
						</Row>
						<hr />
						<Row className="align-items-center justify-content-md-between">
							<Col md="6">
								<div className=" copyright">
									Copyright© {new Date().getFullYear()}{' '}
									<a href="https://github.com/fredsiika" target="_blank">
										JLuxDesign, LLC.
									</a>
									.
								</div>
							</Col>
							<Col md="6">
								<Nav className="nav-footer justify-content-end">
									<NavItem>
										<NavLink href="#!" target="_blank">
											Privacy
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="#!" target="_blank">
											Terms
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											href="/contact"
											target="_self">
											Contact
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="/about" target="_self">
											About Us
										</NavLink>
									</NavItem>
								</Nav>
							</Col>
						</Row>
					</Container>
				</footer>
			</>
		)
	}
}

export default SimpleFooter
