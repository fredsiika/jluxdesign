import React from 'react'
import { Container, Col, Jumbotron, Row } from 'reactstrap'

const JumbotronFluid = (props) => {
	return (
		<div>
			<Jumbotron className="bg-darker" fluid>
				<h1
					className="hero-animation display-3 text-center mt-5 text-white"
					defaultValue="Fluid Jumbotron title">
					Countertop Quote Estimator Form
				</h1>
			</Jumbotron>
		</div>
	)
}

export default JumbotronFluid
