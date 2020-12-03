import React from 'react'
import { useHistory } from 'react-router-dom'
import { useData } from '../../DataContext'
import Typography from '@material-ui/core/Typography'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import { PrimaryButton, BackButton } from './PrimaryButton'
import { MainContainer } from './MainContainer'
import { Form } from './Form'
import { Input } from './Input'
import * as yup from 'yup'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import PageAnalytics from './PageAnalytics'
import JumbotronFluid from '../Jumbotrons/JumbotronFluid'
import { Button, Container, Col, Row } from 'reactstrap'
import ReactHookForm from './ReactHookForm'

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
		},
		mode: 'onBlur',
		resolver: yupResolver(schema),
	})

	const onSubmit = (data) => {
		history.push('./step2')
		setValues(data)

		console.log(data)
	}

	return (
		<>
			<JumbotronFluid />
			<MainContainer>
				<section className="section section-lg pt-lg-10 mt-200">
					<p className="text-center display-3 text-primary">
						<span role="img" aria-label="Memo Emoji">
							📝
						</span>{' '}
						Step 1 - Enter Contact Info
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
						<PrimaryButton con>Next</PrimaryButton>
					</Form>
					{/* <Row>
          <Col className="text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="fullname" name="fullname" placeholder="full name" ref={register} />
                {errors.fullname && <span className="text-warning">Full name is required.</span>}
              <input type="password" name="password" placeholder="password"
                ref={register({
                  required: "This field is required.",
                  minLength: { value: 8, message: "Password must have 8 characters or more." },
                  maxLength: { value: 20, message: "Password must be less than 20 characters." }
                })} />
                {errors.password && <p className="text-warning">{errors.password.message}</p>}
              <input type="submit" />
            </form>

            <div className="btn-group">
              <Button color="darker" size="lg" block disabled>Back</Button>
              <Button color="darker" size="lg" block>Next</Button>
            </div>
          </Col>
        </Row> */}
				</section>
			</MainContainer>
		</>
	)
}

export default Step1
