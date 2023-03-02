import React from "react";

const CTA = () => {
    return(
        <div id="Cta">
            <div className="container">
                <div className="Cta">
                    <div className="cta-logo">
                        <h1>Subscribe to the Newsletter</h1>
                        <p>Enter your email below to get our daily offers and news</p>
                    </div>
                    <div className="cta-btn">
                        <input type="text" placeholder="Enter your email."/>
                        <button>GetStarted</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CTA