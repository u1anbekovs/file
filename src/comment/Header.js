import React from "react";
import {BiSearchAlt2} from "react-icons/bi";
import {AiOutlineShoppingCart} from "react-icons/ai"
const Header = () => {
    return(
        <div id="Header">
            <div className="container">
                <div className="Header">
                    <div className="header-logo">
                        <h1 className="logo-h1">UI.desk</h1>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">Testimonials</a>
                    </div>
                    <div className="header-search">
                        <h1><BiSearchAlt2/></h1>
                        <h1><AiOutlineShoppingCart/></h1>
                        <button className="search-btn">OrderNow</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header