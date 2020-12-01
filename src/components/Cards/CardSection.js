import React from 'react'

const CardSection = () => {
	return (
		<div className="Cards">
			<h2 className="">12 DIY Guides, more coming</h2>
			{/* Card components */}
			<div className="CardGroup">
				<Card
					title="Kitchen"
					text="Living Spaces"
					// image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
				/>
				<Card
					title="Bathroom"
					text="Living Spaces"
					image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
				/>
				<Card
					title="Outdoor"
					text="Living Spaces"
					image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
				/>
				<Card
					title="Commercial"
					text="Living Spaces"
					image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
				/>
				<Card
					title="Powerder Room"
					text="Living Spaces"
					src={require('../../assets/img/backgrounds/living-space-01.jpg')}
				/>
			</div>
			{/* End Card components */}
		</div>
	)
}

export default CardSection
