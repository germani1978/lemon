import React from 'react'
import CardUser from './CardUser'
import '../components/CustomersSay.css'

// testimonials, including star ratings, customer images and customer details

function CustomersSay() {
    return (
        <div className="users">
            <h1>Testimonials</h1>
            <div className="cont-users container">
                <CardUser />
                <CardUser />
                <CardUser />
                <CardUser />
            </div>
        </div>
    )
}

export default CustomersSay
