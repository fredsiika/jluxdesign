import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import classnames from "classnames"

// reactstrap components
import {
  // Badge,
  // Button,
  // Card,
  // CardBody,
  // CardImg,
  // FormGroup,
  // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  // Container,
  // Row,
  // Col
} from "reactstrap";
// core components
// import DemoNavbar from "components/Navbars/DemoNavbar.js";
import HomeNavbar from '../../components/Navbars/HomeNavbar';
import CardsFooter from "components/Footers/CardsFooter.js";
import Download from "../IndexSections/Download.js";
// import CustomCard from '../../components/Cards/CardCustom'
import Section from '../../components/Sections/Section'
import WaveSVG from '../../components/Sections/WaveSVG'
// import CardsFooter from "components/Footers/CardsFooter.js";
// import Download from "../IndexSections/Download.js";
import CustomCard from '../../components/Cards/CardCustom'
// import Section from '../../components/Sections/Section'
// import WaveSVG from '../../components/Sections/WaveSVG'
import Footer from '../../components/Footers/CardsFooter'
// import articleresources from '../../assets/data/about-page.json'
// import Cell from 'components/Cells/Cell'

const ServicesPage = (props) => (
  <div>
    <HomeNavbar />
    <div className="Hero">
      <div class="HeroGroup">
      <h1>We Design, Build </h1>
        <Link to="/knowledge-base">Check out our knowledge Base</Link>
      </div>
    </div>
    {/* <div className="cards">
      <div className="CardGroup">
        <CustomCard text-dark
          title="Distribution"
          text="10 sections"
          image='https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
          logo='../../assets/data/img/brand/logo-jluxdesign.png'
        />
        <CustomCard
          title="Fabrication"
          text="10 sections"
          image='https://cdn.vox-cdn.com/thumbor/pnYzBKjmr9JLwbOhag8xUvq8yc0=/0x0:1280x960/600x450/filters:focal(0x0:1280x960):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19610487/Countertops_Westerly_Kitchen_Details-529.0.jpg'
          logo='../../assets/data/img/brand/logo-jluxdesign.png'
        />
        <CustomCard
          title="Installation"
          text="10 sections"
          image='https://cdn.vox-cdn.com/thumbor/pnYzBKjmr9JLwbOhag8xUvq8yc0=/0x0:1280x960/600x450/filters:focal(0x0:1280x960):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19610487/Countertops_Westerly_Kitchen_Details-529.0.jpg'
          logo='../../assets/data/img/brand/logo-jluxdesign.svg'
        />
      </div>
    </div> */}
    {/* <Section
      image='https://p75.f0.n0.cdn.getcloudapp.com/items/4guJbv1Y/wallpaper4.jpg?source=viewer&v=576eaabc2d1c0df2d4cdc7127a9e7626'
      logo='https://cdn.vox-cdn.com/uploads/chorus_asset/file/19624670/HomeAdvisor_logo.0.png'
      title='Our Proud Sponsors'
      text='JLuxDesign are made possible with the ongoing support provided by our national underwriters.'
    /> */}
    <SectionCaption>12 sections - 6 hours</SectionCaption>
     <SectionCellGroup>
        {/* <Cell
          title="Countertops - Overview"
          text="Discover what you need to know about countertops—from material choices and installation to the pros and cons of each."
          image="https://cdn.vox-cdn.com/thumbor/pnYzBKjmr9JLwbOhag8xUvq8yc0=/0x0:1280x960/600x450/filters:focal(0x0:1280x960):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19610487/Countertops_Westerly_Kitchen_Details-529.0.jpg"
        /> */}
     </SectionCellGroup>
    <Footer />
  </div>
)

export default ServicesPage

// Styled Components

const SectionCaption = styled.p`
  font-weight: 600
`;

const SectionCellGroup = styled.div`

`;