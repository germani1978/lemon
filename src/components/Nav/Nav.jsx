import React, { useState } from 'react'
import './Nav.css'
import logo from '../../assets/icon/Logo .svg'
import menuIcon from '../../assets/icon/menu.svg'

// navigation of the website

function Nav() {
    // change the view between mobile or desk
    const [mobile, setMobile] = useState(false)

    const toggleView = () => {
        setMobile(!mobile)
    }

    return (
        <nav>
            <a href="/">
                <img src={logo} alt="logo" />
            </a>

            <img
                className="menu-icon"
                src={menuIcon}
                alt=""
                onClick={toggleView}
            />

            <ul className={`${mobile ? 'visible' : ''}`}>
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
