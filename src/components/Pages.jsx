import "../css/pages.css";
import { Parallax } from "react-parallax";
import { Link, useLocation } from "react-router-dom";

// Import images correctly
import edu from "../assets/img/edu.png";
import exp from "../assets/img/exp.png";
import skill from "../assets/img/skill.png";
import practice from "../assets/img/practice.png";
import { useState } from "react";



export default function Pages() {

    const location = useLocation(); // Get current route
    const currentPath = location.pathname; // Extract current path
  
    return (
      <div className="section">
        <Link to="/education" className={`nav-btn ${currentPath === "/education" ? "active" : ""}`}>
          <img src={edu} alt="Education Icon" className="btn-icon" />
          <span>Education</span>
        </Link>
        <Link to="/experience" className={`nav-btn ${currentPath === "/experience" ? "active" : ""}`}>
          <img src={exp} alt="Experience Icon" className="btn-icon" />
          <span>Experience</span>
        </Link>
        <Link to="/skills" className={`nav-btn ${currentPath === "/skills" ? "active" : ""}`}>
          <img src={skill} alt="Skills Icon" className="btn-icon" />
          <span>Skills</span>
        </Link>
        <Link to="/practice" className={`nav-btn ${currentPath === "/practice" ? "active" : ""}`}>
          <img src={practice} alt="Practice Icon" className="btn-icon" />
          <span>My Practice</span>
        </Link>


      {/* Parallax Section */}
      {/* <Parallax
        bgImage="https://cdn.photoroom.com/v2/image-cache?path=gs://background-7ef44.appspot.com/backgrounds_v3/white/18_-_white.jpg"
        strength={300}
      >
        <div className="content">
          <div className="flex-parallax">
            <div className="inside">
              <h2>Another Section</h2>
              <p>This is just some other content.</p>
            </div>
            <div className="inside">
              <h2>Another Section</h2>
              <p>This is just some other content.</p>
            </div>
            <div className="inside">
              <h2>Another Section</h2>
              <p>This is just some other content.</p>
            </div>
          </div>
        </div>
      </Parallax> */}
    </div>
  );
}
