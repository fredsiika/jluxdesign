import React from 'react'
import LogoBrands from './LogoBrands'
import { Container, Col, Row } from 'reactstrap'

const LogoBrandsGroup = (props) => {
	return (
		<>
			<section className="section bg-transparent">
				<div title="title">
					<p className="text-center">{props.title}</p>
					<p
						className="text-center text-muted pb-5"
						text="GREAT PRICING, PREMIUM QUALITY PRODUCT and EXCELLENT CUSTOMER SERVICE!">
						{props.text}
					</p>
				</div>
				<Container fluid={true}>
					<Row>
						<Col xs="3">
							<LogoBrands
								src="https://granitecenterva.com/wp-content/uploads/2018/12/angiestlist.jpg"
								alt="Logo of AngiesList"
								width="100"
							/>
						</Col>
						<Col xs="3">
							<LogoBrands
								src="https://granitecenterva.com/wp-content/uploads/2018/12/google-review.jpg"
								alt="Logo of Google Review"
								width="100"
							/>
						</Col>
						<Col xs="3">
							<LogoBrands
								src="https://granitecenterva.com/wp-content/uploads/2018/12/houzz.jpg"
								alt="Logo of Granite Center"
								width="100"
							/>
						</Col>
						<Col xs="3">
							<LogoBrands
								src="https://granitecenterva.com/wp-content/uploads/2018/12/granite-center-yelp.gif"
								alt="Logo of Yelp Reviews"
								width="100"
							/>
						</Col>
						<Col xs="3">
							<LogoBrands
								src="https://granitecenterva.com/wp-content/uploads/2018/12/granite-center-facebook.gif"
								alt="Logo o Facebook"
								width="100"
							/>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}

export default LogoBrandsGroup
