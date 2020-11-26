import React from 'react'
import './CardCustom.css'

const CardCustom = props => (
  <div className="Card">
    <img
      alt={props.text}
      src={props.img}
    />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
  </div>
)

export default CardCustom