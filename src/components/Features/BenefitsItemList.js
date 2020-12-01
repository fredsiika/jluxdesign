import React from 'react'
import { Col, Row } from 'reactstrap'

const BenefitsItemList = (props) => {
	return (
		<Row className="row-grid mt-5">
			<Col lg="4">
				<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
					<img
						className="bg-transparent"
						src={require('../../assets/svg/icons/customers.svg')}
						alt="..."
					/>
				</div>
				<div className="mb-5">
					<h5 className="text-darker mt-3">Customer Comes First</h5>
					<p className="text-darker mt-3">
						We take pride in carefully planning and delivering on every part of
						the process, all while keeping your needs in mind.
					</p>
				</div>
			</Col>

			<Col lg="4">
				<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
					<img
						className="bg-transparent"
						src={require('../../assets/svg/icons/clock.svg')}
						alt="..."
					/>
				</div>
				<div className="mb-5">
					<h5 className="text-darker mt-3">Fast Turnaround</h5>
					<p className="text-darker mt-3">
						Due to our on-site, fully-stocked fabrication facilities, we can
						have your new custom countertop ready in just a few days.
					</p>
				</div>
			</Col>

			<Col lg="4">
				<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
					<img
						className="bg-transparent"
						src={require('../../assets/svg/icons/precision.svg')}
						alt="..."
					/>
				</div>
				<div className="mb-5">
					<h5 className="text-darker mt-3">Superior Craftsmanship</h5>
					<p className="text-darker mt-3">
						Our team of professionals have decades of experience in custom
						countertop fabrication, installation and care.
					</p>
				</div>
			</Col>

			<Col lg="4">
				<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
					<img
						className="bg-transparent"
						src={require('../../assets/svg/icons/stone-slabs.svg')}
						alt="..."
					/>
				</div>
				<div className="mb-5">
					<h5 className="text-darker mt-3">Largest Stone Selection</h5>
					<p className="text-darker mt-3">
						JLuxDesign.com features over 2,000 stone colors. This is the largest
						selection of premium countertop materials in the country.
					</p>
				</div>
			</Col>

			<Col lg="4">
				<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
					<img
						className="bg-transparent"
						src={require('../../assets/svg/icons/cost.svg')}
						alt="..."
					/>
				</div>
				<div className="mb-5">
					<h5 className="text-darker mt-3">No Hidden Costs</h5>
					<p className="text-darker mt-3">
						With no hidden costs involved, you can rest assured that the price
						you’re quoted is the price you’ll pay.
					</p>
				</div>
			</Col>

			<Col lg="4">
				<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
					<img
						className="bg-transparent"
						src={require('../../assets/svg/icons/thumbs-up.svg')}
						alt="..."
					/>
				</div>
				<div className="mb-5">
					<h5 className="text-darker mt-3">No Pressure Sales</h5>
					<p className="text-darker mt-3">
						We want you to be confident in your final purchasing decision, so
						you will never be rushed or pressured by our team.
					</p>
				</div>
			</Col>

			<Col lg="4">
				<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
					<img
						className="bg-transparent"
						src={require('../../assets/svg/icons/latest-tech.svg')}
						alt="..."
					/>
				</div>
				<div className="mb-5">
					<h5 className="text-darker mt-3">Latest Technology</h5>
					<p className="text-darker mt-3">
						All countertops are created using the latest CNC and CAD technology
						to ensure precise cuts every time.
					</p>
				</div>
			</Col>

			<Col lg="4">
				<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
					<img
						className="bg-transparent"
						src={require('../../assets/svg/icons/savings.svg')}
						alt="..."
					/>
				</div>
				<div className="mb-5">
					<h5 className="text-darker mt-3">Big Savings</h5>
					<p className="text-darker mt-3">
						Keeping your budget in mind, our team will make sure you get the
						best deal on your new countertop.
					</p>
				</div>
			</Col>

			<Col lg="4">
				<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
					<img
						className="bg-transparent"
						src={require('../../assets/svg/icons/trust.svg')}
						alt="..."
					/>
				</div>
				<div className="mb-5">
					<h5 className="text-darker mt-3">Trusted Sources</h5>
					<p className="text-darker mt-3">
						Our showrooms carry the finest quality materials from trusted brands
						worldwide.
					</p>
				</div>
			</Col>
		</Row>
	)
}

export default BenefitsItemList
