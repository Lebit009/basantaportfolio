import React, { useState } from 'react';
import '../css/Togglebutton.css'; 

function Togglebutton() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="Togglebutton">
      <div
        className="toggle-btn floating-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="floating-dot"></span>
        <span className="floating-dot"></span>
        <span className="floating-dot"></span>
      </div>

      {menuOpen && (
        <div className="menu">
          <div className="menu-item" onClick={scrollToTop}>
            <i className="fa fa-arrow-up"></i> Go to Top
          </div>
          <div className="menu-item">
            <i className="fa fa-comment"></i> Message
          </div>
        </div>
      )}
    </div>
  );
}

export default Togglebutton;