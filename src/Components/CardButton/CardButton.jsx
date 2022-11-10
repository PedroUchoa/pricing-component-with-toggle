import React from 'react'
import './CardButton.css'

function CardButton({name, classname}) {
  return (
      <button className={`button-card ${classname}`}>{name}</button>
  )
}

export default CardButton