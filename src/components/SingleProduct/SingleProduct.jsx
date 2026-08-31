import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { IoCheckmark, IoStar, IoStarOutline, IoCheckmarkCircle, IoEllipsisHorizontal, IoAddOutline } from 'react-icons/io5';
import products from '../../data/products';
import KrovnyePodtyki from '../BloodDrips/BloodDrips';
import '../ProductsList/ProductsList.css';
import './SingleProduct.css';

const KROV_V_KATALOGE = [
  { left: '6%', vysota: 140, zaderzhka: 0, dlitelnost: 8 },
  { left: '90%', vysota: 180, zaderzhka: 1.6, dlitelnost: 9 },
  { left: '97%', vysota: 110, zaderzhka: 3.8, dlitelnost: 6.5 },
];

const INITIAL_REVIEWS = [
  { id: 1, name: 'Samantha D.', rating: 4, date: 'August 14, 2023', text: 'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail.' },
  { id: 2, name: 'Alex M.', rating: 5, date: 'August 15, 2023', text: 'The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch.' },
  { id: 3, name: 'Ethan R.', rating: 5, date: 'August 20, 2023', text: 'Great fit, premium fabric. I have already ordered three more pieces.' },
  { id: 4, name: 'Olivia P.', rating: 3, date: 'September 2, 2023', text: 'Nice design but the size runs a bit small. Order one size up.' },
  { id: 5, name: 'Noah K.', rating: 5, date: 'September 10, 2023', text: 'Best quality I have found online. Delivery was also super fast.' },
  { id: 6, name: 'Emma L.', rating: 4, date: 'September 18, 2023', text: 'Beautiful shirt, exactly as pictured. Would recommend to a friend.' },
];

const FAQS = [
  { q: 'What is your return policy?', a: 'You can return any item within 30 days of delivery for a full refund, as long as it is unworn and in its original state.' },
  { q: 'How do I find my size?', a: 'Check the size guide on each product page. If you are between sizes, we recommend ordering the larger option.' },
  { q: 'How long does shipping take?', a: 'Standard shipping takes 3-5 business days, while express shipping arrives in 1-2 business days.' },
  { q: 'Do you ship internationally?', a: 'Yes, we ship worldwide. Shipping costs and times are calculated at checkout based on your location.' },
];

