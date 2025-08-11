import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import cart from '../assets/images/cart.png';
import menuIcon from '../assets/images/menu.png';
import image1 from '../assets/images/image1.png';
import './Header.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menutoggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <img src={logo} width="124px" alt="Logo" />
                    </div>
                    <nav>
                        <ul id="menuItems" style={{ maxHeight: menuOpen ? '200px' : '0px' }}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/account">Account</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                    <img src={cart} width="30px" height="30px" alt="Cart" />
                    <img src={menuIcon} className="menu-icon" onClick={menutoggle} alt="Menu" />
                </div>
                <div className="row">
                    <div className="col-2">
                        <h1>Give your workout<br /> A new style!</h1>
                        <p>Success isn't always about greatness. It's about consistency. Consistent<br /> hard work gains success. Greatness will come.</p>
                        <Link to="/products" className="btn">Explore Now &#8594;</Link>
                    </div>
                    <div className="col-2">
                        <img src={image1} alt="Workout" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;