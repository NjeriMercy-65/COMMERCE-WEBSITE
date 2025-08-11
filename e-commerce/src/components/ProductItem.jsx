import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ProductItem = ({ image, title, price, rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(rating)) {
            stars.push(<FaStar key={i} />);
        } else if (i < rating) {
            stars.push(<FaStarHalfAlt key={i} />);
        } else {
            stars.push(<FaRegStar key={i} />);
        }
    }

    return (
        <div className="col-4">
            <img src={image} alt={title} />
            <h4>{title}</h4>
            <div className="rating">
                {stars}
            </div>
            <p>${price}</p>
        </div>
    );
};

export default ProductItem;

