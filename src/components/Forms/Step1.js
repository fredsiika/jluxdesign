import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useData } from '../../DataContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import { MainContainer } from './MainContainer'
import { PrimaryButton } from './PrimaryButton'
import { Form } from './Form'
import { Input } from './Input'
import * as yup from 'yup'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { Button, Col, Row } from 'reactstrap'

// Material UI components
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox'
import LayoutForm from 'components/Forms/LayoutForm'
import { ProgressBar1 } from 'components/Forms/ProgressBar'
import RadioButtons from 'components/Inputs/RadioButtons'

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
		.string()
		.matches(/^([^A-Za-z]*)$/, 'Phone number must not contain letters.')
		.required('Phone number is a required field.'),
})

const normalizePhoneNumber = (value) => {
	const phoneNumber = parsePhoneNumberFromString(value)
	if (!phoneNumber) {
		return value
	}
	return phoneNumber.formatInternational()
}

{/* ================ */}
			// const CustomRadioGroup = () => {
			// 	const [value, setValue] = React.useState('homeowner');


			// 	return (
			// 		<FormControl>
			// 			<FormLabel component="legend">Job Title</FormLabel>
			// 			<RadioGroup aria-label="Homeowner" name="title" value={value} onChange={(event) => { setValue(event.target.value); }}>
			// 			<FormControlLabel
			// 				control={
			// 					<Radio
			// 						defaultValue={data.isHomeowner}
			// 						defaultChecked={data.isHomeowner}
			// 						color="primary"
			// 						inputRef={register}
			// 						name="isHomeowner"
			// 					/>
			// 				}
			// 				label="Homeowner"
			// 				labelPlacement="right"
			// 			/>

			// 			<FormControlLabel
			// 				control={
			// 					<Radio
			// 						defaultValue={data.isBuilder}
			// 						defaultChecked={data.isBuilder}
			// 						color="primary"
			// 						inputRef={register}
			// 						name="isBuilder"
			// 					/>
			// 				}
			// 				label="Builder"
			// 				labelPlacement="right"
			// 			/>

			// 			<FormControlLabel
			// 				control={
			// 					<Radio
			// 						defaultValue={data.isContractor}
			// 						defaultChecked={data.isContractor}
			// 						color="primary"
			// 						inputRef={register}
			// 						name="isContractor"
			// 					/>
			// 				}
			// 				label="Contractor"
			// 				labelPlacement="right"
			// 			/>

			// 			<FormControlLabel
			// 				control={
			// 					<Radio
			// 						defaultValue={data.isDesigner}
			// 						defaultChecked={data.isDesigner}
			// 						color="primary"
			// 						inputRef={register}
			// 						name="isDesigner"
			// 					/>
			// 				}
			// 				label="Designer"
			// 				labelPlacement="right"
			// 			/>
			// 			<FormControlLabel
			// 				control={
			// 					<Radio
			// 						defaultValue={data.hasOtherTitle}
			// 						defaultChecked={data.hasOtherTitle}
			// 						color="primary"
			// 						inputRef={register}
			// 						name="hasOtherTitle"
			// 					/>
			// 				}
			// 				label="Other Title"
			// 				labelPlacement="right"
			// 			/>
			// 			{/* Error Handling */}
			// 			{/* {hasOtherTitle && (
			// 				<Input
			// 					ref={register}
			// 					id="phoneNumber"
			// 					type="tel"
			// 					label="Phone Number"
			// 					name="phoneNumber"
			// 					onChange={(event) => {
			// 						event.target.value = normalizePhoneNumber(event.target.value)
			// 					}}
			// 				/>
			// 			)} */}
			// 			</RadioGroup>
			// 		</FormControl>
			// 	)
			// }

export const Step1 = () => {
	const { setValues, data } = useData()
	const history = useHistory()
	const { register, handleSubmit, watch, errors } = useForm({
		defaultValues: {
			firstName: "Carol",
			lastName: "Baskins",
			email: "carol.baskins@gmail.com",
			phoneNumber: "+1469420496969",
			title: data.title,
			hasOtherTitle: data.hasOtherTitle
		},
		mode: 'onBlur',
		resolver: yupResolver(schema),
	})

	// defaultValues: {
	// 		firstName: data.firstName,
	// 		lastName: data.lastName,
	// 		email: data.email,
	// 		hasPhone: data.hasPhone,
	// 		phoneNumber: data.phoneNumber,
	// 	},
	// 	mode: 'onBlur',
	// 	resolver: yupResolver(schema),
	// })

	const hasPhone = watch('hasPhone')
	const phoneNumber = watch('phoneNumber')
	const hasOtherTitle = watch('hasOtherTitle')
	const onSubmit = (data) => {
		history.push('./step2')
		setValues(data)

		console.log(data)
	}

	return (
		<>
			<LayoutForm>
				<ProgressBar1 />
				<MainContainer>
					<section className="hero-animation-2 section section-lg pt-0">
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
							<Input
								ref={register}
								id="phoneNumber"
								type="tel"
								label="Phone Number"
								name="phoneNumber"
								error={!!errors.phoneNumber}
								helperText={errors?.phoneNumber?.message}
								onChange={(event) => { event.target.value = normalizePhoneNumber(event.target.value)} }
							/>


							<hr />
							<div className="pb-6">
								<Row>
									<Col sm="6">
										<Button
											type="submit"
											href="/quote/"
											color="darker"
											block
											disabled>
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
			</LayoutForm>
		</>
	)
}

export default Step1

{/*
<div className="project-type">
		<FormControlLabel
			control={
				<Checkbox
					defaultValue={data.isKitchen}
					defaultChecked={data.isKitchen}
					color="primary"
					inputRef={register}
					name="iskitchen"
				/>
			}
			label="Kitchen"
			labelPlacement="bottom"
		/>
		<FormControlLabel
			control={
				<Checkbox
					defaultValue={data.isBathroom}
					defaultChecked={data.isBathroom}
					color="primary"
					inputRef={register}
					name="isbathroom"
				/>
			}
			label="Bathroom"
			labelPlacement="bottom"
		/>
		<FormControlLabel
			control={
				<Checkbox
					defaultValue={data.isOther}
					defaultChecked={data.isOther}
					color="primary"
					inputRef={register}
					name="isOther"
				/>
			}
			label="Other"
			labelPlacement="bottom"
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
</div>
*/}