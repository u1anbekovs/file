import React from "react"
import specialImg from "../img/image (3).svg"
import specialImg1 from "../img/image (4).svg"
import specialImg2 from "../img/image (5).svg"

const Special = () => {
    return(
        <div id="Special">
            <div className="container">
                <div className="Special">
                    <div className="special-logo">
                        <h1>Special Dishes for you</h1>
                        <p>Made with premium & 100% Organic ingredients</p>
                    </div>
                    <div className="special-group">
                        <div className="special-item">
                            <img src={specialImg} alt=""/>
                            <h3>Green Salad</h3>
                            <p>A salad combined witha delicious
                                cut of bacon and mixed with tasty
                                and fresh sesome oil.</p>
                        </div>
                        <div className="special-item">
                            <img src={specialImg1} alt=""/>
                            <h3>Beef Salad</h3>
                            <p>A salad combined witha delicious
                                cut of bacon and mixed with tasty
                                and fresh sesome oil.</p>
                        </div>
                        <div className="special-item">
                            <img src={specialImg2} alt=""/>
                            <h3>Nut Salad</h3>
                            <p>A salad combined witha delicious
                                cut of bacon and mixed with tasty
                                and fresh sesome oil.</p>
                        </div>
                    </div>
                    <div className="btn-special">
                        <button className="special-btn">ViewAll</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Special