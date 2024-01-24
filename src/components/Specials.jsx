import React from 'react'
import Button from './Button'
import Card from './Card'
import './Specials.css'
import foto1 from '../img/greek salad.jpg'
import foto2 from '../img/bruchetta.jpg'
import foto3 from '../img/lemon dessert.jpg'

// the component that loops over the specials that come from a data source

const data = [
    {
        title: 'Greek salad',
        text: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
        price: '12.99'
    },
    {
        title: 'Greek salad',
        text: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
        price: '12.99'
    },
    {
        title: 'Greek salad',
        text: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
        price: '12.99'
    }
]

function Specials() {
    return (
        <div className="special container">
            <div className="specials-title row">
                <h2>This Weeks specials</h2>
                <Button text="Online Menu" />
            </div>
            <div className="cards">
                <Card img={foto1} title={data[0].title} text={data[0].text} price={data[0].price} />
                <Card img={foto2} title={data[1].title} text={data[1].text} price={data[1].price} />
                <Card img={foto3} title={data[2].title} text={data[2].text} price={data[2].price} />
            </div>
        </div>
    )
}

export default Specials
