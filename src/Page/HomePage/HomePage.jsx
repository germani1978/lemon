import React from 'react'
import Specials from '../../components/Specials/Specials'
import Chicago from '../../components/Chicago/Chicago'
import CustomerSay from '../../components/CustomersSay/CustomersSay'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
// the component for the homepage

function HomePage() {
    return (
        <div>
            <Header />
            <Specials />
            <CustomerSay />
            <Chicago />
            <Footer />
        </div>
    )
}

export default HomePage
