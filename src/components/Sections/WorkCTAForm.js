import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import SVGSeperator from '../../components/Icons/SVGSeparator'

const WorkCTAForm = (props) => {
	return (
		<section className="section section-lg bg-gradient-default">
			<Container className="pt-lg pb-300">
				<Row className="text-center justify-content-center">
					<Col lg="10">
						<h2 className="display-3 text-white">Work with us</h2>
						<p className="lead text-white">
							Now more than ever is it easier to get started with J Lux Design.
							In only three steps.
						</p>
					</Col>
				</Row>
				<Row className="row-grid mt-5">
					<Col lg="4">
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
							<i className="ni ni-collection text-primary" />
						</div>
						<h5 className="text-white mt-3">Fill out form</h5>
						<p className="text-white mt-3">
							Fill out this simple form to get started on your next custom stone
							and tile project.
						</p>
					</Col>
					<Col lg="4">
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
							<i className="ni ni-calendar-grid-58 text-primary" />
						</div>
						<h5 className="text-white mt-3">Schedule onboarding call</h5>
						<p className="text-white mt-3">
							Once your form is submitted you'll be given the option to schedule
							an initial client call. This is where will discuss the details of
							your project.
						</p>
					</Col>
					<Col lg="4">
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
							<i className="ni ni-diamond text-primary" />
						</div>
						<h5 className="text-white mt-3">Project Launch</h5>
						<p className="text-white mt-3">
							If we're a good fit for your project, then the next step is to
							come into our showroom where we'll help you find and select the
							perfect stone and/or tile for your project.
						</p>
					</Col>
				</Row>
			</Container>
			{/* SVG separator */}
			<SVGSeperator />
		</section>
	)
}

export default WorkCTAForm
