/*!

=========================================================
* J Lux Design System - v1.0.1
=========================================================

* Product Page: https://fredsiika.github.io/jluxdesign.com
* Copyright 2020 Fred Siika (https://www.github.com/fredsiika)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Fred C. Siika

=========================================================
*

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from 'react'
import styled from 'styled-components'
import './HeroSection.css'

// reactstrap components
import { Button, Container, Row, Col } from 'reactstrap'
import HomeNavbar from 'components/Navbars/HomeNavbar'

class Hero extends React.Component {
	render() {
		return (
			<>
				<div className="position-relative">
					{/* Hero wrapper */}
					<div className="section section-header">
						{/* Background circles */}
						<div className="points">
							<div class="point point-floating-1"></div>
							<div class="point point-floating-2"></div>
							<div class="point point-floating-3"></div>
							<div class="point point-floating-4"></div>
							<div class="point point-floating-5"></div>
							<div class="point point-floating-6"></div>
							<div class="point point-floating-7"></div>
							<div class="point point-floating-8"></div>
							<div class="point point-floating-9"></div>
						</div>
						<div className="container">
							<div className="row">
								<div className="col-md-6 text-left col-z-index">
									<h1 className="display-3 title">
										Commercial and residential stone countertop solutions.{' '}
									</h1>
									<h4 className="desc">
										Learning resources, project management kits, and tools to
										kickstart your next home renovation project.
									</h4>
									<p className="text-muted">
										Homeowners, designers, builders, and contractors
									</p>
								</div>
								<div className="col-md-6">
									<img
										src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/illustration.jpg"
										className="illustration"></img>
								</div>
							</div>
						</div>
						<div className="space-110"></div>
						<div className="card card-plain"></div>
					</div>
				</div>
			</>
		)
	}
}
export default Hero

const SectionHeader = styled.div``
