import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Categories from './components/Categories.jsx';
import FeaturedProducts from './Components/FeaturedProducts.jsx';
import LatestProducts from './components/LatestProducts';
import Offer from './components/Offer.jsx';
import Testimonials from './components/Testimonials.jsx';
import Brands from './Components/Brands.jsx'


import Footer from './components/Footer.jsx';
import Contact from './components/Contacts.jsx';


// This is likely your global stylesheet, which is fine to import here.


const HomePage = () => (
  <>
    <Header />
    <Categories />
    <FeaturedProducts />
    <LatestProducts />
    <Offer />
    <Testimonials />
    <Brands />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;