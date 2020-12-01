import React from 'react'

const BlankHeroWebCopy = () => {
	return (
		<div className="mb-6">
			<h2 className="h1 text-white text-lh-xs mb-3">{props.title}</h2>
			<p className="lead text-white">{props.text}</p>
		</div>
	)
}

export default BlankHeroWebCopy
