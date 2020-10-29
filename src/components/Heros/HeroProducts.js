import React from 'react'
import './HeroProducts.css'
import CardScroll from '../Cards/CardScroll'

function HeroProducts() {
  return (
    <div className="bg-dark text-white space-2 overflow-hidden">
      <div className="container-fluid">
        <div class="row no-gutters align-items-center">
          <div className="col-lg-5 mt-0 mb-lg-0 pl-lg-5">

            <h6 className="text-uppercase font-weight-medium letter-spacing-0_06 mb-3 mt-0 pt-0 text-white">Get inspired</h6>
            <h2 class="text-lh-xs mb-4 text-info">Find the perfect tile,<br class="d-none d-lg-inline-block" />stone, or mosaic your new place</h2>
            <p class="text-white-70">Discover inspiration for your next design project.</p>

          </div>
          <div className="col-lg-7 mb-5 mb-lg-0">
            <CardScroll title="Rooms" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroProducts
