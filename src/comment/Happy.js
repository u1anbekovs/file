import React from "react";
import avatar from "../img/avatar.svg"
import avatar1 from "../img/avatar (1).svg"
import {BsArrowLeftRight} from "react-icons/bs"
const Happy = () => {
    return(
        <div id="Happy">
            <div className="container">
                <div className="Happy">
                    <h1>Happy Clients Says</h1>
                    <div className="happy-group">
                        <div className="happy-item">
                            <div className="item-img">
                                <img src={avatar} alt=""/>
                                <div>
                                    <h4>KHALIL NAZIR</h4>
                                    <p>CEO of UI.Desk</p>
                                </div>
                            </div>
                            <p>Thirty for remove plenty regard you summer though. He preference Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we.</p>
                        </div>
                        <div className="happy-item">
                            <div className="item-img">
                                <img src={avatar1} alt=""/>
                                <div>
                                    <h4>ZEESHAN ANWER</h4>
                                    <p>CEO of UI Box</p>
                                </div>
                            </div>
                            <p>Thirty for remove plenty regard you summer though. He preference Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we.</p>
                        </div>
                    </div>
                    <span><BsArrowLeftRight/></span>
                </div>
            </div>
        </div>
    )
}
export default Happy