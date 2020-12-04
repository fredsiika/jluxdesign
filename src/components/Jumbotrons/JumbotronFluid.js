import React from 'react'
import { Container, Col, Jumbotron, Row } from 'reactstrap'

const JumbotronFluid = (props) => {
	return (
		<div>
			<Jumbotron fluid>
				<h1
					className="display-3 text-center"
					defaultValue="Fluid Jumbotron title">
					Countertop Quote Estimator Form
				</h1>
			</Jumbotron>
		</div>
	)
}

export default JumbotronFluid
