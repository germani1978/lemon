import React from 'react'
import './ConfirmedBooking.css'
import { useNavigate } from 'react-router-dom'

function ConfirmedBooking() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>YOUR RESERVATION WAS MADE SUCCESSFULY!!!</h2>
                <p>An email was sent with all the details</p>
                <button onClick={handleClick} aria-label="Close">
                    Close
                </button>
            </div>
        </div>
    )
}

export default ConfirmedBooking
