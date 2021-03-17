import React from 'react'
import {Image } from 'semantic-ui-react'
import './style.scss'
export function Card1(props) {
  const {image,description} = props
  return (
    <div className="Card1" style={{backgroundImage : `url(${image})`}}>
      <p className="description">{description}</p> 
    </div>
  )
}
export const Card2 = (params) => {
  
}

