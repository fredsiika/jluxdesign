import React from 'react'
import { Button, Col } from 'reactstrap'

const TeamMember = (props) => {
	return (
		<>
			<Col className="mb-5 mb-lg-0" lg="3" md="6">
				<div className="px-4">
					<img
						alt="..."
						className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
						src={props.src}
						style={{ width: '200px' }}
					/>
					<div className="pt-4 text-center">
						<h5 className="title">
							<span className="d-block mb-1">{props.name}</span>
							<small className="h6 text-muted">{props.jobTitle}</small>
						</h5>
						<div className="mt-3">
							<Button
								className="btn-icon-only rounded-circle"
								color="warning"
								href={`https://twitter.com/${props.twitter}`}
								onClick={(e) => e.preventDefault()}>
								<i className="fa fa-twitter" />
							</Button>
							<Button
								className="btn-icon-only rounded-circle ml-1"
								color="warning"
								href={`https://facebook.com/${props.facebook}`}
								onClick={(e) => e.preventDefault()}>
								<i className="fa fa-facebook" />
							</Button>
							<Button
								className="btn-icon-only rounded-circle ml-1"
								color="warning"
								href={`https://instagram.com/${props.instagram}`}
								onClick={(e) => e.preventDefault()}>
								<i className="fa fa-instagram" />
							</Button>
							<Button
								className="btn-icon-only rounded-circle ml-1"
								color="warning"
								href={`https://linkedin.com/in/${props.linkedin}`}
								onClick={(e) => {
									e.preventDefault()
								}}>
								<i className="fa fa-linkedin" />
							</Button>
						</div>
					</div>
				</div>
			</Col>
		</>
	)
}

export default TeamMember
