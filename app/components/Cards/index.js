import React from 'react'
import {Image } from 'semantic-ui-react'
import './style.scss'
export function Card1(props) {
  const {image,description} = props
  return (
    <div className="Card1" >
      <div className="image" style={{backgroundImage : `url(${image})`}}></div>
      <p className="description">{description.length > 250 ? description.substring(0,250) + '...' : description}</p> 
    </div>
  )
}
export const Card2 = (props) => {
  const {image,description, title ,newCard} = props
  return(
    <div className="Card2" style = {{position : `${newCard ? 'relative' : ''}`}}>
      <img src={image} alt={title + ' image'}/>
      <div className="content">
        <h4 className="description">{description}</h4>
        <h3 className="title"> {title}</h3>
      </div>
      {
        newCard &&
        <div className="ribbon"><span>NEW</span></div>
      }
    </div>
  )
}
export const Card3 = (props) => {
  const {image,description,title, action} = props
  console.log(props)
  return(
    <div className="Card3" >
      <img src={image} alt={title + ' image'}/>
      <div className="Card3content">
        <h3 className="Card3title"> {title}</h3>
        <h4 title={description} className="Card3description">
          {
            description && description.length > 450 
            ? 
            description.substring(0,450) + '...'
            : 
            description
          }</h4>
        <button className="btn2__secondary">LEARN MORE</button>
      </div>
    </div>
  )
}

