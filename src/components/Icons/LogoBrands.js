import React from 'react'

const LogoBrands = (props) => {
	return (
		<div className="Logos">
			<img alt={props.alt} src={props.src} width={props.width} />
		</div>
	)
}

export default LogoBrands
