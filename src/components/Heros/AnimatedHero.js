import React from 'react'

class AnimatedHero extends React.Component {
	render() {
		return (
			<>
				<div class="section section-header">
					<div class="points">
						<div class="point point-floating-1"></div>
						<div class="point point-floating-2"></div>
						<div class="point point-floating-3"></div>
						<div class="point point-floating-4"></div>
						<div class="point point-floating-5"></div>
						<div class="point point-floating-6"></div>
						<div class="point point-floating-7"></div>
						<div class="point point-floating-8"></div>
						<div class="point point-floating-9"></div>
					</div>

					<div class="container">
						<div class="row">
							<div class="col-md-6 text-left col-z-index">
								<h1 class="title">Fully coded UI Tools to create web apps</h1>
								<h4 class="desc">
									UI Kits and Dashboards built on top of Bootstrap, Vue.js,
									React and Angular.
								</h4>
							</div>

							<div class="col-md-6">
								<img
									src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/illustration.jpg"
									class="illustration">
									{' '}
								</img>
							</div>
						</div>
					</div>

					<div class="space-110"></div>

					<div class="card card-plain">
						<div class="card-featured-content">
							<a href="https://www.forbes.com/" target="_blank">
								<img src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/who/forbes.jpg"></img>
							</a>
							<a href="https://entrepreneur.com/" target="_blank">
								<img
									src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/who/entrepreneur.jpg"
									style="width: 150px; top: 2px; position: relative"></img>
							</a>
							<a href="https://www.producthunt.com/" target="_blank">
								{' '}
								<img
									src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/who/product-hunt.jpg"
									style="width: 145px"></img>
							</a>
							<a href="https://www.awwwards.com/" target="_blank">
								{' '}
								<img
									src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/who/awwwards.jpg"
									style="width: 125px"></img>
							</a>
							<a href="https://www.creativebloq.com/" target="_blank">
								{' '}
								<img
									src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/who/creativebloq.jpg"
									style="width: 120px"></img>
							</a>
							<a href="https://speckyboy.com/" target="_blank">
								{' '}
								<img src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/who/speckyboy.jpg"></img>
							</a>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default AnimatedHero
