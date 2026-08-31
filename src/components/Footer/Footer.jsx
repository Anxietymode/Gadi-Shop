import { Link } from 'react-router-dom';
import KrovnyePodtyki from '../BloodDrips/BloodDrips';
import './Footer.css';

const KROV_V_PODVALE = [
  { left: '3%', vysota: 90, zaderzhka: 0, dlitelnost: 7 },
  { left: '10%', vysota: 55, zaderzhka: 2.5, dlitelnost: 6 },
  { left: '85%', vysota: 65, zaderzhka: 3.5, dlitelnost: 6.5 },
  { left: '96%', vysota: 110, zaderzhka: 1.2, dlitelnost: 8 },
];

function Footer() {
  return (
    <footer className="samiy-nizhniy-podval">
      <KrovnyePodtyki className="krov-v-podvale" items={KROV_V_PODVALE} />
      <div className="vnutri-podvala">
        <div className="vse-kolonki-podvala" data-scroll>
          <div className="kolonka-info">
            <Link to="/" className="logo-v-podvale">gadi shope</Link>
            <p className="opisanie-v-podvale">We have clothes that suits your style and which you're proud to wear. From women to men.</p>
            <div className="soc-seti">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">T</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">I</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">F</a>
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
          <p>gadi shope © 2000-2026, All Rights Reserved</p>
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