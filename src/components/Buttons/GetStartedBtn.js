import React from 'react'
import { Button } from 'reactstrap'

const GetStartedBtn = (props) => {
	return (
		<Button
			type="submit"
			className="btn-icon mb-3 mb-sm-0 btn-custom"
			color={props.color}
			href={props.href}
			block>
			<span className="btn-inner--icon mr-1">
				<i className="ni ni-spaceship" />
			</span>
			<span className="btn-inner--text">{props.cta}</span>
		</Button>
	)
}

export default GetStartedBtn
