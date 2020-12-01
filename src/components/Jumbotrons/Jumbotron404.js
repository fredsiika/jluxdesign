import React from 'react'
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap'

const Jumbotron404 = () => {
	return (
		<Jumbotron className="hero-bg-404 gradient-overlay-half-dark-v1-1 bg-img-hero-center">
			<Container>
				<Row>
					<Col>
						<h1 className="text-primary text-left display-1">404</h1>
						<p className="text-secondary display-2">
							Oops,
							<br /> looks like you've hit a page that doesn't exist.
							<Button
								tag="a"
								color="darker"
								size="large"
								href="/"
								target="_self">
								Go back to the Home Page
							</Button>
						</p>
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	)
}

export default Jumbotron404
