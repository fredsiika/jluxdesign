import React from 'react'
import { Badge, Button, Container, Col, Row } from 'reactstrap'

class OverviewSection extends React.Component {
	render() {
		return (
			<>
				<section className="section section-lg">
					<Container>
						<Row className="row-grid align-items-center">
							{/* Floating image */}
							<Col className="order-md-2" md="6">
								<img
									alt="..."
									className="img-fluid floating"
									src={require('assets/img/theme/promo-1.png')}
								/>
							</Col>

							{/* Web copy */}
							<Col className="order-md-1" md="6">
								<div className="pr-md-5">
									<div className="icon icon-lg icon-shape icon-shape-danger shadow rounded-circle mb-5">
										<i className="ni ni-diamond" />
									</div>
									<h3>From concept to completion</h3>
									<p>
										Professional Countertop Stone Installation, Distribution and
										Fabrication Services in the Dallas/Fort-Worth Area - all in
										one place.
									</p>
									<ul className="list-unstyled mt-5">
										<li className="py-2">
											<div className="d-flex align-items-center">
												<div>
													<Badge className="badge-circle mr-3" color="default">
														<i className="ni ni-world" />
													</Badge>
												</div>
												<div>
													<h6 className="mb-0">
														Products sourced from around the world
													</h6>
												</div>
											</div>
										</li>
										<li className="py-2">
											<div className="d-flex align-items-center">
												<div>
													<Badge className="badge-circle mr-3" color="default">
														<i className="ni ni-shop" />
													</Badge>
												</div>
												<div>
													<h6 className="mb-0">
														Design Consultants, fabricators, and installers are
														100% in-house.
													</h6>
												</div>
											</div>
										</li>
										<li className="py-2">
											<div className="d-flex align-items-center">
												<div>
													<Badge className="badge-circle mr-3" color="default">
														<i className="ni ni-books" />
													</Badge>
												</div>
												<div>
													<h6 className="mb-0">
														Amazing knowledge base of stone and tile resources
													</h6>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div>
									<Button
										outline
										color="default"
										size="lg"
										aria-label="Get Quote"
										block>
										Get Quote
									</Button>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</>
		)
	}
}

export default OverviewSection
