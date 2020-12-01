import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import TeamMember from '../../components/Teams/TeamMember'

const OurTeamSection = (props) => {
	return (
		<section className="section section-lg">
			<Container>
				<Row className="justify-content-center text-center mb-lg">
					<Col lg="8">
						<h2 className="display-3">The amazing Team</h2>
						<p className="lead text-muted">
							What makes us special is a direct result of our hard working team
							who work tirelessley to deliver the best quality work.
						</p>
					</Col>
				</Row>
				<Row>
					<TeamMember
						name="Jonathan Moraa"
						jobTitle="Founder/CEO"
						src={require('assets/img/theme/team-1-800x800.jpg')}
						facebook="jmoraa"
						twitter="jmoraa"
						instagram="jmoraa"
						linkedin="jmoraa"
					/>
					<TeamMember
						name="Spanish Enquires"
						jobTitle="Business Partner"
						src={require('assets/img/theme/team-2-800x800.jpg')}
						facebook="senquires"
						twitter="senquires"
						instagram="senquires"
						linkedin="senquires"
					/>
					<TeamMember
						name="Alexandra Liu"
						jobTitle="Stone Distribution Specialist"
						src={require('assets/img/theme/team-3-800x800.jpg')}
						facebook="aliu"
						twitter="aliu"
						instagram="aliu"
						linkedin="aliu"
					/>
					<TeamMember
						name="Carol Baskins"
						jobTitle="Husband Murderer"
						src="https://pagesix.com/wp-content/uploads/sites/3/2020/09/91020-carole-baskin-main.jpg?quality=90&strip=all&w=1200"
						facebook="apoelinitz"
						twitter="apoelinitz"
						instagram="apoelinitz"
						linkedin="apoelinitz"
					/>
					<TeamMember
						name="Lauri Oliver"
						jobTitle="Stone Fabricator"
						src={require('assets/img/theme/team-4-800x800.jpg')}
						facebook="loliver"
						twitter="loliver"
						instagram="loliver"
						linkedin="loliver"
					/>
				</Row>
			</Container>
		</section>
	)
}

export default OurTeamSection
