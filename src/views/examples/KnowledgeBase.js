import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbars/NavbarBasic'
import Footer from '../../components/Footers/SimpleFooter'
import { Button, Col, Container, Row } from 'reactstrap'

const KnowledgeBase = () => {
	return (
		<>
			<Navbar />
			<div className="hero-animation bg-gradient-darker mb-2">
				<div className="HeroGroup text-left">
					<p className="lead text-left text-success text-uppercase">
						Knowledge Base
					</p>
					<h1 className="display-1 text-secondary">
						A look <br />
						beneth the surface
					</h1>
					<p className="display-3 text-muted">
						Complete guides, resources and DIY hacks about tile and stone.
						Without going too deep.
					</p>
					<Link to="/quote" className="text-primary display-4">
						Learn more about tile and stone
					</Link>
				</div>
			</div>
			<div className="main">
				<section className="section section-lg mt-lg-200">
					<Container>
						<Row>
							<Col className="hero-animation-1">
								<div className="heading-group">
									<p className="lead text-left text-uppercase text-primary">
										Our Products
									</p>
									<h3 className="display-2 text-gray-dark">
										Sourced from high quality distributors
									</h3>
									<p className="display-4 text-left text-muted">
										We offer a large inventory of high quality stone
										countertops.
									</p>
									<div className="btn-group">
										<Button
											type="button"
											className="hero-animation-1 text-left-sm"
											color="darker">
											Explore More Styles
										</Button>
									</div>
								</div>
							</Col>
							<div className="w-100 py-1 bg-secondary" />
							<Col className="hero-animation-2">
								<div className="">
									<p className="lead text-left text-uppercase text-primary">
										Materials
									</p>
									<h3 className="display-2 text-gray-dark">
										Popular stones for your next project.
									</h3>
									<p className="display-4 text-left text-muted">
										Below are some of the most popular and beautiful natural
										stones available.
										<br />{' '}
									</p>
								</div>
							</Col>
							<div className="w-100 py-1 bg-secondary" />
						</Row>
					</Container>
					<Container>
						<div className="">
							<Row>
								<Col className="hero-animation-3">
									<div className="">
										<p className="lead text-left text-uppercase text-primary">
											Customer Satisfaction
										</p>
										<h3 className="display-2 text-gra-dark">
											Can't find a particular stone?
										</h3>
										<p className="display-4 text-left text-muted">
											If you don’t see the color you want our stone suppliers we
											have over 200 different colors available for you to choose
											from.
										</p>
										<Link to="/contact" className="text-primary display-3">
											Get in touch with us.
										</Link>
									</div>
								</Col>
							</Row>
						</div>
					</Container>
				</section>

				<section className="section section-lg mt-lg-200">
					<span className="h3">
						Fancy display heading{' '}
						<small className="text-muted">With faded secondary text</small>
					</span>
				</section>
			</div>
			<Footer />
		</>
	)
}

export default KnowledgeBase
