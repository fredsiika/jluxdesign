import React from 'react'
import { Button, Card, Col, Container, Row } from 'reactstrap'

const NewsletterSection = (props) => {
	return (
		<section className="section section-lg pt-0">
			<Container>
				<h3 className="display-3 text-center text-default">Newsletter</h3>
				<p className="lead text-muted text-center">{props.subtitle}</p>
				<Card className="bg-gradient-darker shadow-lg border-6">
					<div className="p-5">
						<Row className="align-items-center">
							<Col lg="8">
								<h3 className="text-white text-center pb-5">
									{props.description}
								</h3>
							</Col>
							<Col className="ml-lg-auto" lg="3">
								<Button
									block
									className="btn-white"
									outline
									color="primary"
									href="https://jluxdesign.substack.com/embed"
									size="lg">
									{props.cta}
								</Button>
							</Col>
						</Row>
					</div>
				</Card>
			</Container>
		</section>
	)
}

export default NewsletterSection
