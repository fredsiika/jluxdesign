import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import NavbarBasic from '../../components/Navbars/NavbarBasic'
import SimpleFooter from '../../components/Footers/SimpleFooter'
import Jumbotron404 from '../../components/Jumbotrons/Jumbotron404'

const NotFound = (props) => {
	return (
		<>
			<NavbarBasic />
			<Jumbotron404 />

			<div className="main">
				<h2 className="display-3 text-center">Perhaps you meant to be here?</h2>
				<div className="sitemap">
					<Nav classNam="ml-auto" light expand="md">
						<NavItem className="display-4">
							<NavLink href="/">{' > '}Home</NavLink>
							<NavLink href="/#services">{' > '}Services</NavLink>
							<NavLink href="/">{' > '}About Us</NavLink>
						</NavItem>
					</Nav>
				</div>
			</div>
			<SimpleFooter />
		</>
	)
}

export default NotFound
