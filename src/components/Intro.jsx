import { useEffect, useRef, useState } from "react";
import Velocity from "velocity-animate";
import "../css/Intro.css";
import hisoka from "../assets/img/hisoka.png";

const socialLinks = [
  { name: "Facebook", url: "https://facebook.com/lebit.magar", icon: "fa-facebook", color: "#0000FF" },
  { name: "LinkedIn", url: "https://linkedin.com/in/basanta0lebitmgr/", icon: "fa-linkedin", color: "#00BFF" },
  { name: "Gmail", url: "mailto:lebitmagar@gmail.com", icon: "fa-envelope", color: "#db4437" },
];

export default function Intro() {
  const headings = [
    "Hi, I'm Basanta Thapa",
    "Frontrend Developer"
  ];
  const [headingIndex, setHeadingIndex] = useState(0);
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      const spans = headingRef.current.querySelectorAll(".intro-heading-span");
      spans.forEach((span, i) => {
        setTimeout(() => {
          Velocity(span, { scale: [1.2, 0.6], opacity: [1, 0] }, { duration: 350, easing: "easeOutCubic" });
        }, i * 80);
      });
    }
  }, [headingIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadingIndex(prev => (prev === 0 ? 1 : 0));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="intro-container">
      <div className="intro-content">
        <h1 className="animated-text" ref={headingRef}>
          {headings[headingIndex].split("").map((char, i) =>
            char === " " ? (
              <span key={i}>&nbsp;</span>
            ) : (
              <span key={i} className="intro-heading-span">{char}</span>
            )
          )}
        </h1>
        <h1 className="intro-text">
          I enjoy building clean, functional interfaces. I'm currently working on projects that reflect my learning journey and help sharpen my skills as I grow in the tech industry.
        </h1>
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-btn">
              <i className={`fa ${link.icon}`} style={{ color: link.color }}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
