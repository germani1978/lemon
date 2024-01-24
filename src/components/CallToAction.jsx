import React from 'react'
import Button from './Button'
import foto from '../img/restauranfood.jpg'
import './CallToAction.css'

// sometimes referred to as the jumbotron or the hero, this component is the call-to-action section that guides the user to click a call-to-action button while enticing them to do so in as few words as possible

function CallToAction() {
    return (
        <div className="action">
            <div className="container action-container">
                <div className="action-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, quos, nihil est similique
                        doloribus laboriosam cupiditate eos qui consequatur iure sapiente neque perferendis numquam
                        aliquam, fuga quod. Architecto, voluptatum esse? Dolor esse quos pariatur numquam ea molestiae
                        beatae ullam dolorum repellat
                    </p>
                    <Button text="Reserve a table" />
                </div>
                <div className="action-photo">
                    <img id="photo" src={foto} alt="" />{' '}
                </div>
            </div>
        </div>
    )
}

export default CallToAction
