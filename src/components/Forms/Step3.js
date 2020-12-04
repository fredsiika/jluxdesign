import React from 'react'
import { useHistory } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useData } from '../../DataContext'
import { FileInput } from './FileInput'
import { Form } from './Form'
import JumbotronFluid from '../Jumbotrons/JumbotronFluid'
import {
	Button,
	Container,
	Col,
	FormGroup,
	FormText,
	Input,
	Label,
	Row,
	Textarea
} from 'reactstrap'
// import { BackButton, PrimaryButton } from './PrimaryButton'
// import Typography from '@material-ui/core/Typography'
// import { MainContainer } from './MainContainer'

export const Step3 = () => {
	const history = useHistory()
	const { data, setValues } = useData()
	const { control, handleSubmit } = useForm({
		defaultValues: {
			files: data.files,
		},
	})

	const onSubmit = (data) => {
		history.push('./result')
		setValues(data)
	}

	const sampleContactLetter = `Hi, my name is <mark>[insert first name]</mark>.

I'm interested in browsing your catalog of materials for my <mark>kitchen | bath | outdoor | fireplace | other> project.<mark>

I need some help finding a tile that looks like wood planks or concrete, to those that give a classic, modern or rustic look, find the ideal material based on your vision for space.

Thanks!
<mark>[Your name]</mark>
`

	return (
		<>
			<JumbotronFluid />
			<Container>
				<h3 className="text-center display-3 text-primary">
					<span
						className="text-left d-sm-inline"
						role="img"
						aria-label="Canera Emoji">
						📷
					</span>{' '}
					Step 3 - Upload Photos
				</h3>
				<p className="display-4">
					Add 2-4 pictures from different angles. Up to 5 images, max 5 MB each.
				</p>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<FileInput name="files" control={control} />

					<FormGroup>
						<Label for="additionalInfo">
							<span className="h4 text-primary">
								Additional Info{' '}
								<small className="text-muted">
									Please provide any additional info to help provide a quote and
									enter all sizes of tops needed.
								</small>
							</span>
						</Label>
						<Input type="textarea" name="text" id="additionalInfo" rows="12" defaultValue={sampleContactLetter} />
						<FormText color="muted" className="small">
						</FormText>
					</FormGroup>
					<hr />
					<FormGroup>
						<Label for="exampleFile">File</Label>
						<Input type="file" name="file" id="exampleFile" />
						<FormText color="muted">
							This is some placeholder block-level help text for the above input.
							It's a bit lighter and easily wraps to a new line.
						</FormText>
					</FormGroup>

					<div className="pb-6">
						<Row>
							<Col sm="6">
								<Button href="/quote/step2" color="darker" block>
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
					<Row>
						<Col md="6" className="pr-1">
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
						<div className="photo-tips mt-5">
							<Label className="lead">Tip</Label>
							<p className="lead text-default">
								Use the good and bad photos as a guideline for the most accurate
								estimate. Good photos should have clear shots of your counter
								area and relative size references to cabinets and/or appliances.
							</p>
						</div>
					</Row>
					<hr />
				</Form>
			</Container>
		</>
	)
}

export default Step3
