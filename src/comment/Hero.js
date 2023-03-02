import React from "react";
import imgHero from "../img/header Image.svg"

const Hero = () => {
    return (
        <div id="Hero">
            <div className="container">
                <div className="Hero">
                    <div className="hero-text">
                        <h1>Just <span>Eat healthy</span> food to live a healthier life</h1>
                        <p>Enjoy a healthy life by eating healthy foods that have extraordinary flavors that make your
                            life healthier for today and in the future</p>
                        <button className="hero-btn">OrderNow</button>
                    </div>
                    <img src={imgHero} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Hero