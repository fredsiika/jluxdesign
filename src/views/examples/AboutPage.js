import React from 'react'
import { Link } from 'react-router-dom'
// import styled from 'styled-components'
// import Card from '../../components/Cards/Card'
// import Section from '../../components/Sections/Section'
// import WaveSVG from '../../components/Sections/WaveSVG'
// import webcopyData from '../../assets/data/about-page.json'
import Footer from '../../components/Footers/SimpleFooter'
// import { CardText } from 'reactstrap';
import '../app.css'
import NavbarBasic from '../../components/Navbars/NavbarBasic'

const AboutPage = (props) => (
  <>
  <div>
    <NavbarBasic />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>We are JLuxDesgin</h1>
          <p>Transforming Home Improvement technologies to drive growth.</p>
          <p>We started JLuxDesign in <span className="bg-info">insert year company was founded</span>to help empower fellow home-remodeling-entrepreneurs, and businesses increase revenue</p>
          <p>More than <span className="bg-warning">13 years</span> later and hundreds of home renovations later, our business is still doing just that and <strong>more!</strong></p>
          <p>We are working tirelessly to build a robust digital business at JLuxDesign.com and across a myriad of platforms including social, knowledgebase of online articles, and - soon to come - a web and mobile app for our clients.</p>
          <p>We drive conversions, create beautiful experiences and work tirelessly to make your home improvement goals a reality.</p>
          <p>JLuxDesign, LLC is headquartered in Dallas, Texas.</p>
          <Link to="/services/">Check out our services.</Link>
          <div className="Logos">
            <img alt='...' src='/images/logo-sketch.png' width="50" />
            <img alt='...' src='/images/logo-figma.png' width="50" />
            <img alt='...' src='/images/logo-studio.png' width="50" />
            <img alt='...' src='/images/logo-framer.png' width="50" />
            <img alt='...' src='/images/logo-react.png' width="50" />
            <img alt='...' src='/images/logo-swift.png' width="50" />
          </div>
      </div>
    </div>
  </div>
  <Footer />
  </>
)

export default AboutPage