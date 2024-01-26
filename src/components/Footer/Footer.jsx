import React from 'react'
import './Footer.css'
import logo from '../../icon/Logo.svg'

function Footer() {
    return (
        <footer>
            <img src={logo} alt="" />
            <div>
                <h3>Doormat Navigation</h3>
                <p>Occasional menu </p>
                <p>About</p>
                <p>Menu</p>
                <p>Reservation</p>
                <p>Order Online</p>
                <p>Login</p>
            </div>
            <div>
                <h3>Contact</h3>
                <p>Adress</p>
                <p>Phone number</p>
                <p>Email</p>
            </div>
            <div>
                <h3>Social Medial Link</h3>
                <p>Adress</p>
                <p>Phone number</p>
                <p>Email</p>
            </div>
        </footer>
    )
}

export default Footer
