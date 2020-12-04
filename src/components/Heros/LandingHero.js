import React from 'react'
import HeroProducts from './HeroProducts'
import GetStartedBtn from '../Buttons/GetStartedBtn'
import { Button } from 'reactstrap'
import CTAButton from '../Buttons/CtaButton'
import HeroWebCopy from '../Heros/HeroWebCopy'

const LandingHero = () => {
	return (
		<div>
			<div className="hero-bg gradient-overlay-dark-v1 bg-img-hero-center">
				<div className="hero-animation-1 HeroGroup hero-bg-group w-lg-50 w-md-80 mx-md-auto space-2 space-3--sm space-4--lg text-center text-white">
					{/* Title */}
					<HeroWebCopy />
					{/* CTA Buttons */}
					<GetStartedBtn cta="Get Estimate" color="darker" block />
				</div>
				{/* Hero Products */}
				<HeroProducts />
			</div>
		</div>
	)
}

export default LandingHero
