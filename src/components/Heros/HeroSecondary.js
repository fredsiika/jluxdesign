import React from 'react'
import styled from 'styled-components'
// import "./HeroSecondary.css";

// reactstrap components
import { Button, Container, Row, Col } from 'reactstrap'
import HomeNavbar from 'components/Navbars/HomeNavbar'

const HeroSecondary = (props) => {
	return (
		<div className="hero-animation position-relative">
			{/* shape Hero */}
			<section className="section section-lg section-shaped pb-250">
				{/* Circles */}
				<div className="shape shape-style-3 shape-default">
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
				</div>

				<div className="points">
					<div class="point point-floating-1"></div>
					<div class="point point-floating-2"></div>
					<div class="point point-floating-3"></div>
					<div class="hero-animation-ltr-3 point point-floating-4"></div>
					<div class="hero-animation-2 point point-floating-5"></div>
					<div class="hero-animation-ltr-2 point point-floating-6"></div>
					<div class="hero-animation-ltr-1 point point-floating-7"></div>
					<div class="hero-animation-ltr point point-floating-8"></div>
					<div class="hero-animation point point-floating-9"></div>
				</div>

				<Container className="py-lg-md d-flex">
					<div className="col px-0">
						<Row>
							<Col lg="6">
								<h1 className="hero-animation display-3 title text-center">
									Launch the perfect
									<br /> home renovation project{' '}
									<span className="desc">
										Commercial and residential stone countertop solutions.
									</span>
								</h1>

								<hr className="my-2" />
								<p className="hero-animation-3 lead text-white text-center">
									We'll help you locate, select and install your custom stone
									contertop and backsplash.
									<br />
									Start designing your dream home.
								</p>
								<div className="hero-animation-ltr btn-wrapper text-center">
									<Button
										className="btn-icon mb-3 mb-sm-0"
										color="success"
										href="/services">
										<span className="btn-inner--icon mr-1">
											<i className="fa fa-phone" />
										</span>
										<span className="btn-inner--text">Call Us</span>
									</Button>

									<Button
										className="btn-style btn-white btn-icon mb-3 mb-sm-0 ml-1"
										color="darker"
										href="/quote">
										<span className="btn-inner--icon mr-1">
											<i className="ni ni-spaceship" />
										</span>
										<span className="btn-inner--text">Get Started</span>
									</Button>
								</div>
							</Col>
						</Row>
					</div>
				</Container>

				{/* SVG separator */}
				<div className="separator separator-bottom separator-skew">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						version="1.1"
						viewBox="0 0 2560 100"
						x="0"
						y="0">
						<polygon className="fill-darker" points="2560 0 2560 100 0 100" />
					</svg>
				</div>
			</section>
			{/* 1st Hero Variation */}
		</div>
	)
}

export default HeroSecondary
