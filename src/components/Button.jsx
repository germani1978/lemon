import React from 'react'
import '../components/Button.css'

function Button({ text, click }) {
    return (
        <div>
            <button onClick={click}>{text}</button>
        </div>
    )
}

export default Button
