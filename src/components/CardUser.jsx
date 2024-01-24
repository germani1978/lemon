import React from 'react'
import foto from '../icon/men1.svg'
import start from '../icon/start.svg'
import './CardUser.css'

function CardUser() {
    return (
        <div className="carduser">
            <img id="start" src={start} alt="start" />
            <div className="profile row">
                <img src={foto} alt="men" />
                <div className="name">
                    <h3>First Name</h3>
                    <h3>Second Name</h3>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti itaque labore id natus rerum!</p>
        </div>
    )
}

export default CardUser
