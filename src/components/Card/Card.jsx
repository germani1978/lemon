import React from 'react'
import './Card.css'

function Card({ data, foto }) {
    return (
        <div id="card">
            <img src={foto} alt="dishes" width="100%" />
            <div id="titles">
                <h3 className="title">{data.title}</h3>
                <p className="price">{data.price}</p>
            </div>
            <p className="text">{data.text}</p>
            <p className="order">Order a delivery 🛵</p>
        </div>
    )
}

export default Card
