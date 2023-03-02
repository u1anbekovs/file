import React from "react";
import BestImg from "../img/Image & bg elements.svg"
import {AiFillCheckSquare} from "react-icons/ai"

const Best = () => {
    return(
        <div id="Best">
            <div className="container">
                <div className="Best">
                    <div className="best-logo">
                        <h1>Cooked by the Best Chefs</h1>
                        <p>Believing neglected so so allowance existence departure in. In design active temper be uneasy. Thirty for remove plenty regard you summer though. He preference connection astonished on of ye.</p>
                        <h6><span><AiFillCheckSquare/></span>A guaranteed delicious meal</h6>
                        <h6><span><AiFillCheckSquare/></span>Food is guaranteed hygienic</h6>
                        <h6><span><AiFillCheckSquare/></span>Cooked quickly</h6>
                    </div>
                    <img src={BestImg} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Best