import React, { Component } from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container,
	Row,
	Col,
	Jumbotron,
	Button,
} from 'reactstrap'

class NavbarReactstrapDefault extends Component {
	constructor(props) {
		super(props)

		this.toggle = this.toggle.bind(this)
		this.state = {
			isOpen: false,
		}
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		})
	}

	render() {
		const LogoBlack = (<img src={require("../../assets/img/logos/logo-black.png")}></img>)

		return (
			<div>
				<Navbar color="inverse" light expanded="md">
					<NavbarBrand className="text-darker" href="/">
						{' '}
						{/* <span style={{ alignContent: 'left' }}>{LogoBlack}</span> */}
						JLuxDesign
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav classNam="ml-auto" light expand="md">
							<NavItem className="display-4">
								<NavLink href="/">{' > '}Home</NavLink>
								<NavLink href="/#services">{' > '}Services</NavLink>
								<NavLink href="/">{' > '}About Us</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)
	}
}

export default NavbarReactstrapDefault