function SingleProduct() {
  let { id } = useParams();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [activeSize, setActiveSize] = useState('Large');
  const [activeColor, setActiveColor] = useState('color1');
  const [activeTab, setActiveTab] = useState('reviews');
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [visibleCount, setVisibleCount] = useState(2);
  const [sortBy, setSortBy] = useState('latest');
  const [showForm, setShowForm] = useState(false);
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  const [starRating, setStarRating] = useState(5);
  const [openFaq, setOpenFaq] = useState(0);

  const product = products.find((p) => p.id === id) || products[0];

  function decreaseQuantity() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function handleAddToCart() {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      size: activeSize,
      color: activeColor,
      quantity,
    }));
    setQuantity(1);
  }

  const sortedReviews = [...reviews]
    .sort((a, b) => (sortBy === 'highest' ? b.rating - a.rating : a.id - b.id))
    .slice(0, visibleCount);

  function submitReview(e) {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;
    setReviews((prev) => [
      {
        id: Date.now(),
        name: author.trim(),
        rating: starRating,
        date: 'Now',
        text: comment.trim(),
        isNew: true,
      },
      ...prev,
    ]);
    setAuthor('');
    setComment('');
    setStarRating(5);
    setShowForm(false);
    setVisibleCount(reviews.length + 1);
  }

  function renderStars(ratingStr) {
    const full = Math.floor(parseFloat(ratingStr));
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < full ? <IoStar key={i} className="star-icon filled" /> : <IoStarOutline key={i} className="star-icon" />);
    }
    return stars;
  }

  function renderReviewStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? <IoStar key={i} className="star-icon filled" /> : <IoStarOutline key={i} className="star-icon" />);
    }
    return stars;
  }

  return (
    <div className="stranica-tovara">
      <KrovnyePodtyki className="krov-v-kataloge" items={KROV_V_KATALOGE} />
      <div className="hlebnie-kroshki">
        <Link to="/">Home</Link> &gt; <Link to="/shop">Shop</Link> &gt; <span>{product.title}</span>
      </div>

      <div className="verh-tovara" data-scroll>
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
              <button className={`krug-cvet cvet-1 ${activeColor === 'color1' ? 'aktivniy-cvet' : ''}`} onClick={() => setActiveColor('color1')} aria-label="Black">
                {activeColor === 'color1' && <IoCheckmark />}
              </button>
              <button className={`krug-cvet cvet-2 ${activeColor === 'color2' ? 'aktivniy-cvet' : ''}`} onClick={() => setActiveColor('color2')} aria-label="White">
                {activeColor === 'color2' && <IoCheckmark />}
              </button>
              <button className={`krug-cvet cvet-3 ${activeColor === 'color3' ? 'aktivniy-cvet' : ''}`} onClick={() => setActiveColor('color3')} aria-label="Gray">
                {activeColor === 'color3' && <IoCheckmark />}
              </button>
            </div>
          </div>

          <hr className="razdelitel" />

          <div className="vibor-razmera">
            <p>Choose Size</p>
            <div className="knopki-razmerov">
              {['Small', 'Medium', 'Large', 'X-Large'].map((s) => (
                <button key={s} className={`knopka-razmer ${activeSize === s ? 'aktivniy-razmer' : ''}`} onClick={() => setActiveSize(s)}>{s}</button>
              ))}
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

      <div className="vkladki-tovara" data-scroll>
        <button className={`vkladka ${activeTab === 'details' ? 'aktivnaya-vkladka' : ''}`} onClick={() => setActiveTab('details')}>Product Details</button>
        <button className={`vkladka ${activeTab === 'reviews' ? 'aktivnaya-vkladka' : ''}`} onClick={() => setActiveTab('reviews')}>Rating & Reviews</button>
        <button className={`vkladka ${activeTab === 'faqs' ? 'aktivnaya-vkladka' : ''}`} onClick={() => setActiveTab('faqs')}>FAQs</button>
      </div>

      {activeTab === 'details' && (
        <div className="vnutri-vkladki" data-scroll>
          <h3>Product Details</h3>
          <p className="opisanie-text">
            Crafted from a soft and breathable blend of cotton and polyester, this piece keeps you comfortable all day long.
          </p>
          <ul className="spisok-harakteristik">
            <li>Premium quality fabric, 100% cotton</li>
            <li>Relaxed, true-to-size fit</li>
            <li>Machine washable, durable print</li>
            <li>Available in multiple colors and sizes</li>
          </ul>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div className="sekciya-otzivov-tovara" data-scroll>
          <div className="shapka-otzivov">
            <h3>All Reviews <span className="cifra-otzivov">({reviews.length})</span></h3>
            <div className="upravlenie-otzivami">
              <select className="vipadashka" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="latest">Latest</option>
                <option value="highest">Highest Rating</option>
              </select>
              <button className="napisat-otziv" onClick={() => setShowForm(!showForm)}>Write a Review</button>
            </div>
          </div>

          {showForm && (
            <form className="forma-otziva" onSubmit={submitReview}>
              <p>Leave a review</p>
              <div className="zvezdi-formi">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button type="button" key={n} onClick={() => setStarRating(n)} aria-label={`${n} stars`}>
                    {n <= starRating ? <IoStar className="star-icon filled" /> : <IoStarOutline className="star-icon" />}
                  </button>
                ))}
              </div>
              <input type="text" placeholder="Your name" value={author} onChange={(e) => setAuthor(e.target.value)} />
              <textarea placeholder="Share your thoughts..." value={comment} onChange={(e) => setComment(e.target.value)} />
              <button type="submit" className="knopka-v-korzinu">Submit Review</button>
            </form>
          )}

          <div className="setka-otzivov">
            {sortedReviews.map((r) => (
              <div className="kartochka-otziva" key={r.id}>
                <div className="verh-otziva">
                  <div className="zvezdochki">{renderReviewStars(r.rating)}</div>
                  {r.isNew && <span className="noviy-otziv-teg">New</span>}
                  <button className="troetochie" aria-label="More"><IoEllipsisHorizontal /></button>
                </div>
                <h4>{r.name} <IoCheckmarkCircle className="galochka-icon" /></h4>
                <p>"{r.text}"</p>
                <span className="data-otziva">Posted on {r.date}</span>
              </div>
            ))}
          </div>

          {visibleCount < reviews.length && (
            <div className="knopka-zagruzit-eshe">
              <button onClick={() => setVisibleCount((c) => c + 2)}><IoAddOutline /> Load More Reviews</button>
            </div>
          )}
        </div>
      )}

      {activeTab === 'faqs' && (
        <div className="vnutri-vkladki" data-scroll>
          <h3>Frequently Asked Questions</h3>
          <div className="spisok-fak">
            {FAQS.map((f, i) => (
              <div className="fak-vopros" key={i}>
                <button className={`fak-zagolovok ${openFaq === i ? 'otkritiy' : ''}`} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}
                </button>
                {openFaq === i && <p className="fak-otvet">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="pohozhie-tovari" data-scroll>
        <h2 className="zagolovok-pohozhih">YOU MIGHT ALSO LIKE</h2>
        <div className="setka-pohozhih">
          {products.filter((p) => p.id !== id).slice(0, 4).map((p) => (
            <Link to={`/product/${p.id}`} className="kartochka-tovara" key={p.id}>
              <div className="fon-kartinki" />
              <h3>{p.title}</h3>
              <div className="zvezdochki">{renderStars(p.rating)} <span>{p.rating}</span></div>
              <div className="cena">
                ${p.price}
                {p.oldPrice && <span className="staraya-cena">${p.oldPrice}</span>}
                {p.discount && <span className="skidka-teg">{p.discount}</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;