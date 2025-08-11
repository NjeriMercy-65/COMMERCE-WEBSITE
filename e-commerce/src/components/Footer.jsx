import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/images/logo-white.png';
import playStore from '../assets/images/play-store.png';
import appStore from '../assets/images/app-store.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Download Our App</h3>
                        <p>Download App for Android and iOS mobile phone.</p>
                        <div className="app-logo">
                            <img src={playStore} alt="Play Store" />
                            <img src={appStore} alt="App Store" />
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img src={logoWhite} alt="Red Store" />
                        <p>Our purpose is to sustainably make the pleasure and benefits of sports accessible to the many.</p>
                    </div>
                    <div className="footer-col-3">
                        <h3>Useful links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>
                    <div className="footer-col-4">
                        <h3>Follow us</h3>
                        <ul className='links'>
                            <a href="#"><li>Tiktok</li></a>
                            <a href="#"><li>Twitter</li></a>
                            <a href=""> <li>Instagram</li></a>
                            <a href=""><li>Youtube</li></a>
                        </ul>
                    </div>
                    <div className="newsletter">
                        <h6>Subscribe to our Newsletter</h6>
                        <form>
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
                <hr />
                <p className="Copyright">Copyright 2025 - Red Store</p>
            </div>
        </div>
    );
};

export default Footer;