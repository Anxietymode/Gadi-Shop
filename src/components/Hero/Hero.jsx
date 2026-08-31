import { useEffect, useState, useRef } from 'react';
import KrovnyePodtyki from '../BloodDrips/BloodDrips';
import './Hero.css';

const FULL_TEXT = 'MATCHES YOUR STYLE';

const KROV_V_GEROE = [
  { left: '6%', vysota: 170, zaderzhka: 0, dlitelnost: 7.5 },
  { left: '14%', vysota: 220, zaderzhka: 2.2, dlitelnost: 8.5 },
  { left: '30%', vysota: 110, zaderzhka: 4, dlitelnost: 6.5 },
  { left: '72%', vysota: 260, zaderzhka: 0.8, dlitelnost: 9 },
  { left: '84%', vysota: 150, zaderzhka: 3.2, dlitelnost: 7 },
  { left: '95%', vysota: 210, zaderzhka: 1.4, dlitelnost: 8 },
];

function Typewriter({ text }) {
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (display.length < text.length) {
          setDisplay(text.slice(0, display.length + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (display.length > 0) {
          setDisplay(text.slice(0, display.length - 1));
        } else {
          setDeleting(false);
        }
      }
    }, deleting ? 60 : 140);
    return () => clearTimeout(timeout);
  }, [display, deleting, text]);

  return <span>{display}<span className="migayushchiy-kursor">|</span></span>;
}

function CountUp({ end, suffix }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          observer.disconnect();
          const duration = 1600;
          const t0 = performance.now();
          const tick = (t) => {
            const p = Math.min((t - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return <h2 ref={ref}>{value.toLocaleString('en-US')}{suffix}</h2>;
}

function Hero() {
  function shopNow() {
    document.getElementById('new-arrivals')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="glavniy-baner">
      <div className="aura aura-1"></div>
      <div className="aura aura-2"></div>
      <KrovnyePodtyki className="krov-v-geroe" items={KROV_V_GEROE} />
      <div className="vnutri-banera">
        <div className="levaya-chast" data-scroll>
          <h1 className="ogromniy-zagolovok">
            FIND CLOTHES THAT <Typewriter text={FULL_TEXT} />
          </h1>
          <p className="malenkiy-text">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <a href="#" className="knopka-v-magazine" onClick={(e) => { e.preventDefault(); shopNow(); }}>Shop Now</a>
          <div className="nashi-cifri">
            <div className="cifra-item">
              <CountUp end={200} suffix="+" />
              <p>International Brands</p>
            </div>
            <div className="polochka"></div>
            <div className="cifra-item">
              <CountUp end={2000} suffix="+" />
              <p>High-Quality Products</p>
            </div>
            <div className="polochka hidden-mobile"></div>
            <div className="cifra-item w-full-mobile">
              <CountUp end={30000} suffix="+" />
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;