import React from 'react'
import NavbarBasic from '../../components/Navbars/NavbarBasic'
import SimpleFooter from '../../components/Footers/SimpleFooter'
import HeroSecondary from 'components/Heros/HeroSecondary'
import { Container, Col, Row } from 'reactstrap'
import 'components/Heros/HeroSection.css'
import ContactFormSimple from 'components/Forms/ContactForm/ContactFormSimple'

const Contact = () => (
	<>
		<NavbarBasic />
		<HeroSecondary />
		<div className="main">
			<ContactFormSimple />
			{/* <div className="position-relative mt-6 py-9">
				<section className="section section-header">
					<div className="points">
						<div class="point point-floating-1"></div>
						<div class="point point-floating-2"></div>
						<div class="point point-floating-3"></div>
						<div class="point point-floating-4"></div>
						<div class="point point-floating-5"></div>
						<div class="point point-floating-6"></div>
						<div class="point point-floating-7"></div>
						<div class="point point-floating-8"></div>
						<div class="point point-floating-9"></div>
					</div>
					<Container>
						<Row>
							<Col className="col-md-6 text-left col-z-index">
								<h2 id="#solutions" className="display-3 title">
									Commercial and residential stone countertop solutions.
								</h2>
								<h3 className="desc">
									Learning resources, project management kits, and tools to
									kickstart your next home renovation project.
								</h3>
								<p className="display-4 text-primary">
									Homeowners, designers, builders, and contractors
								</p>
							</Col>
							<Col md="6">
								<div className="illustration mb-5">
									<p>Illustration</p>
									<img
										src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/illustration.jpg"
										alt="..."
										className="illustration"></img>
								</div>
							</Col>
						</Row>
					</Container>
					<div className="space-110"></div>
					<div className="card card-plain"></div>
				</section>
			</div> */}
		</div>
		<SimpleFooter />
	</>
)

export default Contact
