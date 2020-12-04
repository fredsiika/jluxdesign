import React from 'react'
import { Button } from 'reactstrap'

const CtaButton = (props) => {
	return (
		<Button
			type="button"
			className="btn-icon mb-3 mb-sm-0"
			color={props.color}
			src={props.src}
			block>
				<span className="btn-inner--icon mr-1">
					<i className="{ni ni-spaceship}" />
				</span>
				<span className="btn-inner--text">{props.cta}</span>
		</Button>
	)
}

export default CtaButton
