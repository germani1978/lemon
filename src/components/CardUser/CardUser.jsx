import React from 'react'
import foto from '../../icon/men1.svg'
import start from '../../icon/start.svg'
import './CardUser.css'

function CardUser() {
    return (
        <div className="carduser">
            <img id="start" src={start} alt="starts" />
            <div className="profile">
                <img src={foto} alt="men" />
                <div className="name">
                    <h4>First name</h4>
                    <h4>Second name</h4>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti itaque labore id natus rerum!
            </p>
        </div>
    )
}

export default CardUser
