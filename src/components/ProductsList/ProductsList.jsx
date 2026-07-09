import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import './ProductsList.css';
import shirt from "../../assets/d40da9a3a7234235e66d6695d9d7098fc3289872 (1).png"
import jeans from "../../assets/769b9d60ff941dde9bc0e54431b8d8fe3182f5e9 (1).png"
import shir2 from "../../assets/bbf411c25fc84f87eeac1062fbe47f49c192d4f2 (1).png"
import shirt3 from "../../assets/image 10.png"
import shirt4 from "../../assets/Frame 32.png"
import shirt5 from "../../assets/Frame 33.png"
import shorts from "../../assets/Frame 34.png"
import jeans2 from "../../assets/Frame 38.png"

export default function ProductsList() {
  function addToCart(e) {
    e.preventDefault();
  }
  function addToLike(e) {
    e.preventDefault();
  }

  return (
    <>
      <section className="sekciya-tovarov">
        <h2 className="zagolovok-sekcii">NEW ARRIVALS</h2>
        <div className="setka-tovarov">
          {/* Товар 1 */}
          <div className="kartochka-tovara">
            <div className="fon-kartinki">
              <img src={shirt} alt="T-shirt" />
              <div className="knopki-kartochki">
                <button className="znachok-kartochki" onClick={addToLike}>❤️</button>
                <button className="znachok-kartochki" onClick={addToCart}>🛒</button>
              </div>
            </div>
            <Link to="/product/1">
              <h3>T-shirt with Tape Details</h3>
              <div className="zvezdochki">⭐⭐⭐⭐⭐ <span>4.5/5</span></div>
              <div className="cena">$120</div>
            </Link>
          </div>

          {/* Товар 2 */}
          <div className="kartochka-tovara">
            <div className="fon-kartinki">
              <img src={jeans} alt="Jeans" />
              <div className="knopki-kartochki">
                <button className="znachok-kartochki" onClick={addToLike}>❤️</button>
                <button className="znachok-kartochki" onClick={addToCart}>🛒</button>
              </div>
            </div>
            <Link to="/product/2">
              <h3>Skinny Fit Jeans</h3>
              <div className="zvezdochki">⭐⭐⭐⭐ <span>3.5/5</span></div>
              <div className="cena">$240 <span className="straya-cena">$260</span> <span className="skidka">-20%</span></div>
            </Link>
          </div>
          
          {/* Товар 3 */}
          <div className="kartochka-tovara">
            <div className="fon-kartinki">
              <img src={shir2} alt="Shirt" />
              <div className="knopki-kartochki">
                <button className="znachok-kartochki" onClick={addToLike}>❤️</button>
                <button className="znachok-kartochki" onClick={addToCart}>🛒</button>
              </div>
            </div>
            <Link to="/product/3">
              <h3>Checkered Shirt</h3>
              <div className="zvezdochki">⭐⭐⭐⭐⭐ <span>4.5/5</span></div>
              <div className="cena">$180</div>
            </Link>
          </div>

          {/* Товар 4 */}
          <div className="kartochka-tovara">
            <div className="fon-kartinki">
              <img src={shirt3} alt="Orange" />
              <div className="knopki-kartochki">
                <button className="znachok-kartochki" onClick={addToLike}>❤️</button>
                <button className="znachok-kartochki" onClick={addToCart}>🛒</button>
              </div>
            </div>
            <Link to="/product/4">
              <h3>Sleeve Striped T-shirt</h3>
              <div className="zvezdochki">⭐⭐⭐⭐⭐ <span>4.5/5</span></div>
              <div className="cena">$130 <span className="straya-cena">$160</span> <span className="skidka">-30%</span></div>
            </Link>
          </div>
        </div>

        <div className="centr-knopka">
          <Link to="#">View All</Link>
        </div>
      </section>
      
      <hr className="liniya-razdelitela" />

      {/* СЕКЦИЯ 2: TOP SELLING */}
      <section className="sekciya-tovarov">
        <h2 className="zagolovok-sekcii">TOP SELLING</h2>
        
        <div className="setka-tovarov">
          {/* Товар 5 */}
          <div className="kartochka-tovara">
            <div className="fon-kartinki">
              <img src={shirt4} alt="Shirt" />
              <div className="knopki-kartochki">
                <button className="znachok-kartochki" onClick={addToLike}>❤️</button>
                <button className="znachok-kartochki" onClick={addToCart}>🛒</button>
              </div>
            </div>
            <Link to="/product/5">
              <h3>Vertical Striped Shirt</h3>
              <div className="zvezdochki">⭐⭐⭐⭐⭐ <span>5.0/5</span></div>
              <div className="cena">$212 <span className="straya-cena">$232</span> <span className="skidka">-20%</span></div>
            </Link>
          </div>

          {/* Товар 6 */}
          <div className="kartochka-tovara">
            <div className="fon-kartinki">
              <img src={shirt5} alt="T-shirt" />
              <div className="knopki-kartochki">
                <button className="znachok-kartochki" onClick={addToLike}>❤️</button>
                <button className="znachok-kartochki" onClick={addToCart}>🛒</button>
              </div>
            </div>
            <Link to="/product/6">
              <h3>Courage Graphic T-shirt</h3>
              <div className="zvezdochki">⭐⭐⭐⭐ <span>4.0/5</span></div>
              <div className="cena">$145</div>
            </Link>
          </div>

          {/* Товар 7 */}
          <div className="kartochka-tovara">
            <div className="fon-kartinki">
              <img src={shorts} alt="Shorts" />
              <div className="knopki-kartochki">
                <button className="znachok-kartochki" onClick={addToLike}>❤️</button>
                <button className="znachok-kartochki" onClick={addToCart}>🛒</button>
              </div>
            </div>
            <Link to="/product/7">
              <h3>Loose Fit Bermuda Shorts</h3>
              <div className="zvezdochki">⭐⭐⭐ <span>3.0/5</span></div>
              <div className="cena">$80</div>
            </Link>
          </div>

          {/* Товар 8 */}
          <div className="kartochka-tovara">
            <div className="fon-kartinki">
              <img src={jeans2} alt="Jeans" />
              <div className="knopki-kartochki">
                <button className="znachok-kartochki" onClick={addToLike}>❤️</button>
                <button className="znachok-kartochki" onClick={addToCart}>🛒</button>
              </div>
            </div>
            <Link to="/product/8">
              <h3>Faded Skinny Jeans</h3>
              <div className="zvezdochki">⭐⭐⭐⭐⭐ <span>4.5/5</span></div>
              <div className="cena">$210</div>
            </Link>
          </div>
        </div>

        <div className="centr-knopka">
          <Link to="#">View All</Link>
        </div>
      </section>
    </>
  );
}