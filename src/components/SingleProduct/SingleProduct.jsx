import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { IoCheckmark, IoStar, IoStarOutline, IoFilter, IoCheckmarkCircle, IoEllipsisHorizontal } from 'react-icons/io5';
import products from '../../data/products';
import './SingleProduct.css';

function SingleProduct() {
  let { id } = useParams();
  const dispatch = useDispatch();

  let [quantity, setQuantity] = useState(1);
  let [activeSize, setActiveSize] = useState('Large');
  let [activeColor, setActiveColor] = useState('color1');

  const product = products.find((p) => p.id === id) || products[0];

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function handleAddToCart() {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      size: activeSize,
      color: activeColor,
      quantity,
    }));
    setQuantity(1);
  }

  function renderStars(ratingStr) {
    const full = Math.floor(parseFloat(ratingStr));
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < full ? <IoStar key={i} className="star-icon filled" /> : <IoStarOutline key={i} className="star-icon" />);
    }
    return stars;
  }

  return (
    <div className="stranica-tovara">
      <div className="hlebnie-kroshki">
        Home &gt; Shop &gt; Men &gt; <span>T-shirts</span>
      </div>

      <div className="verh-tovara">
        <div className="galereya-tovara">
          <div className="miniatyuri">
            <div className="mini-kartinka"><img src={product.image} alt="Front" /></div>
            <div className="mini-kartinka"><img src={product.image} alt="Back" /></div>
            <div className="mini-kartinka"><img src={product.image} alt="Model" /></div>
          </div>
          <div className="glavnaya-kartinka">
            <img src={product.image} alt="Main Product" />
          </div>
        </div>

        <div className="info-o-tovare">
          <h1 className="nazvanie-tovara">{product.title}</h1>
          <div className="zvezdi-tovara">{renderStars(product.rating)} <span>{product.rating}</span></div>
          <div className="cena-tovara">
            ${product.price}
            {product.oldPrice && <span className="staraya-cena">${product.oldPrice}</span>}
            {product.discount && <span className="skidka-teg">{product.discount}</span>}
          </div>
          <p className="opisanie-text">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>
          
          <hr className="razdelitel" />

          <div className="vibor-cveta">
            <p>Select Colors</p>
            <div className="cvetnie-krugi">
              <button className={`krug-cvet cvet-1 ${activeColor === 'color1' ? 'aktivniy-cvet' : ''}`} onClick={() => setActiveColor('color1')}>
                {activeColor === 'color1' && <IoCheckmark />}
              </button>
              <button className={`krug-cvet cvet-2 ${activeColor === 'color2' ? 'aktivniy-cvet' : ''}`} onClick={() => setActiveColor('color2')}>
                {activeColor === 'color2' && <IoCheckmark />}
              </button>
              <button className={`krug-cvet cvet-3 ${activeColor === 'color3' ? 'aktivniy-cvet' : ''}`} onClick={() => setActiveColor('color3')}>
                {activeColor === 'color3' && <IoCheckmark />}
              </button>
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
            <button className="knopka-v-korzinu" onClick={handleAddToCart}>Add to Cart</button>
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
            <button className="knopka-filtr"><IoFilter /></button>
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
              <div className="zvezdochki">
                <IoStar className="star-icon filled" />
                <IoStar className="star-icon filled" />
                <IoStar className="star-icon filled" />
                <IoStar className="star-icon filled" />
                <IoStarOutline className="star-icon" />
              </div>
              <button className="troetochie"><IoEllipsisHorizontal /></button>
            </div>
            <h4>Samantha D. <IoCheckmarkCircle className="galochka-icon" /></h4>
            <p>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail."</p>
            <span className="data-otziva">Posted on August 14, 2023</span>
          </div>

          <div className="kartochka-otziva">
            <div className="verh-otziva">
              <div className="zvezdochki">
                <IoStar className="star-icon filled" />
                <IoStar className="star-icon filled" />
                <IoStar className="star-icon filled" />
                <IoStar className="star-icon filled" />
                <IoStar className="star-icon filled" />
              </div>
              <button className="troetochie"><IoEllipsisHorizontal /></button>
            </div>
            <h4>Alex M. <IoCheckmarkCircle className="galochka-icon" /></h4>
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
          {products.filter((p) => p.id !== id).slice(0, 4).map((p) => (
            <div className="kartochka-tovara" key={p.id}>
              <div className="fon-kartinki">
                <img src={p.image} alt={p.title} />
              </div>
              <h3>{p.title}</h3>
              <div className="zvezdochki">{renderStars(p.rating)} <span>{p.rating}</span></div>
              <div className="cena">
                ${p.price}
                {p.oldPrice && <span className="staraya-cena">${p.oldPrice}</span>}
                {p.discount && <span className="skidka-teg">{p.discount}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
