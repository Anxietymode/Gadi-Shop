import './Footer.css';

function Footer() {
  return (
    <footer className="samiy-nizhniy-podval">
      <div className="vnutri-podvala">
        <div className="chernaya-podpiska">
          <h2 className="zagolovok-podpiski">STAY UPTO DATE ABOUT<br />OUR LATEST OFFERS</h2>
          <form className="forma-vvoda" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="✉ Enter your email address" className="input-pochti" />
            <button type="submit" className="knopka-podpisatsya">Subscribe to Newsletter</button>
          </form>
        </div>

        <div className="vse-kolonki-podvala">
          <div className="kolonka-info">
            <span className="logo-v-podvale">SHOP.CO</span>
            <p className="opisanie-v-podvale">We have clothes that suits your style and which you're proud to wear. From women to men.</p>
            <div className="soc-seti">
              <a href="#">T</a>
              <a href="#">I</a>
              <a href="#">F</a>
            </div>
          </div>

          <div className="kolonka-ssilok">
            <h3>COMPANY</h3>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Works</a>
            <a href="#">Career</a>
          </div>

          <div className="kolonka-ssilok">
            <h3>HELP</h3>
            <a href="#">Customer Support</a>
            <a href="#">Delivery Details</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          
          <div className="kolonka-ssilok">
            <h3>FAQ</h3>
            <a href="#">Account</a>
            <a href="#">Manage Deliveries</a>
            <a href="#">Orders</a>
            <a href="#">Payments</a>
          </div>

          <div className="kolonka-ssilok">
            <h3>RESOURCES</h3>
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">How to - Blog</a>
            <a href="#">Youtube Playlist</a>
          </div>
        </div>

        <hr className="podvalnaya-liniya" />

        <div className="avtorskie-prava">
          <p>Shop.co © 2000-2026, All Rights Reserved</p>
          <div className="iconki-platizhey">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;