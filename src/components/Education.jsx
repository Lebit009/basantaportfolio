import "../css/Education.css";
import profilePic from "../assets/img/hisoka.png";
import mitLogo from "../assets/img/vit.png";
import coventryLogo from "../assets/img/mit.jpg";
import { useRef, useState } from "react";

export default function Education() {
  const educationHistory = [
    {
      degree: "Master of Information Technology and Systems",
      school: "VIT",
      year: "2022 - 2024",
      logo: mitLogo,
    },
    {
      degree: "Bachelor of Computer Science",
      school: "Coventry University",
      year: "2018 - 2022",
      logo: coventryLogo,
    },
  ];

  const leftSide = educationHistory.filter((_, index) => index % 2 === 0);
  const rightSide = educationHistory.filter((_, index) => index % 2 !== 0);

  const containerRef = useRef(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");

  function handleMouseMove(e) {
    const card = containerRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
    const rotateY = ((x - centerX) / centerX) * 10;
    setTransform(
      `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
    );
  }

  function handleMouseLeave() {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  }

  return (
    <div
      className="education-container"
      ref={containerRef}
      style={{
        transform,
        transition: "transform 0.3s cubic-bezier(.25,.8,.25,1)",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="education-title">Education</h1>
      <div className="education-content">
        <div className="education-column">
          {leftSide.map((edu, index) => (
            <div className="education-card left" key={index}>
              <img
                src={edu.logo}
                alt={`${edu.school} logo`}
                className="education-logo"
              />
              <div className="education-details">
                <h2>{edu.degree}</h2>
                <p>{edu.school}</p>
                <span>{edu.year}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="profile-image-container">
          <img src={profilePic} alt="Profile" className="profile-image" />
        </div>

        <div className="education-column">
          {rightSide.map((edu, index) => (
            <div className="education-card right" key={index}>
              <img
                src={edu.logo}
                alt={`${edu.school} logo`}
                className="education-logo"
              />
              <div className="education-details">
                <h2>{edu.degree}</h2>
                <p>{edu.school}</p>
                <span>{edu.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
