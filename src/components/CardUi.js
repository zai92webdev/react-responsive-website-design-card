import React from 'react'
import '../styles/CardUi.css'

function CardUi({img, name, date}) {
    return (
        <div className='card'>
            <div className='card__preview'>
            { img && <img src={img} alt="img"/>}
            </div>

            <div className='card__detail'>
                <h4>{name}</h4>
                <h6>{date}</h6>
                <button>Download</button>
            </div>

        </div>
    )
}

export default CardUi
