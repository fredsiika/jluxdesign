import React from 'react'
import { Card, CardBody, Container, Row, Col } from 'reactstrap'
import SVGSeparator from '../Icons/SVGSeparator'

const PlanningSection = (props) => {
	return (
		<>
			<section className="section pb-250 bg-gradient-dark">
				<Container>
					<Row className="row-grid align-items-center">
						<Col className="order-lg-2 ml-lg-auto" md="6">
							<div className="position-relative pl-md-5">
								<img
									alt="..."
									className="img-center img-fluid"
									src={require('assets/img/ill/ill-2.svg')}
								/>
							</div>
						</Col>
						<Col className="order-lg-1" lg="6">
							<div className="d-flex px-3">
								<div>
									<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
										<i className="ni ni-building text-primary" />
									</div>
								</div>
								<div className="pl-4">
									<h4 className="display-3 text-white">Planning is key</h4>
									<p className="lead text-primary">
										Service and skill to match.
									</p>
									<p className="text-white">
										At J Lux Design we plan just about every minute detail to
										ensure smooth completion of every project.
									</p>
								</div>
							</div>
							<Card className="shadow shadow-lg--hover mt-5">
								<CardBody>
									<div className="d-flex px-3">
										<div>
											<div className="icon icon-shape bg-gradient-success rounded-circle text-default">
												<i className="ni ni-satisfied" />
											</div>
										</div>
										<div className="pl-4">
											<h5 className="title text-success">Bespoke service</h5>
											<p>
												When it comes to creating colors, patterns and textures,
												our level of experience and expertise is unique. Share
												your inspiration. If you can dream it, we can probably
												do it—from stone to glass, Victorian to Art Deco, Arts
												and Crafts to contemporary.
											</p>
											<a
												className="text-success"
												href="#pablo"
												onClick={(e) => e.preventDefault()}>
												Learn more
											</a>
										</div>
									</div>
								</CardBody>
							</Card>

							<Card className="shadow shadow-lg--hover mt-5">
								<CardBody>
									<div className="d-flex px-3">
										<div>
											<div className="icon icon-shape bg-gradient-danger rounded-circle text-default">
												<i className="ni ni-active-40" />
											</div>
										</div>
										<div className="pl-4">
											<h5 className="title text-danger">Custom Capabilities</h5>
											<p>
												We welcome custom orders as one more opportunity to help
												you find just the right tile.
											</p>
											<a
												className="text-danger"
												href="#pablo"
												onClick={(e) => e.preventDefault()}>
												See Options
											</a>
										</div>
									</div>
								</CardBody>
							</Card>

							<Card className="shadow shadow-lg--hover mt-5">
								<CardBody>
									<div className="d-flex px-3">
										<div>
											<div className="icon icon-shape bg-gradient-info rounded-circle text-default">
												<i className="ni ni-active-40" />
											</div>
										</div>
										<div className="pl-4">
											<h5 className="title text-info">
												Custom colors, sizes, designs
											</h5>
											<p>
												We're here to help you find just the right tile—whether
												it already exists, or not. We offer custom color
												matching, custom sizes and custom designs. (This doesn’t
												apply to all collections, so look for the Custom
												callout.) In addition, many of our artists offer field
												sizes, colors and designs not shown here on the website.
											</p>
											<a
												className="text-info"
												href="#pablo"
												onClick={(e) => e.preventDefault()}>
												See Options
											</a>
										</div>
									</div>
								</CardBody>
							</Card>

							<Card className="shadow shadow-lg--hover mt-5">
								<CardBody>
									<div className="d-flex px-3">
										<div>
											<div className="icon icon-shape bg-gradient-primary rounded-circle text-default">
												<i className="ni ni-settings" />
											</div>
											<div className="pl-4">
												<h5 className="title text-primary">Matching samples</h5>
												<p>
													Put us to the test. Bring in a sample of the color you
													wish to match. In 2-3 weeks, a sample will be sent
													from Ann Sacks Collection manufacturing to the
													showroom for your inspection.
												</p>
												<a
													className="text-primary"
													href="#pablo"
													onClick={(e) => e.preventDefault()}>
													See Options
												</a>
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
				{/* SVG separator */}
				<SVGSeparator />
			</section>
		</>
	)
}

export default PlanningSection
