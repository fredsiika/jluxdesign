import React, { Children } from 'react'
import { useForm } from 'react-hook-form'
import {
	Container,
	// Col,
	Row,
	// NavbarBrand
} from 'reactstrap'

import NavbarBasic from '../Navbars/NavbarBasic'
import { QuoteFormHeader } from './QuoteFormHeader'
// import ContactForm from './ContactForm'

import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'
import { Step4 } from './Step4'
import { Step5 } from './Step5'
import { Result } from './Result'
import { Step } from 'semantic-ui-react'
import JumbotronFluid from 'components/Jumbotrons/JumbotronFluid'

const LogoBlack = (
	<img src={require('../../assets/img/logos/logo-black.png')}></img>
)

const ReactHookForm = ({ children, ...props }) => {
	const { register, handleSubmit, watch, errors } = useForm()
	const onSubmit = (data) => console.log(data)

	return (
		<>
			<div className="main">
				<JumbotronFluid />
				{children}
			</div>
		</>
	)
}

export default ReactHookForm
