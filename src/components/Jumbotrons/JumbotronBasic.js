import React from 'react'
import { Button, Container, Col, Jumbotron, Row } from 'reactstrap'

const JumbotronBasic = (props) => {
	return (
		<div>
			<Jumbotron className="hero-bg-kitchen-06 gradient-overlay-half-white-v1 bg-img-hero">
				<Container className="mt-5">
					<Row>
						<Col>
							<div className="header">
								{/* <h1 className="text display-1">
                Get a<br /> Countertop<br d-none />{''}quote in less<br />{' '}than a minute.<br />{' '}
              </h1> */}
								<h1 className="text display-1">
									Countertop estimation
									<br /> made simple
								</h1>
								<div className="header-description">
									<p className="lead">
										Get a countertop quote in less than a minute.
										<br /> <span className="text-primary">
											JLuxDesigns'
										</span>{' '}
										Countertop Estimator Form gives our team an approximate
										price for your countertop project.
									</p>

									<hr className="my-2" />
									<small className="text-muted">
										Not all options or materials are represented within this
										form.
										<br /> Quoted price and scope of project may be different
										than the final cost for various reasons.
										<br /> For more information please
										<a href="/contact">
											{' '}
											contact an associate from your nearest JLuxDesign.com
											location.
										</a>
										.
									</small>
									<p className="lead">
										<Button color="darker" href="/quote/step1">
											Get Started
										</Button>
									</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		</div>
	)
}

export default JumbotronBasic