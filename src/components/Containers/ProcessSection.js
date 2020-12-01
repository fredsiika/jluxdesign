import React from 'react'
import classnames from 'classnames'
// reactstrap components
import {
	Card,
	CardBody,
	NavItem,
	NavLink,
	Nav,
	TabContent,
	TabPane,
	Container,
	Row,
	Col,
} from 'reactstrap'

class ProcessSection extends React.Component {
	state = {
		tabs: 1,
	}

	toggleNavs = (e, state, index) => {
		e.preventDefault()
		this.setState({
			[state]: index,
		})
	}

	render() {
		return (
			<>
				<section className="section section-sm">
					{/* Section Heading */}
					<Container className="py-lg-md d-flex">
						<div className="col px-0">
							<Row>
								<Col lg="12 text-center">
									<h3 className="text-muted">Our Process</h3>
									<p className="display-2">How it works</p>
								</Col>
							</Row>
						</div>
					</Container>
					{/* End Section Heading */}

					{/* Tab Component */}
					<Container className="py-md-sm d-flex">
						<div className="nav-wrapper col px-0">
							{/* Nav Tabs */}
							<Nav
								className="nav-fill flex-column flex--row"
								id="tabs-icons-text"
								pills
								role="tablist">
								{/* Step 1 */}
								<NavItem>
									<NavLink
										aria-selected={this.state.tabs === 1}
										className={classnames('mb-sm-3 mb-md-0', {
											active: this.state.tabs === 1,
										})}
										onClick={(e) => this.toggleNavs(e, 'tabs', 1)}
										href="#pablo"
										role="tab">
										<i className="ni ni-cloud-upload-96 mr-2" />
										Step 1.
									</NavLink>
								</NavItem>
								{/* End Step 1 */}

								{/* Step 2 */}
								<NavItem>
									<NavLink
										aria-selected={this.state.tabs === 2}
										className={classnames('mb-sm-3 mb-md-0', {
											active: this.state.tabs === 2,
										})}
										onClick={(e) => this.toggleNavs(e, 'tabs', 2)}
										href="#pablo"
										role="tab">
										<i className="ni ni-bell-55 mr-2" />
										Step 2.
									</NavLink>
								</NavItem>
								{/* End Step 2 */}

								{/* Step 3 */}
								<NavItem>
									<NavLink
										aria-selected={this.state.tabs === 3}
										className={classnames('mb-sm-3 mb-md-0', {
											active: this.state.tabs === 3,
										})}
										onClick={(e) => this.toggleNavs(e, 'tabs', 3)}
										href="#pablo"
										role="tab">
										<i className="ni ni-calendar-grid-58 mr-2" />
										Step 3
									</NavLink>
								</NavItem>
								{/* End Step 3 */}
							</Nav>
							{/* End Nav Tabs */}
						</div>
					</Container>

					<Container className="py-lg-md-flex">
						<div className="row">
							{/* Card Paragraph */}
							<Card className="shadow col-12">
								<CardBody className="Card">
									<TabContent activeTab={'tabs' + this.state.tabs}>
										<TabPane tabId="tabs1">
											<p className="lead description">
												Raw denim you probably haven't heard of them jean shorts
												Austin. Nesciunt tofu stumptown aliqua, retro synth
												master cleanse. Mustache cliche tempor, williamsburg
												carles vegan helvetica. Reprehenderit butcher retro
												keffiyeh dreamcatcher synth.
											</p>
											<p className="description">
												Raw denim you probably haven't heard of them jean shorts
												Austin. Nesciunt tofu stumptown aliqua, retro synth
												master cleanse.
											</p>
										</TabPane>
										<TabPane tabId="tabs2">
											<p className="description">
												Cosby sweater eu banh mi, qui irure terry richardson ex
												squid. Aliquip placeat salvia cillum iphone. Seitan
												aliquip quis cardigan american apparel, butcher
												voluptate nisi qui.
											</p>
										</TabPane>
										<TabPane tabId="tabs3">
											<p className="description">
												Raw denim you probably haven't heard of them jean shorts
												Austin. Nesciunt tofu stumptown aliqua, retro synth
												master cleanse. Mustache cliche tempor, williamsburg
												carles vegan helvetica. Reprehenderit butcher retro
												keffiyeh dreamcatcher synth.
											</p>
										</TabPane>
									</TabContent>
								</CardBody>
							</Card>
							{/* End Card Paragraph */}
						</div>
					</Container>
				</section>
			</>
		)
	}
}

export default ProcessSection
