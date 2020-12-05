import React, { Children } from 'react'
import { useForm } from 'react-hook-form'
import NavbarBasic from '../Navbars/NavbarBasic'
import JumbotronFluid from 'components/Jumbotrons/JumbotronFluid'

const LayoutForm = ({ children, ...props }) => {
	const { register, handleSubmit, watch, errors } = useForm()
	const onSubmit = (data) => console.log(data)

	return (
		<>
			<NavbarBasic />
			<div className="main">
				<JumbotronFluid />
				{children}
			</div>
		</>
	)
}

export default LayoutForm
