import React from 'react'
import { Button, Container, Col, Jumbotron, Row } from 'reactstrap'

const Complete = (props) => {
	return (
		<div>
			<Jumbotron className="hero-bg-kitchen-05 gradient-overlay-half-white-v1 bg-img-hero">
				<Container className="mt-5">
					<Row>
						<Col>
							<div className="header">
								{/* <h1 className="text display-1">
                Get a<br /> Countertop<br d-none />{''}quote in less<br />{' '}than a minute.<br />{' '}
              </h1> */}
								<h1 className="text display-1">
									What's next
									<br /> since completing
									<br /> your
									<span className="text-underline text-primary d-sm-inline">
										{' '}
										form.
									</span>
								</h1>
								<div className="header-description">
									<p className="display-3">
										Do you need a hole cut for a sink?
										<br className="d-sm-none" />
										What type? Undermounted, drop in, Farm, Vessel hole. Do you
										need any other holes? Like a cooktop, slide in range, ect…
									</p>

									<hr className="my-2" />
									<p className="lead">
										<span className="text-primary display-4">Relax</span>
										<br /> A member of our staff will get in contact with you
										soon.
									</p>
									<p className="lead">
										<Button color="darker" href="/">
											Go back home
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

export default Complete
