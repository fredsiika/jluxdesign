import React from 'react'
import { useHistory } from 'react-router-dom'
import { useData } from '../../DataContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import NavbarBasic from '../Navbars/NavbarBasic'
import SimpleFooter from '../Footers/SimpleFooter'
import JumbotronFluid from '../Jumbotrons/JumbotronFluid'
import { MainContainer } from './MainContainer'
import { PrimaryButton } from './PrimaryButton'
import { Form } from './Form'
import { Input } from './Input'
import * as yup from 'yup'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import JumbotronBasic from 'components/Jumbotrons/JumbotronBasic'
import { Button, Col, NavbarBrand, Row } from 'reactstrap'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

// import { Button, Container, Col, Row } from 'reactstrap'
// import Typography from '@material-ui/core/Typography'
// import PageAnalytics from './PageAnalytics'
// import ReactHookForm from './ReactHookForm'

const schema = yup.object().shape({
	firstName: yup
		.string()
		.matches(/^([^0-9]*)$/, 'First name should not contain numbers')
		.required('First name is a required field'),
	lastName: yup
		.string()
		.matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
		.required('Last name is a required field'),
	email: yup
		.string()
		.email('Email should have correct format')
		.required('Email is a required field'),
	phoneNumber: yup
		.number()
		// .matches(null, 'Please fill out phone number')
		.required('Phone number is a required field.'),
})

const normalizePhoneNumber = (value) => {
	const phoneNumber = parsePhoneNumberFromString(value)
	if (!phoneNumber) {
		return value
	}

	return phoneNumber.formatInternational()
}

export const Step1 = () => {
	const { setValues, data } = useData()
	const history = useHistory()
	const { register, handleSubmit, watch, errors } = useForm({
		defaultValues: {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			hasPhone: data.hasPhone,
			phoneNumber: data.phoneNumber,
		},
		mode: 'onBlur',
		resolver: yupResolver(schema),
	})

	const hasPhone = watch('hasPhone')
	const phoneNumber = watch('phoneNumber')

	const onSubmit = (data) => {
		history.push('./step2')
		setValues(data)

		console.log(data)
	}

	return (
		<>
			<NavbarBasic />
			<JumbotronFluid />
			<MainContainer>
				<section className="section section-lg pt-0">
					<p className="text-center display-3 text-primary">
						<span className="d-sm-inline" role="img" aria-label="Memo Emoji">
							📝
						</span>{' '}
						Step 1: Enter Contact Info
					</p>

					<Form onSubmit={handleSubmit(onSubmit)}>
						<Input
							ref={register}
							id="firstName"
							type="text"
							label="First Name"
							name="firstName"
							error={!!errors.firstName}
							helperText={errors?.firstName?.message}
						/>
						<Input
							ref={register}
							id="lastName"
							type="text"
							label="Last Name"
							name="lastName"
							error={!!errors.lastName}
							helperText={errors?.lastName?.message}
						/>
						<Input
							ref={register}
							id="email"
							type="email"
							label="Email"
							name="email"
							error={!!errors.email}
							helperText={errors?.email?.message}
						/>
						<FormControlLabel
							control={
								<Checkbox
									defaultValue={data.hasPhone}
									defaultChecked={data.hasPhone}
									color="primary"
									inputRef={register}
									name="hasPhone"
								/>
							}
							label="Do you have a phone"
						/>

						{hasPhone && (
							<Input
								ref={register}
								id="phoneNumber"
								type="tel"
								label="Phone Number"
								name="phoneNumber"
								onChange={(event) => {
									event.target.value = normalizePhoneNumber(event.target.value)
								}}
							/>
						)}
						<hr />
						<div className="pb-6">
							<Row>
								<Col sm="6">
									<Button href="/quote/" color="darker" block disabled>
										Back
									</Button>
								</Col>
								<Col sm="6">
									<Button
										color="primary"
										onClick={handleSubmit(onSubmit)}
										block>
										Next
									</Button>
								</Col>
							</Row>
						</div>
					</Form>
				</section>
			</MainContainer>
			<SimpleFooter />
		</>
	)
}

export default Step1
