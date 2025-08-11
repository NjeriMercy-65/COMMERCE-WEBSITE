import React from 'react';
import { Link } from 'react-router-dom';
import './LatestProducts.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import product5 from '../assets/images/product-5.jpg';
import product6 from '../assets/images/product-6.jpg';
import product7 from '../assets/images/product-7.jpg';
import product8 from '../assets/images/product-8.jpg';
import product9 from '../assets/images/product-9.jpg';
import product10 from '../assets/images/product-10.jpg';
import product11 from '../assets/images/product-11.jpg';
import product12 from '../assets/images/product-12.jpg';

const LatestProducts = () => {
    const products = [
        { image: product5, name: 'Red Printed T-shirt', price: '50.00', rating: 3.5 },
        { image: product6, name: 'Black T-shirt', price: '50.00', rating: 3.5 },
        { image: product7, name: 'Socks', price: '50.00', rating: 3.5 },
        { image: product8, name: 'Watch', price: '50.00', rating: 3.5 },
        { image: product9, name: 'Roadster Shoes', price: '50.00', rating: 3.5 },
        { image: product10, name: 'Black Shoes', price: '50.00', rating: 3.5 },
        { image: product11, name: 'Sneakers', price: '50.00', rating: 3.5 },
        { image: product12, name: 'Pants', price: '50.00', rating: 3.5 },
    ];

    const renderRating = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} />);
            } else if (i - 0.5 === rating) {
                stars.push(<FaStarHalfAlt key={i} />);
            } else {
                stars.push(<FaRegStar key={i} />);
            }
        }
        return stars;
    };

    return (
        <div className="small-container">
            <h2 className="title">Latest Products</h2>
            <div className="row">
                {products.map((product, index) => (
                    <div className="col-4" key={index}>
                        <img src={product.image} alt={product.name} />
                        <h4>{product.name}</h4>
                        <div className="rating">
                            {renderRating(product.rating)}
                        </div>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestProducts;