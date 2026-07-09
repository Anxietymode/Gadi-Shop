import React from 'react';
import './StyleSection.css';
import casual from "../../assets/Frame 61.png";
import formal from "../../assets/Frame 62.png";
import party from "../../assets/Frame 64.png";
import gym from "../../assets/Frame 63.png";

export default function StyleSection() {
  return (
    <section className="bolshoy-sery-block">
      <div className="vnutri-serogo">
        <h2 className="zagolovok-sekcii-stiley">BROWSE BY DRESS STYLE</h2>
        <div className="setka-stiley">
          
          <div className="stil-kartochka malenkaya" style={{ backgroundImage: `url(${casual})` }}></div>
          <div className="stil-kartochka bolshaya" style={{ backgroundImage: `url(${formal})` }}></div>
          <div className="stil-kartochka bolshaya" style={{ backgroundImage: `url(${party})` }}></div>
          <div className="stil-kartochka malenkaya" style={{ backgroundImage: `url(${gym})` }}></div>
        </div>
      </div>
    </section>
  );
}