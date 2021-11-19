import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className="container mb-3">
            <h3 className="subscribe-letter text-center">Subscribe to our Newsletter for latest news.</h3>
                <div className="subscribe-box  text-center">  
                    <input className="mb-sm-0" type="text" placeholder="Your Email"/>
                    <button class="submit-newsletter button_outline text-center mt-lg-0 mt-3"> SUBSCSRIBE</button>                
                </div>
                <hr />
                
        </div>
    );
};

export default Subscribe;