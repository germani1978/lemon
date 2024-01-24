import React from 'react'
import CallToAction from './CallToAction'
import HomePage from './HomePage'
import Specials from './Specials'
import CustomersSay from './CustomersSay'
import Chicago from './Chicago'
import BookingPage from './BookingPage'

function Main() {
    return (
        <div>
            <CallToAction />
            {/* user to action */}

            <HomePage />
            {/* homepage */}

            <Specials />
            {/* special plates */}

            <CustomersSay />
            {/*Testimonial*/}

            <Chicago />
            {/* short backhistory */}

            <BookingPage />
            {/* reserva page */}
        </div>
    )
}

export default Main
