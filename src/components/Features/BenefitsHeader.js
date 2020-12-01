import React from 'react'
import { Col } from 'reactstrap'

const BenefitsHeader = (props) => {
	return (
		<Col className="text-md-center" lg="12">
			<h3 className="text-base text-primary text-uppercase">{props.tag}</h3>
			<p className="display-3 text-darker">{props.title}</p>
			<p className="lead text-muted pb-5 pt-0">{props.subtitle}</p>
		</Col>
	)
}

export default BenefitsHeader
