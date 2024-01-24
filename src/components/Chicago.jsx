import React from 'react'
import foto1 from '../img/Mario and Adrian A.jpg'
import foto2 from '../img/Mario and Adrian b.jpg'
import '../components/Chicago.css'

// (the component that describes the Little Lemon Chicago restaurant and gives a short backstory for it)

function Chicago() {
    return (
        <div className="container chicago">
            <div className="texto">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos accusamus corporis ex modi minus odit
                    est quod tenetur. Similique magnam ex esse necessitatibus officia dolorum iure voluptatibus
                    aperiam,odit est quod tenetur. Similique magnam ex esse necessitatibus officia dolorum iure
                    voluptatibus aperiam.
                </p>
            </div>
            <div className="fotoschicago">
                <img className="foto1" src={foto1} alt="" />
                <img className="foto2" src={foto2} alt="" />
            </div>
        </div>
    )
}

export default Chicago
