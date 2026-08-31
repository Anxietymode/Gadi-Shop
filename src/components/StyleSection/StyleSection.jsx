import './StyleSection.css';

function StyleSection() {
  return (
    <section className="bolshoy-sery-block" data-scroll>
      <div className="vnutri-serogo">
        <h2 className="zagolovok-sekcii-stiley">BROWSE BY DRESS STYLE</h2>
        <div className="setka-stiley">
          <div className="stil-kartochka malenkaya casual"><span>Casual</span></div>
          <div className="stil-kartochka bolshaya formal"><span>Formal</span></div>
          <div className="stil-kartochka bolshaya party"><span>Party</span></div>
          <div className="stil-kartochka malenkaya gym"><span>Gym</span></div>
        </div>
      </div>
    </section>
  );
}

export default StyleSection;