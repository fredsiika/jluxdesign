import React from 'react'
import SVGSeparatorTwo from '../Icons/SVGSeparatorTwo'
import { Container, Col, Row } from 'reactstrap'

const CTABanner = () => {
	return (
		<section className="section section-lg section-shaped pb-250">
			{/* Background Bubbles */}
			<div className="shape shape-style-1 shape-default">
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
			{/* End Background Bubbles */}

			<Container className="py-lg-md d-flex">
				<div className="col px-0">
					<Row>
						<Col lg="12">
							<h3 className="display-3 text-white text-center">
								Start designing your new home{' '}
								<span>
									Distribution, fabrication and Installation Services in DFW
									Area
								</span>
							</h3>
						</Col>
					</Row>
				</div>
			</Container>
			<SVGSeparatorTwo />
		</section>
	)
}

export default CTABanner
