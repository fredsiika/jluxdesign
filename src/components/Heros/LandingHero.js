import React from 'react'
import HeroProducts from './HeroProducts'
import HeroWebCopy from '../Heros/HeroWebCopy'
import { Button } from 'reactstrap'

const LandingHero = () => {
	return (
		<div>
			<div className="hero-bg gradient-overlay-dark-v1 bg-img-hero-center">
				<div className="hero-animation-1 HeroGroup hero-bg-group w-lg-50 w-md-80 mx-md-auto space-2 space-3--sm space-4--lg text-center text-white">
					<HeroWebCopy />
					<div className="text-center">
						<Button
							className=""
							type="submit"
							className="mt-4"
							color="primary"
							type="button"
							href="tel:+1972-207-3269"
							block>
							Call Us
						</Button>
						<Button
							className=""
							type="submit"
							className="mt-4"
							color="darker"
							type="button"
							href="/quote"
							block>
							Get Quote
						</Button>
					</div>
				</div>
				<HeroProducts />
			</div>
		</div>
	)
}

export default LandingHero
