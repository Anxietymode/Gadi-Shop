import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  let [isCartOpen, setIsCartOpen] = useState(false);
  let [isLikeOpen, setIsLikeOpen] = useState(false);

  return (
    <header className="shapka">
      <div className="vnutri-shapki">
        <a href="#" className="glavniy-logotip">SHOP.CO</a>

        <nav className="skolzyashee-menu">
          <a href="#">Shop</a>
          <a href="#">On Sale</a>
          <a href="#">New Arrivals</a>
          <a href="#">Brands</a>
        </nav>

        <div className="pole-poiska">
          <span className="lupa">🔎</span>
          <input type="text" placeholder="Search for products..." />
        </div>

        <div className="karzina-i-profil">
          <button className="znachok" aria-label="Лайк" onClick={() => setIsLikeOpen(true)}>❤️</button>
          <button className="znachok" aria-label="Корзина" onClick={() => setIsCartOpen(true)}>🛒</button>
        </div>
      </div>
    </header>
  );
}