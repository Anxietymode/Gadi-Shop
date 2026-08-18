import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { toggleWishlist } from '../../store/wishlistSlice';
import { IoHeart, IoHeartOutline, IoCartOutline } from 'react-icons/io5';
import products from '../../data/products';
import './ProductsList.css';

function ProductsList() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  const newProducts = products.filter((p) => p.section === 'new');
  const topProducts = products.filter((p) => p.section === 'top');

  function handleAddToCart(e, product) {
    e.preventDefault();
    dispatch(addToCart({ id: product.id, title: product.title, price: product.price, image: product.image, quantity: 1 }));
  }

  function handleToggleWishlist(e, product) {
    e.preventDefault();
    dispatch(toggleWishlist({ id: product.id, title: product.title, price: product.price, image: product.image }));
  }

  function renderCard(product) {
    const isLiked = wishlist.some((i) => i.id === product.id);
    return (
      <div className="kartochka-tovara" key={product.id}>
        <div className="fon-kartinki">
          <img src={product.image} alt={product.title} />
          <div className="knopki-kartochki">
            <button className="znachok-kartochki" onClick={(e) => handleToggleWishlist(e, product)}>
              {isLiked ? <IoHeart className="icon-filled-red" /> : <IoHeartOutline />}
            </button>
            <button className="znachok-kartochki" onClick={(e) => handleAddToCart(e, product)}>
              <IoCartOutline />
            </button>
          </div>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3>{product.title}</h3>
          <div className="zvezdochki">{'⭐'.repeat(Math.floor(parseFloat(product.rating)))} <span>{product.rating}</span></div>
          <div className="cena">
            ${product.price}
            {product.oldPrice && <span className="staraya-cena">${product.oldPrice}</span>}
            {product.discount && <span className="skidka-teg">{product.discount}</span>}
          </div>
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="sekciya-tovarov">
        <h2 className="zagolovok-sekcii">NEW ARRIVALS</h2>
        <div className="setka-tovarov">
          {newProducts.map(renderCard)}
        </div>
        <div className="centr-knopka">
          <Link to="#">View All</Link>
        </div>
      </section>
      
      <hr className="liniya-razdelitela" />

      <section className="sekciya-tovarov">
        <h2 className="zagolovok-sekcii">TOP SELLING</h2>
        <div className="setka-tovarov">
          {topProducts.map(renderCard)}
        </div>
        <div className="centr-knopka">
          <Link to="#">View All</Link>
        </div>
      </section>
    </>
  );
}

export default ProductsList;
