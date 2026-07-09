import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';


import shirt from "../../assets/d40da9a3a7234235e66d6695d9d7098fc3289872 (1).png";
import jeans from "../../assets/769b9d60ff941dde9bc0e54431b8d8fe3182f5e9 (1).png";
import shir2 from "../../assets/bbf411c25fc84f87eeac1062fbe47f49c192d4f2 (1).png";
import shirt3 from "../../assets/image 10.png";
import shirt4 from "../../assets/Frame 32.png";
import shirt5 from "../../assets/Frame 33.png";
import shorts from "../../assets/Frame 34.png";
import jeans2 from "../../assets/Frame 38.png";

export default function SingleProduct() {
  let { id } = useParams();
  
  
  let [quantity, setQuantity] = useState(1);
  let [activeSize, setActiveSize] = useState('Large');
  let [activeColor, setActiveColor] = useState('color1');

  
  let title = "";
  let price = "";
  let oldPrice = "";
  let discount = "";
  let ratingText = "";
  let mainImg = "";

  
  if (id === '1') {
    title = 'T-shirt with Tape Details';
    price = 120;
    ratingText = '⭐⭐⭐⭐⭐ 4.5/5';
    mainImg = shirt;
  } else if (id === '2') {
    title = 'Skinny Fit Jeans';
    price = 240;
    oldPrice = 260;
    discount = '-20%';
    ratingText = '⭐⭐⭐⭐ 3.5/5';
    mainImg = jeans;
  } else if (id === '3') {
    title = 'Checkered Shirt';
    price = 180;
    ratingText = '⭐⭐⭐⭐⭐ 4.5/5';
    mainImg = shir2;
  } else if (id === '4') {
    title = 'Sleeve Striped T-shirt';
    price = 130;
    oldPrice = 160;
    discount = '-30%';
    ratingText = '⭐⭐⭐⭐⭐ 4.5/5';
    mainImg = shirt3;
  } else if (id === '5') {
    title = 'Vertical Striped Shirt';
    price = 212;
    oldPrice = 232;
    discount = '-20%';
    ratingText = '⭐⭐⭐⭐⭐ 5.0/5';
    mainImg = shirt4;
  } else if (id === '6') {
    title = 'Courage Graphic T-shirt';
    price = 145;
    ratingText = '⭐⭐⭐⭐ 4.0/5';
    mainImg = shirt5;
  } else if (id === '7') {
    title = 'Loose Fit Bermuda Shorts';
    price = 80;
    ratingText = '⭐⭐⭐ 3.0/5';
    mainImg = shorts;
  } else if (id === '8') {
    title = 'Faded Skinny Jeans';
    price = 210;
    ratingText = '⭐⭐⭐⭐⭐ 4.5/5';
    mainImg = jeans2;
  } else {
  
    title = 'ONE LIFE GRAPHIC T-SHIRT';
    price = 260;
    oldPrice = 300;
    discount = '-40%';
    ratingText = '⭐⭐⭐⭐⭐ 4.5/5';
    mainImg = shirt;
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  return (
    <div className="stranica-tovara">
      <div className="hlebnie-kroshki">
        Home &gt; Shop &gt; Men &gt; <span>T-shirts</span>
      </div>

      <div className="verh-tovara">
        <div className="galereya-tovara">
          <div className="miniatyuri">
            <div className="mini-kartinka"><img src={mainImg} alt="Front" /></div>
            <div className="mini-kartinka"><img src={mainImg} alt="Back" /></div>
            <div className="mini-kartinka"><img src={mainImg} alt="Model" /></div>
          </div>
          <div className="glavnaya-kartinka">
            <img src={mainImg} alt="Main Product" />
          </div>
        </div>

        <div className="info-o-tovare">
          {/* Подставляем заголовок, рейтинг и цены */}
          <h1 className="nazvanie-tovara">{title}</h1>
          <div className="zvezdi-tovara">{ratingText}</div>
          <div className="cena-tovara">
            ${price} 
            {oldPrice && <span className="staraya-cena">${oldPrice}</span>}
            {discount && <span className="skidka-teg">{discount}</span>}
          </div>
          <p className="opisanie-text">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>
          
          <hr className="razdelitel" />

          <div className="vibor-cveta">
            <p>Select Colors</p>
            <div className="cvetnie-krugi">
              <button className={`krug-cvet cvet-1 ${activeColor === 'color1' ? 'aktivniy-cvet' : ''}`} onClick={() => setActiveColor('color1')}>✓</button>
              <button className={`krug-cvet cvet-2 ${activeColor === 'color2' ? 'aktivniy-cvet' : ''}`} onClick={() => setActiveColor('color2')}></button>
              <button className={`krug-cvet cvet-3 ${activeColor === 'color3' ? 'aktivniy-cvet' : ''}`} onClick={() => setActiveColor('color3')}></button>
            </div>
          </div>

          <hr className="razdelitel" />

          <div className="vibor-razmera">
            <p>Choose Size</p>
            <div className="knopki-razmerov">
              <button className={`knopka-razmer ${activeSize === 'Small' ? 'aktivniy-razmer' : ''}`} onClick={() => setActiveSize('Small')}>Small</button>
              <button className={`knopka-razmer ${activeSize === 'Medium' ? 'aktivniy-razmer' : ''}`} onClick={() => setActiveSize('Medium')}>Medium</button>
              <button className={`knopka-razmer ${activeSize === 'Large' ? 'aktivniy-razmer' : ''}`} onClick={() => setActiveSize('Large')}>Large</button>
              <button className={`knopka-razmer ${activeSize === 'X-Large' ? 'aktivniy-razmer' : ''}`} onClick={() => setActiveSize('X-Large')}>X-Large</button>
            </div>
          </div>

          <hr className="razdelitel" />

          <div className="blok-pokupki">
            <div className="kolichestvo">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <button className="knopka-v-korzinu">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="vkladki-tovara">
        <button className="vkladka">Product Details</button>
        <button className="vkladka aktivnaya-vkladka">Rating & Reviews</button>
        <button className="vkladka">FAQs</button>
      </div>

      <div className="sekciya-otzivov-tovara">
        <div className="shapka-otzivov">
          <h3>All Reviews <span className="cifra-otzivov">(451)</span></h3>
          <div className="upravlenie-otzivami">
            <button className="knopka-filtr">⚲</button>
            <select className="vipadashka">
              <option>Latest</option>
              <option>Highest Rating</option>
            </select>
            <button className="napisat-otziv">Write a Review</button>
          </div>
        </div>

        <div className="setka-otzivov">
          <div className="kartochka-otziva">
            <div className="verh-otziva">
              <div className="zvezdochki">⭐⭐⭐⭐<span className="polovinka-zvezdi">⭐</span></div>
              <button className="troetochie">•••</button>
            </div>
            <h4>Samantha D. <span className="galochka">✅</span></h4>
            <p>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail."</p>
            <span className="data-otziva">Posted on August 14, 2023</span>
          </div>

          <div className="kartochka-otziva">
            <div className="verh-otziva">
              <div className="zvezdochki">⭐⭐⭐⭐⭐</div>
              <button className="troetochie">•••</button>
            </div>
            <h4>Alex M. <span className="galochka">✅</span></h4>
            <p>"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch."</p>
            <span className="data-otziva">Posted on August 15, 2023</span>
          </div>
        </div>

        <div className="knopka-zagruzit-eshe">
          <button>Load More Reviews</button>
        </div>
      </div>

      <div className="pohozhie-tovari">
        <h2 className="zagolovok-pohozhih">YOU MIGHT ALSO LIKE</h2>
        <div className="setka-pohozhih">
          
          <div className="kartochka-tovara">
            <div className="fon-kartinki">
              <img src={shirt4} alt="Polo" />
            </div>
            <h3>Polo with Contrast Trims</h3>
            <div className="zvezdochki">⭐⭐⭐⭐ <span>4.0/5</span></div>
            <div className="cena">$212 <span className="staraya-cena">$242</span> <span className="skidka-teg">-20%</span></div>
          </div>

          <div className="kartochka-tovara">
            <div className="fon-kartinki">
              <img src={shirt5} alt="Gradient" />
            </div>
            <h3>Gradient Graphic T-shirt</h3>
            <div className="zvezdochki">⭐⭐⭐ <span>3.5/5</span></div>
            <div className="cena">$145</div>
          </div>

          <div className="kartochka-tovara">
            <div className="fon-kartinki">
              <img src={shir2} alt="Polo Pink" />
            </div>
            <h3>Polo with Tipping Details</h3>
            <div className="zvezdochki">⭐⭐⭐⭐ <span>4.5/5</span></div>
            <div className="cena">$180</div>
          </div>

          <div className="kartochka-tovara">
            <div className="fon-kartinki">
              <img src={shirt3} alt="Striped" />
            </div>
            <h3>Black Striped T-shirt</h3>
            <div className="zvezdochki">⭐⭐⭐⭐⭐ <span>5.0/5</span></div>
            <div className="cena">$120 <span className="staraya-cena">$150</span> <span className="skidka-teg">-30%</span></div>
          </div>

        </div>
      </div>
    </div>
  );
}