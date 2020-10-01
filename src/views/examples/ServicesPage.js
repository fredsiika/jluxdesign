import React from 'react'
import { Link } from 'react-router-dom'

const ServicesPage = (props) => (
  <div>
    <h1>{props.title}</h1>
    <p>Welcome to to the Services page</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default ServicesPage