import React from 'react';
import { Link } from 'react-router-dom';
import './Contacts.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="container">
                <div className="contact-form-container">
                    <h2 className="title">Contact Us</h2>
                    <form className="contact-form" action="#" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;