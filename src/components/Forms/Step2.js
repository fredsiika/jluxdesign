import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers'
import { useData } from '../../DataContext'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import { PrimaryButton, BackButton } from './PrimaryButton'
import { MainContainer } from './MainContainer'
import { Form } from './Form'
import { Input } from './Input'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import PageAnalytics from './PageAnalytics'
import { data } from 'jquery'
// import BackButton from './BackButton'
import { Button, Container, Col, Row, FormGroup, Label } from 'reactstrap'
import NavbarBasic from '../Navbars/NavbarBasic'
import JumbotronFluid from '../Jumbotrons/JumbotronFluid'

// const projectType = yup.addMethod(yup.projectType, 'format', function (formats, parseStrict) {
//   return this.transform(function (value, originalValue) {
//     if (this.isType(value)) return value;

//     value = <Checkbox />
//   })
// })

const schema = yup.object().shape({
	isKitchen: yup
		.string()
		.matches(/^([^0-9]*)$/, 'Project type should not contain numbers')
		.required('Project type is a required field'),
})

const normalizePhoneNumber = (value) => {
	const phoneNumber = parsePhoneNumberFromString(value)
	if (!phoneNumber) {
		return value
	}
	return phoneNumber.formatInternational()
}

export const Step2 = () => {
	const { setValues, data } = useData()
	const history = useHistory()
	const { register, handleSubmit, watch, errors } = useForm({
		defaultValues: {
			projectType: data.projectType,
			isKitchen: data.isKitchen,
			isBathroom: data.isBathroom,
			isOther: data.isOther,
			hasPhone: data.hasPhone,
			phoneNumber: data.phoneNumber,
			address1: data.address1,
			address2: data.address2,
			city: data.city,
			stateAddress: data.stateAddress,
			zipcode: data.zipcode,
		},
		mode: 'onBlur',
		resolver: yupResolver(schema),
	})

	const address1 = watch('address1')
	const address2 = watch('address2')
	const city = watch('city')
	const stateAddress = watch('stateAddress')
	const zipcode = watch('zipcode')
	const hasPhone = watch('hasPhone')
	const isBathroom = watch('isBathroom')
	const isKitchen = watch('isKitchen')
	const isOther = watch('isOther')

	const onSubmit = (data) => {
		history.push('./step3')
		setValues(data)
	}

	return (
		<>
			<NavbarBasic />
			<JumbotronFluid />
			<MainContainer>
				<div className="container">
					<h2 className="display-3">
						<span className="d-sm-inline" alt="..." aria-label="emoji">
							💠
						</span>{' '}
						Step 2: Project Info
					</h2>
					<p className="lead display-3">
						Next, you will need to answer the following:
					</p>
				</div>

				<div className="form-container">
					<ol className="display-3 text-primary">
						<li>What type of project?</li>
					</ol>
				</div>

				<Form onSubmit={handleSubmit(onSubmit)}>
					{/* projectType */}
					{/* <FormControlLabel
						control={
							<Input
								inputRef={register}
								name="projectType"
								defaultValue={data.projetType}
								defaultChecked={data.projectType}
								color="primary"
								error={!!errors.projectType}
								helperText={errors?.projectType?.message}
								required
							/>
						}
						label="Project Type"
					/> */}

					<FormControlLabel
						control={
							<Checkbox
								inputRef={register}
								name="isKitchen"
								defaultValue={data.isKitchen}
								defaultChecked={data.isKitchen}
								color="primary"
								error={!!errors.isKitchen}
								helperText={errors?.isKitchen?.message}
								required
							/>
						}
						label="Kitchen"
					/>

					<FormControlLabel
						control={
							<Checkbox
								inputRef={register}
								name="isBathroom"
								defaultValue={data.isBathroom}
								defaultChecked={data.isBathroom}
								color="primary"
								error={!!errors.isBathroom}
								helperText={errors?.isBathroom?.message}
								required
							/>
						}
						label="Bathroom"
					/>

					<FormControlLabel
						control={
							<Checkbox
								inputRef={register}
								name="isOther"
								defaultValue={data.isOther}
								defaultChecked={data.isOther}
								color="primary"
								error={!!errors.isOther}
								helperText={errors?.isOther?.message}
								required
							/>
						}
						label="Other"
					/>
					<hr />
					{isKitchen && (
						<div className="isOther-container">
							<p className="text-primary display-4">Kitchen Project</p>
							<p className="lead">What is the address associated with this project?</p>
							<FormGroup>
								<Label for="address">Address</Label>
								<Input ref={register} type="text" name="address1" id="address" placeholder="42069 Main St" error={!!errors.address1} helperText={errors?.address1?.message} />
							</FormGroup>
							<FormGroup>
								<Label for="address2">Address 2</Label>
								<Input ref={register} type="text" name="address2" id="address2" placeholder="Apartment, studio, or floor" />
							</FormGroup>
							<Row form>
								<Col md={6}>
									<FormGroup>
										<Label for="city">City</Label>
										<Input ref={register} type="text" name="city" id="city" placeholder="Dallas" />
									</FormGroup>
								</Col>
								<Col md={4}>
									<FormGroup>
										<Label for="stateAddress">State</Label>
										<Input ref={register} type="text" name="stateAddress" id="stateAddress" placeholder="TX" />
									</FormGroup>
								</Col>
								<Col md={2}>
									<FormGroup>
										<Label for="zipcode">Zip</Label>
										<Input ref={register} type="text" name="zipcode" id="zipcode" placeholder="75201"/>
									</FormGroup>
								</Col>
							</Row>
						</div>

					)}
					{isBathroom && (
						<div className="isOther-container">
							<p className="text-primary display-4">Bathroom Project</p>
							<p className="lead">What is the address associated with this project?</p>
							<FormGroup>
								<Label for="address">Address</Label>
								<Input type="text" name="address" id="address" placeholder="42069 Main St"/>
							</FormGroup>
							<FormGroup>
								<Label for="address2">Address 2</Label>
								<Input ref={register} type="text" name="address2" id="address2" placeholder="Apartment, studio, or floor"/>
							</FormGroup>
							<Row form>
								<Col md={6}>
									<FormGroup>
										<Label for="city">City</Label>
										<Input ref={register} type="text" name="city" id="city" placeholder="Dallas" />
									</FormGroup>
								</Col>
								<Col md={4}>
									<FormGroup>
										<Label for="stateAddress">State</Label>
										<Input ref={register} type="text" name="stateAddress" id="stateAddress" placeholder="TX" />
									</FormGroup>
								</Col>
								<Col md={2}>
									<FormGroup>
										<Label for="zipcode">Zip</Label>
										<Input ref={register} type="text" name="zipcode" id="zipcode" placeholder="75201"/>
									</FormGroup>
								</Col>
							</Row>
						</div>
					)}
					{/* {isBathroom && (
					<Input
						ref={register}
						id="isBathroom"
						type="num"
						label="Number of Bathrooms"
						name="isBathroom"
						onChange={(event) => event.target.value}
					/>
				)} */}
					{isOther && (
						<div className="isOther-container">
							<p className="text-primary display-4">Need something else done?</p>
							<p className="lead">What is the address associated with this project?</p>

							<FormGroup>
								<Label for="address">Address</Label>
								<Input ref={register} type="text" name="address" id="address" placeholder="42069 Main St"/>
							</FormGroup>
							<FormGroup>
								<Label for="address2">Address 2</Label>
								<Input ref={register} type="text" name="address2" id="address2" placeholder="Apartment, studio, or floor"/>
							</FormGroup>
							<Row form>
								<Col md={6}>
									<FormGroup>
										<Label for="city">City</Label>
										<Input ref={register} type="text" name="city" id="city" placeholder="Dallas" />
									</FormGroup>
								</Col>
								<Col md={4}>
									<FormGroup>
										<Label for="stateAddress">State</Label>
										<Input ref={register} type="text" name="stateAddress" id="stateAddress" placeholder="TX" />
									</FormGroup>
								</Col>
								<Col md={2}>
									<FormGroup>
										<Label for="zipcode">Zip</Label>
										<Input ref={register} type="text" name="zipcode" id="zipcode" placeholder="75201"/>
									</FormGroup>
								</Col>
							</Row>
						</div>
					)}

					{/* <FormControlLabel
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
					)} */}
					<div className="py-6">
						<Row>
							<Col sm="6">
								<Button href="/quote/step1" color="darker" block>
									Back
								</Button>
							</Col>
							<Col sm="6">
								<Button color="primary" onClick={handleSubmit(onSubmit)} block>
									Next
								</Button>
							</Col>
						</Row>
					</div>
					{/* <PageAnalytics /> */}
				</Form>
			</MainContainer>
		</>
	)
}

export default Step2
