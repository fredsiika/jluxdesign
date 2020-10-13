import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = (props) => {
  return (
    <div>
      <div className="">
        <h1 className="text-center">404</h1>
        <p className="text-center text-muted">Oops, looks like you've hit a page that doesn't exist.</p>
      </div>
      <div className="sitemap">
        <h2>Perhaps you meant to be here?</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/knowledge-base">Knowledge Base</Link>
          </li>
          <li>
            <Link to="/services">Our Services</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NotFound
