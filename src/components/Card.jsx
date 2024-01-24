import React from 'react'
import './Card.css'

function Card({ img, title, price, text }) {
    return (
        <div id="card">
            <img src={img} alt="" width="100%" />
            <div className="card-text column">
                <div className="card-title-price">
                    <h3 className="title">{title}</h3>
                    <p className="price">{price}</p>
                </div>
                <p className="text">{text}</p>
                <p className="order">Order a delivery 🛵</p>
            </div>
        </div>
    )
}

export default Card
