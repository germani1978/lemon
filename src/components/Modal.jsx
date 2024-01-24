import React from 'react'
import Button from './Button'
import './Modal.css'

function Modal({ closeNotification }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content column">
                <h2>YOUR RESERVATION WAS MADE SUCCESSFULY!!!</h2>
                <p>An email was sent with all the details</p>
                <Button text="Close" click={closeNotification} />
            </div>
        </div>
    )
}

export default Modal
