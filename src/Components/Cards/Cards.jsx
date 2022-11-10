import React from 'react'
import CardButton from '../CardButton/CardButton'
import './Cards.css'

function Cards({ className, title, classNameInicial,value }) {
  return (
    <div className={`cards ${className}`}>
      <span>{title}</span>
      <div className='value-container'>
        <p>$</p>
        <h2>{value}</h2>
      </div>
      <div className='infos-container'>
        <p>500 Gb Storage</p>
        <p>2 Users Allowed</p>
        <p>Send up to 3 GB</p>
      </div>
      <CardButton name='Learn More' classname={classNameInicial}/>
    </div>
  )
}

export default Cards