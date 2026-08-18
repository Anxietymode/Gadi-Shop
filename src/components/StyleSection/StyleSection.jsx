import './StyleSection.css';

function StyleSection() {
  return (
    <section className="bolshoy-sery-block">
      <div className="vnutri-serogo">
        <h2 className="zagolovok-sekcii-stiley">BROWSE BY DRESS STYLE</h2>
        <div className="setka-stiley">
          <div className="stil-kartochka malenkaya casual"></div>
          <div className="stil-kartochka bolshaya formal"></div>
          <div className="stil-kartochka bolshaya party"></div>
          <div className="stil-kartochka malenkaya gym"></div>
        </div>
      </div>
    </section>
  );
}

export default StyleSection;