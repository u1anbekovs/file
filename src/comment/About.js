import React from "react"
import aboutImg from "../img/Image (1).svg"

const About = () => {
    return(
        <div id="About">
            <div className="container">
                <div className="About">
                    <div className="about-logo">
                        <h1>About US</h1>
                        <p>Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms (GMOs). Organic foods include fresh produce, meats, and dairy products as well as processed foods such as crackers, drinks, and frozen meals.</p>
                        <button className="about-btn">LearnMore</button>
                    </div>
                    <img src={aboutImg} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default About