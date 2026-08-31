import './Reviews.css';

const REVIEWS = [
  {
    name: 'Sarah M.',
    text: "\"I'm blown away by the quality and style of the clothes I received from gadi shope. The fit is perfect and the look is top-notch.\"",
  },
  {
    name: 'Alex K.',
    text: "\"Finding clothes that align with my personal style used to be a challenge until I discovered gadi shope. The range they offer is amazing.\"",
  },
  {
    name: 'James L.',
    text: "\"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon gadi shope. The selection is diverse.\"",
  },
  {
    name: 'Maja A.',
    text: "\"The delivery was super fast and the garments fit like a glove. I'm already planning my next order from gadi shope.\"",
  },
  {
    name: 'Liam W.',
    text: "\"Great customer service and premium quality. gadi shope has become my go-to fashion store for every season.\"",
  },
];

function Reviews() {
  return (
    <section className="sekciya-otzivov">
      <div className="shapka-otzivov" data-scroll>
        <h2 className="zagolovok-otzivov">OUR HAPPY CUSTOMERS</h2>
      </div>

      <div className="polosa-s-otzivami" data-scroll>
        <div className="begushchie-otzivi">
          {[...REVIEWS, ...REVIEWS].map((r, i) => (
            <div className="otziv-kartochka" key={i}>
              <div className="zvezdi-otziva">⭐⭐⭐⭐⭐</div>
              <div className="imya-klienta">{r.name} <span className="galochka-ok">✓</span></div>
              <p className="text-otziva">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
