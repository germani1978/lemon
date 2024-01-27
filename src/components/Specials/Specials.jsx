import React from 'react'
import Card from '../Card/Card'
import './Specials.css'
import foto1 from '../../assets/img/greek salad_11zon.webp'
import foto2 from '../../assets/img/bruchetta_11zon.webp'
import foto3 from '../../assets/img/lemon dessert_11zon.webp'

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
        <div id="specials">
            <div id="title">
                <h2>This Weeks specials</h2>
                <button aria-label="click online menu">Online Menu</button>
            </div>
            <div className="cards">
                <Card className="card" data={data[0]} foto={foto1} />
                <Card className="card" data={data[1]} foto={foto2} />
                <Card className="card" data={data[2]} foto={foto3} />
            </div>
        </div>
    )
}

export default Specials
