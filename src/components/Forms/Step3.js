import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers'
import { useData } from 'DataContext'
import { FileInput } from './FileInput'
import { Form } from './Form'
import MainContainer from 'components/Forms/MainContainer'
import LayoutForm from './LayoutForm';
import { ProgressBar3 } from 'components/Forms/ProgressBar'
import {
	Alert,
	Button,
	Container,
	Col,
	FormGroup,
	FormText,
	Input,
	Label,
	Row,
	// Textarea
} from 'reactstrap'

// import { BackButton, PrimaryButton } from './PrimaryButton'

const schema = yup.object().shape({
	textarea: yup
		.string()
})

export const Step3 = () => {
	const history = useHistory()
	const { data, setValues } = useData()
	const { register, handleSubmit, control, watch, errors } = useForm({
		defaultValues: {
			files: data.files,
			textarea: data.textarea
		},
		mode: 'onClick',
		resolver: yupResolver(schema),
	})

	const textarea = watch('textarea')

	const goBack = (data) => {
		history.push('./step2')
		setValues(data)

		console.log('Back Button pressed. Navigating back to "/page2".\n', data)
	}
	const onSubmit = (data) => {
		history.push('./result')
		setValues(data)
		console.log('"Next" button pressed. Navigating to "/results"\n', data)

	}

	const UploadTooltip = (
		<Container>
			<div className="uploadTooltip" style={{  }}>
				<Row>
					<Col md="6">
						<div className="good-example mt-5">
							<p className="text-success lead">Good Example</p>
							<img src="https://heyremodelers.com/demo/countertops/wp-content/uploads/2020/04/good.jpg"></img>
						</div>
					</Col>
					<Col md="6">
						<div className="good-example mt-5">
							<p className="text-warning lead">Bad Example</p>
							<img src="https://heyremodelers.com/demo/countertops/wp-content/uploads/2020/04/bad.jpg"></img>
						</div>
					</Col>
				</Row>
			</div>
		</Container>
	)

	return (
		<>
			<LayoutForm>
			<ProgressBar3 />
				<MainContainer>
					<h3 className="text-center display-3 text-primary">
						<span
							className="text-left d-sm-inline"
							role="img"
							aria-label="Camera Emoji">
							📷
						</span>{' '}
						Step 3 - Upload Photos
					</h3>
					<span className="h3 text-muted">
						Add 2-4 pictures from different angles. Up to 5 images, max 5 MB each.
					</span>
					<hr className="w-100" />
					<Alert color="primary">
						<strong>Tip:{' '}</strong><br />
						Good photos should have clear shots of your counter
						area and relative size references to cabinets and/or appliances. Use the good and bad photos guideline at the bottom of this page for the most accurate estimate. <span className="" rol="img" aria-label="downwards-black-arrow emoji snippet">⬇</span>
					</Alert>
					<hr className="w-100" />

					<Form onSubmit={handleSubmit(onSubmit)}>
						<FileInput name="files" control={control} />
						<FormGroup>
							<Label htmlFor="additionalInfo">
								<span className="h4 text-primary">
									Additional Info{' '}
									<small className="text-muted">
										Please provide any additional info to help provide a quote and
										enter all sizes of tops needed.
									</small>
								</span>
							</Label>
							<Input
								type="textarea"
								name="textarea"
								id="textarea"
								rows="12"
								ref={register}
								defaultValue={textarea}
								control={control}
								error={!!errors?.textarea.message}
								helperText={errors?.textarea.message}

							/>
							<FormText color="muted" className="small">
							</FormText>
						</FormGroup>
						<div className="mb-5">
							<Row>
								<Col xs="6">
									<Button color="dark" block onClick={handleSubmit(goBack)}>
										Back
									</Button>
								</Col>
								<Col xs="6">
									<Button color="primary" onClick={handleSubmit(onSubmit)} block>
										Next
									</Button>
								</Col>
							</Row>
						</div>
					</Form>
					{UploadTooltip}
				</MainContainer>
			</LayoutForm>
		</>
	)
}

export default Step3

// Content defaultValues
const placeholderText = 'Insert First Name'
const namePlaceholder = (<span className='text-warning'></span>)
const sampleTextarea = (`Hi, my name is <INSERT NAME>

I'm interested in browsing your catalog of materials for my:

- kitchen | bath | outdoor | fireplace | other> project.

I need some help finding a tile that looks like wood planks or concrete, to those that give a classic, modern or rustic look, find the ideal material based on your vision for space.

Thanks!

<INSERT NAME>
	`)