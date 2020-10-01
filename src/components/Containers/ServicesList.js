import React from 'react'
import styled from 'styled-components'


const ServicesList = () => (
  <div class="container">
    <div class="text-center">
      <h3 class="text-muted">Services</h3>
    </div>
    <div class="row">
      <div class="col">
        <h4 class="text-primary">Distributor</h4>
        <p class="lead">We cut out the middleman as distributors</p>
      </div>
      <div class="col">
        <h4 class="text-primary">Fabricator</h4>
        <p class="lead">Elimate additional costs and the liability of working third-party subcontractors. Our fabrication crew.</p>     
          <h4 class="text-primary">Benefit</h4>
          <p class="text-muted">Finding third-party subcontractors qualified to handle your project is a hit or miss.<br />
          <p class="text-muted">Our specialized team of stone fabricators use the highest quality do one thing and one thing only. </p>
          </p>
        </div>
      <div class="col">
        <h4 class="text-primary">Installation</h4>
        <p class="lead">Our in-house team of stone installation specialists willElimate the added cost and liability of working with a separate fabrication team</p>
      </div>
    </div>
  </div>
)

export default ServicesList