import React from 'react'
import "./Hero.css"
const Hero = ({ Tittle, Description, button }) => {
    return (
        <>
            <div className="main-container">
                <h1>{Tittle}</h1>
                <p>
                    {Description}
                </p>
                <button>{button}</button>
            </div>
        </>
    )
}

export default Hero
