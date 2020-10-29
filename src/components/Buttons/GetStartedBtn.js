import React from 'react'
import { Button } from 'reactstrap'

const GetStartedBtn = (props) => {
  return (
    <Button
      className="btn-icon mb-3 mb-sm-0"
      color={props.color}
      href="https://jluxdesign.ghost.io/our-process"
    >
      <span className="btn-inner--icon mr-1">
        <i className="ni ni-spaceship" />
      </span>
      <span className="btn-inner--text">{props.cta}</span>
    </Button>
  )
}



export default GetStartedBtn