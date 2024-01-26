import React from 'react'
import foto1 from '../../img/Mario and Adrian A_11zon.webp'
import foto2 from '../../img/Mario and Adrian b_11zon.webp'
import './Chicago.css'

// (the component that describes the Little Lemon Chicago restaurant and gives a short backstory for it)

function Chicago() {
    return (
        <div className="chicago">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                accusamus corporis ex modi minus odit est quod tenetur.
                Similique magnam ex esse necessitatibus officia dolorum iure
                voluptatibus aperiam,odit est quod tenetur. Similique magnam ex
                esse necessitatibus officia dolorum iure voluptatibus aperiam.
            </p>
            <img id="foto1" src={foto1} alt="" />
            <img id="foto2" src={foto2} alt="" />
        </div>
    )
}

export default Chicago
