import React from 'react';
import'./Card.css'
const Card = ({img,descripcion}) => {
    
    return(
        <div className='card-skill'>
            <img src={img} alt="" />
            <div className='details-skill'>
                <p className='descripcion-skill'>{descripcion}</p>
            </div>
        </div>
    )
}

export {Card}