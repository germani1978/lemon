import React from 'react'
import './Footer.css'
import logo from '../../assets/icon/Logo.svg'

function Footer() {
    return (
        <footer>
            <a href="#header">
                <img src={logo} alt="" />
            </a>

            <div>
                <h3>Doormat Navigation</h3>
                <p>Occasional menu </p>
                <a href="#chicago">
                    <p>About</p>
                </a>
                <a href="#specials">
                    <p>Menu</p>
                </a>
                <a href="/booking">
                    <p>Reservation</p>
                </a>
                <a href="#header">
                    <p>Order Online</p>
                </a>
                <p>Login</p>
            </div>
            <div>
                <h3>Contact</h3>
                <p>54 Saint Street </p>
                <p>777-888-1234</p>
                <p>jhon@gmail.com</p>
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
