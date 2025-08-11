import React from 'react';
import './Brands.css';
import godrej from '../assets/images/logo-godrej.png';
import oppo from '../assets/images/logo-oppo.png';
import cocaCola from '../assets/images/logo-coca-cola.png';
import paypal from '../assets/images/logo-paypal.png';
import philips from '../assets/images/logo-philips.png';

const Brands = () => {
    return (
        <div className="brands">
            <div className="small-container">
                <div className="row">
                    <div className="col-5">
                        <img src={godrej} alt="Godrej" />
                    </div>
                    <div className="col-5">
                        <img src={oppo} alt="Oppo" />
                    </div>
                    <div className="col-5">
                        <img src={cocaCola} alt="Coca-Cola" />
                    </div>
                    <div className="col-5">
                        <img src={paypal} alt="PayPal" />
                    </div>
                    <div className="col-5">
                        <img src={philips} alt="Philips" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;