import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../store/wishlistSlice';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../store/cartSlice';
import { IoSearchOutline, IoHeart, IoHeartOutline, IoCart, IoCartOutline, IoClose, IoRemoveOutline, IoAddOutline } from 'react-icons/io5';
import './Header.css';

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLikeOpen, setIsLikeOpen] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const cartRef = useRef(null);
  const likeRef = useRef(null);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  useEffect(() => {
    function handleClickOutside(e) {
      if (cartRef.current && !cartRef.current.contains(e.target)) setIsCartOpen(false);
      if (likeRef.current && !likeRef.current.contains(e.target)) setIsLikeOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
          <IoSearchOutline className="lupa" />
          <input type="text" placeholder="Search for products..." />
        </div>

        <button className="burger-knopka" aria-label="Меню">
          ☰
        </button>

        <div className="karzina-i-profil">
          <div className="knopka-s-badzheyom" ref={likeRef}>
            <button className="znachok" aria-label="Лайк" onClick={() => { setIsLikeOpen(!isLikeOpen); setIsCartOpen(false); }}>
              {wishlistCount > 0 ? <IoHeart className="icon-filled-red" /> : <IoHeartOutline />}
              {wishlistCount > 0 && <span className="badzhey">{wishlistCount}</span>}
            </button>
            {isLikeOpen && (
              <div className="dropdown-menu">
                <h4>Wishlist ({wishlistCount})</h4>
                {wishlist.length === 0 ? (
                  <p className="pustoy-text">Your wishlist is empty</p>
                ) : (
                  <ul>
                    {wishlist.map((item) => (
                      <li key={item.id} className="dropdown-item">
                        <img src={item.image} alt={item.title} />
                        <div className="dropdown-item-info">
                          <span>{item.title}</span>
                          <span>${item.price}</span>
                        </div>
                        <button className="dropdown-remove" onClick={() => dispatch(removeFromWishlist(item))}>
                          <IoClose />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          <div className="knopka-s-badzheyom" ref={cartRef}>
            <button className="znachok" aria-label="Корзина" onClick={() => { setIsCartOpen(!isCartOpen); setIsLikeOpen(false); }}>
              {cartCount > 0 ? <IoCart /> : <IoCartOutline />}
              {cartCount > 0 && <span className="badzhey">{cartCount}</span>}
            </button>
            {isCartOpen && (
              <div className="dropdown-menu">
                <h4>Shopping Cart ({cartCount})</h4>
                {cart.length === 0 ? (
                  <p className="pustoy-text">Your cart is empty</p>
                ) : (
                  <>
                    <ul>
                      {cart.map((item) => (
                        <li key={`${item.id}-${item.size}-${item.color}`} className="dropdown-item">
                          <img src={item.image} alt={item.title} />
                          <div className="dropdown-item-info">
                            <span>{item.title}</span>
                            <span className="dropdown-item-details">
                              {item.size && `Size: ${item.size}`}
                              {item.color && ` | Color: ${item.color}`}
                            </span>
                            <span>${item.price} × {item.quantity}</span>
                          </div>
                          <div className="dropdown-item-actions">
                            <button onClick={() => dispatch(decreaseQuantity({ id: item.id, size: item.size, color: item.color }))}>
                              <IoRemoveOutline />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => dispatch(increaseQuantity({ id: item.id, size: item.size, color: item.color }))}>
                              <IoAddOutline />
                            </button>
                            <button className="dropdown-remove" onClick={() => dispatch(removeFromCart(item))}>
                              <IoClose />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="dropdown-total">
                      <span>Total:</span>
                      <span>${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
