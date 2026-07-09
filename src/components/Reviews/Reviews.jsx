import React from 'react';
import './Reviews.css';

export default function Reviews() {
  return (
    <section className="sekciya-otzivov">
      <div className="shapka-otzivov">
        <h2 className="zagolovok-otzivov">OUR HAPPY CUSTOMERS</h2>
        <div className="strelki">
          <button className="strelka">←</button>
          <button className="strelka">→</button>
        </div>
      </div>

      <div className="polosa-s-otzivami">
        <div className="otziv-kartochka">
          <div className="zvezdi-otziva">⭐⭐⭐⭐⭐</div>
          <div className="imya-klienta">Sarah M. <span className="galochka">✅</span></div>
          <p className="text-otziva">"I'm blown away by the quality and style of the clothes I received from SHOP.CO. The fit is perfect and the look is top-notch."</p>
        </div>
        <div className="otziv-kartochka">
          <div className="zvezdi-otziva">⭐⭐⭐⭐⭐</div>
          <div className="imya-klienta">Alex K. <span className="galochka">✅</span></div>
          <p className="text-otziva">"Finding clothes that align with my personal style used to be a challenge until I discovered SHOP.CO. The range they offer is amazing."</p>
        </div>
        <div className="otziv-kartochka">
          <div className="zvezdi-otziva">⭐⭐⭐⭐⭐</div>
          <div className="imya-klienta">James L. <span className="galochka">✅</span></div>
          <p className="text-otziva">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon SHOP.CO. The selection is diverse."</p>
        </div>
      </div>
    </section>
  );
}