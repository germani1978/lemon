import React from 'react'
import foto from '../../img/restauranfood_11zon.webp'
import './Header.css'
import { useNavigate } from 'react-router-dom'

// sometimes referred to as the jumbotron or the hero, this component is the call-to-action section that guides the user to click a call-to-action button while enticing them to do so in as few words as possible

function Header() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/booking')
    }
    return (
        <header>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
                quos, nihil est similique doloribus laboriosam cupiditate eos
                qui consequatur iure sapiente neque perferendis numquam aliquam,
                fuga quod. Architecto, voluptatum esse? Dolor esse quos pariatur
                numquam ea molestiae beatae ullam dolorum repellat
            </p>
            <button onClick={handleClick} aria-label="click reserve">
                Reserve a table
            </button>
            <img id="photo" src={foto} alt="" />
        </header>
    )
}

export default Header
