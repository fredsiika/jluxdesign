import React from 'react';
import '../app.css'
import NavbarBasic from '../../components/Navbars/NavbarBasic'
import SimpleFooter from '../../components/Footers/SimpleFooter';
import {
  Button,
  Container
} from 'reactstrap';
import LogoBrandsGroup from '../../components/Icons/LogoBrandsGroup'

const AboutPage = (props) => (
  <>
  <div>
    <NavbarBasic />
    <div className="hero-bg-kitchen gradient-overlay-dark-v1 bg-img-hero">
      <div className="HeroGroup hero-bg-group w-lg-50 w-md-80 mx-md-auto space-2 space-3--sm space-4--lg text-center text-white">
        <h1 className="text-secondary display-1">About Us</h1>
        <p className="text-left text-secondary display-4">
          We are J Lux Design.<br />
          Transforming Home Improvement technologies to drive growth.
        </p>
      </div>
    </div>
    <section className="section pb-250 bg-secondary">
      <Container>
        <div id="#our-story" className="our-story pb-5">
          <h3 className="display-3">Our Story</h3>
          <p>We started JLuxDesign in <span className="bg-info">insert year company was founded</span>to help empower fellow home-remodeling-entrepreneurs, and businesses increase revenue</p>
          <p>More than <span className="bg-warning">13 years</span> later and hundreds of home renovations later, our business is still doing just that and <strong>more!</strong></p>
          <p>We are working tirelessly to build a robust digital business at JLuxDesign.com and across a myriad of platforms including social, knowledgebase of online articles, and - soon to come - a web and mobile app for our clients.</p>
          <p>We drive conversions, create beautiful experiences and work tirelessly to make your home improvement goals a reality.</p>
          <p>JLuxDesign, LLC is headquartered in Dallas, Texas.</p>
        </div>

        <div id="#our-team" className="our-team pb-5">
          <h3 className="display-3">Our Team</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium repellendus consequuntur officia, voluptatem cum laborum debitis totam repudiandae enim. Exercitationem dignissimos tempora inventore laboriosam saepe error voluptate corporis. Fugiat.</p>
        </div>

        <div id="#our-work" className="our-work pb-5">
          <h3 className="display-3">Our Work</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam cumque praesentium doloribus quos nostrum, assumenda deleniti, adipisci voluptate in debitis quidem amet perferendis similique! Dolorem magnam aspernatur accusamus officiis!</p>
        </div>
      </Container>
      <LogoBrandsGroup title="Our Brands" text="Great Pricing, Premium Quality Product and Excellent Customer Service!" />
      <div className="text-center display-4">
        <Button
          // className="text-primary"
          type="button"
          color="darker"
          href="/contact"
          >
          Lets Get Started
        </Button>
      </div>
    </section>
  </div>
  <SimpleFooter />
  </>
)

export default AboutPage