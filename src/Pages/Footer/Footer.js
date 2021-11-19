import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const fb = <FontAwesomeIcon icon={faPhone} />;
    const instagram = <FontAwesomeIcon icon={faFacebook} />;
    const twitter = <FontAwesomeIcon icon={faTwitter} />;
    return (
        <div className="footer-container mt-5 card-contain">
            <div className="container">
                {/* subscribe box */}
            <h1 className="subscribe-letter text-center">Subscribe to our Newsletter for latest news.</h1>
                <div className="subscribe-box my-5 text-center">  
                    <input className="mb-sm-5" type="text" placeholder="Your Email"/>
                    <button class="submit-newsletter button_outline text-center mt-lg-0 mt-3"> SUBSCSRIBE</button>                
                </div>
                <hr />


                {/* smart head */}
                <div className="row footer-info mt-5">
                    <div className="col-lg-5">
                        <h1  className="text-center">Holiday Hype</h1>
                        <p  className="text-center">Et scaevola delicata vix, mea ei invidunt quodsi eripuit definiebas at pri. Placerat voluptaria meleos malis civibus an dolor</p>
                    </div>


                    {/* Quick links */}
                    <div className="col-lg-2">            
                                <h1 className="text-center">Quick Links</h1>
                                <p className="text-center">About Us</p>
                                <p className="text-center">Our News</p>
                                <p className="text-center">Contact Us</p>
                        </div>


                        {/*Contacts  */}
                    <div className="col-lg-5 mb-5">
                        <h1 className="text-center">Our Contacts</h1>
                        <p className="text-center">350 Avenue, New York, NY 10001</p>
                        <p className="text-center">info@example.com</p>
                        <p className="text-center">800-123-4567</p>
                        {/* icons */}
                    <div className="icons-container d-flex justify-content-center ">
                  <div className="icon">
                    {fb}
                  </div>
                  <div className="icon">
                    {instagram}
                  </div>
                  <div className="icon">
                  {twitter}
                  </div>
                </div>
                    </div>
                </div>
                <p className="pb-3 text-center"><small>Dark Knight Themes © 2021. All Rights Reserved.</small></p>
            </div>
        </div>
    );
};

export default Footer;