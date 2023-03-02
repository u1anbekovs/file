import React from "react";
import chooseImg from "../img/Icon.svg"
import chooseImg1 from "../img/Icon (1).svg"
import chooseImg2 from "../img/leaf 1.svg"

const Choose = () => {
    return (
        <div id="Choose">
            <div className="container">
                <div className="Choose">
                    <div className="choose-logo">
                        <h1>Why Choose US?</h1>
                        <p>Organic food is grown without the use of synthetic chemicals</p>
                    </div>
                    <div className="choose-img">
                        <div className="choose-block">
                            <img src={chooseImg} alt=""/>
                            <h2>Easy to order</h2>
                            <p>foods include fresh produce, meats as well as processed</p>
                        </div>
                        <div className="choose-block">
                            <img src={chooseImg1} alt=""/>
                            <h2>Live Order</h2>
                            <p>Place your online Order easily and get the food instantly</p>
                        </div>
                        <div className="choose-block">
                            <img src={chooseImg2} alt=""/>
                            <h2>100% Organic</h2>
                            <p>Organic food is grown without the use of synthetic chemicals</p>
                        </div>
                    </div>
                    <div className="choose-number">
                        <div className="number-block">
                            <h1>40+</h1>
                            <p>Food Partners</p>
                        </div>
                        <div className="number-block">
                            <h1>459+</h1>
                            <p>Trusted Clients</p>
                        </div>
                        <div className="number-block">
                            <h1>12k+</h1>
                            <p>Order Online</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Choose