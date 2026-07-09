import React from 'react';
import './Hero.css';
import Modelimg from "../../assets/b26fea69ccfd8aa5825862cdb9604a4fb4930464 (1).jpg"

export default function Hero() {
  return (
    <section className="glavniy-baner">
      <div className="vnutri-banera">
        <div className="levaya-chast">
          <h1 className="ogromniy-zagolovok">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="malenkiy-text">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <a href="#" className="knopka-v-magazine">Shop Now</a>
          <div className="nashi-cifri">
            <div className="cifra-item">
              <h2>200+</h2>
              <p>International Brands</p>
            </div>
            <div className="polochka"></div>
            <div className="cifra-item">
              <h2>2,000+</h2>
              <p>High-Quality Products</p>
            </div>
            <div className="polochka hidden-mobile"></div>
            <div className="cifra-item w-full-mobile">
              <h2>30,000+</h2>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="pravaya-chast-s-ludmi">
          <img src={Modelimg} alt="Модели" className="fotka-modeley" />
        </div>
      </div>
    </section>
  );
}