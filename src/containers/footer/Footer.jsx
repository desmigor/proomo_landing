import React from 'react';
import proomoLogo from '../../assets/logo.svg';
import './footer.css';

function Footer() {
    return (
        <div className="proomo__footer section__padding">
            <div className="proomo__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>

            <div className="proomo__footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="proomo__footer-links">
                <div className="proomo__footer-links_logo">
                    <img src={proomoLogo} alt="proomo_logo" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
                </div>
                <div className="proomo__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="proomo__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="proomo__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>

            <div className="proomo__footer-copyright">
                <p>@2021 PROOMO. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer