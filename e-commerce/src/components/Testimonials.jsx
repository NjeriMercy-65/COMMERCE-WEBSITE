import React from 'react';
import { Link } from 'react-router-dom';
import './Testimonials.css';

import user1 from "../assets/images/user-1.png";
import user2 from "../assets/images/user-2.png";
import user3 from "../assets/images/user-3.png";
import { FaStar, FaRegStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    return (
        <div className="testimonial">
            <div className="small-container">
                <div className="row">
                    <div className="col-3">
                        <FaQuoteLeft />
                        <p>I was amazed by the quality of the products! The delivery was prompt, and the customer service team was incredibly helpful throughout the process.</p>
                        <div className="rating">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
                        </div>
                        <img src={user1} alt="Sean Parker" />
                        <h3>Sean Parker</h3>
                    </div>
                    <div className="col-3">
                        <FaQuoteLeft />
                        <p>Shopping here has been a fantastic experience! The variety of items available is impressive, and I love how easy the checkout process is.</p>
                        <div className="rating">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
                        </div>
                        <img src={user2} alt="Mabel Joe" />
                        <h3>Mabel Joe</h3>
                    </div>
                    <div className="col-3">
                        <FaQuoteLeft />
                        <p>I highly recommend this store! The products exceeded my expectations, and I appreciate the attention to detail in packaging.</p>
                        <div className="rating">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
                        </div>
                        <img src={user3} alt="Sean Parker" />
                        <h3>Sean Parker</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;