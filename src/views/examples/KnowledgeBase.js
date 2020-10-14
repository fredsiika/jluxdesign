import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbars/NavbarBasic'
import Footer from '../../components/Footers/SimpleFooter'

const KnowledgeBase = () => {
  return (
    <div>
    <Navbar />
      <div className="Hero">
        <div className="HeroGroup">
          <h1>A look <br />beneth the surface</h1>
          <p>Complete guides, resources and DIY hacks about tile and stone. Without going too deep.</p>
          <Link to="/page-2/">Learn About Tile and Stone</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default KnowledgeBase
