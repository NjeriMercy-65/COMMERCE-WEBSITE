import React from 'react';
import ProductItem from './ProductItem';
import product1 from '../assets/images/product-1.jpg';
import product2 from '../assets/images/product-2.jpg'

import './FeaturedProducts.css'
// Import other product images...

const featuredProducts = [
    { image: product1, title: 'Red Printed T-shirt', price: '50.00', rating: 4 },
    { image: product2, title: 'Black Sneaker', price: '75.00', rating: 3.5 },
    // ...add other featured products here
];

const FeaturedProducts = () => {
    return (
        <div className="small-container">
            <h2 className="title">Featured Products</h2>
            <div className="row">
                {featuredProducts.map((product, index) => (
                    <ProductItem
                        key={index}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;