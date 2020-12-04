import React from 'react'
import { Link } from 'react-router-dom'
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js'
// reactstrap components
import {
	Button,
	UncontrolledCollapse,
	DropdownMenu,
	// DropdownItem,
	DropdownToggle,
	UncontrolledDropdown,
	Media,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from 'reactstrap'

const LogoWhite = (
	<img src={require('../../assets/img/logos/logo-white.png')} alt="..."></img>
)
const LogoBlack = (
	<img src={require('../../assets/img/logos/logo-black.png')} alt="..."></img>
)

class NavbarBasic extends React.Component {
	componentDidMount() {
		let headroom = new Headroom(document.getElementById('navbar-main'))
		// initialise
		headroom.init()
	}
	state = {
		collapseClasses: '',
		collapseOpen: false,
	}

	onExiting = () => {
		this.setState({
			collapseClasses: 'collapsing-out',
		})
	}

	onExited = () => {
		this.setState({
			collapseClasses: '',
		})
	}

	render() {
		return (
			<>
				<header className="header-global">
					{/* Navbar Section */}
					<Navbar
						className="navbar-main navbar-transparent headroom"
						expand="lg"
						id="navbar-main">
						<Container>
							{/* Navbar Logo */}
							<NavbarBrand className="mr-lg-5 ml-0" to="/" tag={Link}>
								{/* Logo Icon */}
								{/* <img
									alt="..."
									src={require('assets/img/icons/Diamond-48-96px/icons8-diamond-48.png')}
								/> */}
								{/* End Logo Icon */}
								{LogoWhite}
							</NavbarBrand>
							{/* End Navbar Logo */}

							{/* CTA Button on mobile devices */}
							<NavItem
								className="d-none d-sm-block py-sm-2 ml-md-9 d-lg-none"
								>
								<Button
									className="btn-icon"
									color="primary"
									href="/quote"
									target="_self">
									<span className="btn-inner--icon">
										<i className="ni ni-spaceship" />
									</span>
									<span className="nav-link-inner--text ml-1">Get Started</span>
								</Button>
							</NavItem>
							{/* End CTA Button on mobile devices */}

							{/* Navbar Button Icon Toggler*/}
							<NavItem className="d-sm-block list-unstyled mr-sm-1">
								<button className="navbar-toggler" id="navbar_global">
									<span className="navbar-toggler-icon" />
								</button>
							</NavItem>
							{/* End Navbar Button Icon Toggler */}

							{/* UncontrolledCollapse */}
							<UncontrolledCollapse
								toggler="#navbar_global"
								navbar
								className={this.state.collapseClasses}
								onExiting={this.onExiting}
								onExited={this.onExited}>
								{/* Opened Navbar Logo */}
								<div className="navbar-collapse-header">
									<Row>
										<Col className="collapse-brand" xs="6">
											<Link to="/landing-page">
												{/* Logo Icon */}
												{/* <img
													alt="..."
													src={require('assets/img/icons/Diamond-48-96px/icons8-diamond-48.png')}
												/> */}
												{/* End Logo Icon */}
												{LogoBlack}
											</Link>
										</Col>
										{/* End Opened Navbar Log */}

										{/* Close Icon */}
										<Col className="collapse-close" xs="6">
											<button className="navbar-toggler" id="navbar_global">
												<span />
												<span />
											</button>
										</Col>
										{/* End Close Icon */}
									</Row>
								</div>
								{/* End Opened Navbar Logo */}

								{/* Navbar CTA Mobile Section */}
								<Nav className="navbar-nav-hover align-items-sm-center" navbar>
									{/* CTA Button on mobile devices */}
									<NavItem className="d-lg-none d-sm-block ml-sm-4">
										<Button
											className="btn-icon"
											color="darker"
											href="/quote"
											target="_self"
											block>
											<span className="btn-inner--icon">
												<i className="ni ni-spaceship" />
											</span>
											<span className="nav-link-inner--text ml-1">
												Get Started
											</span>
										</Button>
									</NavItem>
									{/* End CTA Button on mobile devices */}
								</Nav>
								{/* End Navbar CTA Mobile Section */}

								{/* Navbar Links Sections */}
								<Nav className="navbar-nav-hover align-items-lg-center" navbar>
									{/* Services Tab */}
									<UncontrolledDropdown nav>
										<DropdownToggle caret color="primary" nav>
											<i className="ni ni-collection d-lg-none mr-1" />
											<span className="nav-link-inner--text">Services</span>
										</DropdownToggle>

										<DropdownMenu className="dropdown-menu-xl">
											<div className="dropdown-menu-inner">
												{/* Distribution */}
												<Media
													className="d-flex align-items-center"
													href="/services#distribution">
													<div className="icon icon-shape bg-gradient-primary rounded-circle text-darker">
														<i className="ni ni-delivery-fast" />
													</div>
													<Media body className="ml-3">
														<h6 className="heading text-primary mb-md-1">
															Distribution
														</h6>
														<p className="description d-none d-md-inline-block mb-0">
															Locating the right product is key. Let J Lux
															Design's team of professional distributors source
															your next project.
														</p>
													</Media>
												</Media>
												{/* End Distribution */}

												{/* Fabrication */}
												<Media
													className="d-flex align-items-center"
													href="/services#fabrication">
													<div className="icon icon-shape bg-gradient-primary rounded-circle text-darker">
														<i className="ni ni-scissors" />
													</div>
													<Media body className="ml-3">
														<h6 className="heading text-primary mb-md-1">
															Fabrication
														</h6>
														<p className="description d-none d-md-inline-block mb-0">
															Quality is our top priority at J Lux Design. Our
															in-house fabricators guarantee to deliver the
															level of craftsmanship your project deserves.
														</p>
													</Media>
												</Media>
												{/* End Fabrication */}

												{/* Installation */}
												<Media
													className="d-flex align-items-center"
													href="/services#installation">
													<div className="icon icon-shape bg-gradient-primary rounded-circle text-darker">
														<i className="ni ni-settings" />
													</div>
													<Media body className="ml-3">
														<h6 className="heading text-primary mb-md-1">
															Installation
														</h6>
														<p className="description d-none d-md-inline-block mb-0">
															Successful installation is essential. Let J Lux
															Design's team of professional installers bring
															your room to life.
														</p>
													</Media>
												</Media>
												{/* End Installation */}
											</div>
										</DropdownMenu>
									</UncontrolledDropdown>
									{/* End Services Tab */}

									{/* Resources */}
									<UncontrolledDropdown nav>
										<DropdownToggle caret color="primary" nav>
											<i className="ni ni-books d-lg-none mr-1" />
											<span className="nav-link-inner--text">Resources</span>
										</DropdownToggle>

										<DropdownMenu className="dropdown-menu-xl">
											{/* Getting Started  */}
											<div className="dropdown-menu-inner">
												<Media
													className="d-flex align-items-center"
													href="/contact"
													target="_self">
													<div className="icon icon-shape bg-gradient-primary rounded-circle text-darker">
														<i className="ni ni-spaceship" />
													</div>
													<Media body className="ml-3">
														<h6 className="heading text-primary mb-md-1">
															Getting started
														</h6>
														<p className="description d-none d-md-inline-block mb-0">
															Learn how to get started on your next custom home
															project with J Lux Design.
														</p>
													</Media>
												</Media>
												<Media
													className="d-flex align-items-center"
													href="/knowledge-base"
													target="_self">
													<div className="icon icon-shape bg-gradient-primary rounded-circle text-darker">
														<i className="ni ni-hat-3" />
													</div>
													<Media body className="ml-3">
														<h6 className="heading text-primary mb-md-1">
															Knowledge Base
														</h6>
														<p className="description d-none d-md-inline-block mb-0">
															Learn more about tile and stone with our
															repository of detailed guides, resources and DIY
															hacks for your next project.
														</p>
													</Media>
												</Media>
												<Media
													className="d-flex align-items-center"
													href="#!"
													target="_self">
													<div className="icon icon-shape bg-gradient-primary rounded-circle text-darker">
														<i className="ni ni-atom" />
													</div>
													<Media body className="ml-3">
														<h5 className="heading text-primary mb-md-1">
															Design Lab
														</h5>
														<p className="description d-none d-md-inline-block mb-0">
															Need a little inspiration? Browse our curated list
															of beautiful handcrafted designs for your next
															project.
														</p>
													</Media>
												</Media>
											</div>
										</DropdownMenu>
									</UncontrolledDropdown>
									{/* End Resources */}

									{/* About Us */}
									<UncontrolledDropdown nav>
										{/* Tab title */}
										<DropdownToggle caret color="primary" nav>
											<i className="ni ni-shop d-lg-none mr-1" />
											<span className="nav-link-inner--text">Company</span>
										</DropdownToggle>
										{/* End Tab Title */}

										<DropdownMenu className="dropdown-menu-lg">
											{/* Getting Started  */}
											<div className="dropdown-menu-inner">
												<Media
													className="d-flex align-items-center"
													href="/about"
													target="_self">
													<div className="icon icon-shape bg-gradient-primary rounded-circle text-darker">
														<i className="ni ni-shop" />
													</div>
													<Media body className="ml-3">
														<h6 className="heading text-primary mb-md-1">
															About Us
														</h6>
														<p className="description d-none d-md-inline-block mb-0">
															Learn about the history and foundation of J Lux
															Design.
														</p>
													</Media>
												</Media>
												<Media
													className="d-flex align-items-center"
													href="/about#our-team"
													target="_self">
													<div className="icon icon-shape bg-gradient-primary rounded-circle text-darker">
														<i className="ni ni-key-25" />
													</div>
													<Media body className="ml-3">
														<h6 className="heading text-primary mb-md-1">
															Our Team
														</h6>
														<p className="description d-none d-md-inline-block mb-0">
															The key to our success wouldn't be possible
															without the constant dedication and support of our
															amazing team
														</p>
													</Media>
												</Media>
												<Media
													className="d-flex align-items-center"
													href="/contact"
													target="_self">
													<div className="icon icon-shape bg-gradient-primary rounded-circle text-darker">
														<i className="ni ni-satisfied" />
													</div>
													<Media body className="ml-3">
														<h5 className="heading text-primary mb-md-1">
															Contact Us
														</h5>
														<p className="description d-none d-md-inline-block mb-0">
															Let us guide you through every step of the
															shopping process so you’ll be satisfied with your
															home renovation project for a lifetime!
														</p>
													</Media>
												</Media>
											</div>
										</DropdownMenu>
									</UncontrolledDropdown>
									{/* End About Us */}
								</Nav>
								{/* End Navbar Links Sections */}

								<hr />
								{/* Navbar Social Icons */}
								<Nav className="align-items-lg-center ml-lg-auto" navbar>
									{/* Facebook Button */}
									<NavItem>
										<NavLink
											className="nav-link-icon"
											href="#!"
											id="tooltip333589074"
											target="_blank">
											<i className="fa fa-facebook-square" />
											<span className="nav-link-inner--text d-lg-none ml-2">
												Facebook
											</span>
										</NavLink>
										<UncontrolledTooltip delay={0} target="tooltip333589074">
											Like us on Facebook
										</UncontrolledTooltip>
									</NavItem>
									{/* End Facebook Button */}

									{/* Instagram Button */}
									<NavItem>
										<NavLink
											className="nav-link-icon"
											href="#!"
											id="tooltip356693867"
											target="__blank">
											<i className="fa fa-instagram" />
											<span className="nav-link-inner--text d-lg-none ml-2">
												Instagram
											</span>
										</NavLink>
										<UncontrolledTooltip delay={0} target="tooltip356693867">
											Follow us on Instagram
										</UncontrolledTooltip>
									</NavItem>
									{/* End Instagram Button */}

									{/* Twitter Button */}
									<NavItem>
										<NavLink
											className="nav-link-icon"
											href="#!"
											id="tooltip184698705"
											target="_blank">
											<i className="fa fa-twitter-square" />
											<span className="nav-link-inner--text d-lg-none ml-2">
												Twitter
											</span>
										</NavLink>
										<UncontrolledTooltip delay={0} target="tooltip184698705">
											Follow us on Twitter
										</UncontrolledTooltip>
									</NavItem>
									{/* End Twitter Button */}

									{/* Home Advisor Button */}
									<NavItem>
										<NavLink
											className="nav-link-icon"
											href="#!"
											data-placement="bottom"
											id="tooltip159654437"
											target="__blank">
											<i className="fa fa-home" />
											<span className="nav-link-inner--text d-lg-none ml-2">
												Home Advisor
											</span>
										</NavLink>
										<UncontrolledTooltip
											delay={0}
											placement="bottom"
											target="tooltip159654437">
											Check us out on Home Advisor
										</UncontrolledTooltip>
									</NavItem>
									{/* End Home Advisor Button */}

									{/* Houzz Button */}
									<NavItem>
										<NavLink
											className="nav-link-icon"
											href="#!"
											id="tooltip112445449"
											target="_blank">
											<i className="fa fa-houzz" />
											<span className="nav-link-inner--text d-lg-none ml-2">
												Houzz
											</span>
										</NavLink>
										<UncontrolledTooltip delay={0} target="tooltip112445449">
											Follow Us on Houzz
										</UncontrolledTooltip>
									</NavItem>
									{/* End Houzz Button */}

									{/* CTA Button on lg and xl devices */}
									<NavItem className="d-none d-lg-block ml-lg-2">
										<Button
											className="btn-icon"
											color="primary"
											href="/quote"
											target="_self">
											<span className="btn-inner--icon">
												<i className="ni ni-spaceship" />
											</span>
											<span className="nav-link-inner--text ml-1">
												Get Started
											</span>
										</Button>
									</NavItem>
									{/* End CTA Button on desktop devices */}
								</Nav>
								{/* End Navbar Social Icons */}
							</UncontrolledCollapse>
							{/* End Uncontrolled Collapse */}
						</Container>
					</Navbar>
					{/* End Navbar Section */}
				</header>
			</>
		)
	}
}

export default NavbarBasic
