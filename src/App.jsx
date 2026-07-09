import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Brands from './components/Brands/Brands';
import ProductsList from './components/ProductsList/ProductsList';
import StyleSection from './components/StyleSection/StyleSection';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import SingleProduct from './components/SingleProduct/SingleProduct';

function HomePage() {
  return (
    <>
      <Hero />
      <Brands />
      <ProductsList />
      <StyleSection />
      <Reviews />
    </>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", overflowX: "hidden" }}>
      <TopBar />
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
      
      <Footer />
    </div>
  );
}