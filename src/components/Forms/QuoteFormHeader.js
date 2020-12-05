import React from 'react'
import NavbarBasic from '../Navbars/NavbarBasic'
import JumbotronBasic from '../Jumbotrons/JumbotronBasic'

export const QuoteFormHeader = ({children, ...props}) => {
	return (
		<>
			<NavbarBasic />
			<JumbotronBasic />
			<div classNames="main">
				{children}
			</div>
		</>
	)
}

export default QuoteFormHeader
