import React from 'react'
import './CardsContainer.css'

function CardsContainer({ children }) {
    return (
        <div className='cards-container'>
            {children}
        </div>
    )
}

export default CardsContainer