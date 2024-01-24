import React from 'react'
import logo from '../icon/Logo .svg'
import './Nav.css'

// navigation of the website

function Nav() {
    return (
        <nav className="container">
            <img src={logo} alt="" />
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservations</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav