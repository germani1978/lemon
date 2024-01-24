import React from 'react'
import Specials from './Specials'
import Chicago from './Chicago'
import CustomerSay from './CustomersSay'
import CallToAction from './CallToAction'
// the component for the homepage

function HomePage() {
    return (
        <div>
            <CallToAction />
            {/* move user to accion */}

            <Specials />
            {/* special oferts */}

            <CustomerSay />
            {/* testiomy user */}

            <Chicago />
            {/* resume and history of brand */}
        </div>
    )
}

export default HomePage
