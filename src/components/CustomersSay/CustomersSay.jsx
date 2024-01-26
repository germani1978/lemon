import React from 'react'
import CardUser from '../CardUser/CardUser'
import './CustomersSay.css'

// testimonials, including star ratings,
//customer images and customer details

function CustomersSay() {
    return (
        <div className="users">
            <h2>Testimonials</h2>
            <div className="cont-users">
                <CardUser />
                <CardUser />
                <CardUser />
                <CardUser />
            </div>
        </div>
    )
}

export default CustomersSay
