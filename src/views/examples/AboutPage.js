import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = (props) => (
  <div>
    <h1>{props.title}</h1>
    <p>Welcome to to the About page</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default AboutPage