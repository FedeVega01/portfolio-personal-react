import React from 'react';
import'./Card.css'
const Card = ({title,img,descripcion}) => {
    
    return(
        <div className='container-card'>
            <img src={img} alt="" />
            <div className='details'>
                <h2 className='title'>{title}</h2>
                <p className='descripcion'>{descripcion}</p>
            </div>
        </div>
    )
}

export {Card}