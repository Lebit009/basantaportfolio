import { useEffect, useRef } from "react";
import Velocity from "velocity-animate";
import "../css/Intro.css";
import hisoka from "../assets/img/hisoka.png";

const socialLinks = [
  { name: "Facebook", url: "https://facebook.com/lebit.magar", icon: "fa-facebook", color: "#0000FF" },
  { name: "LinkedIn", url: "https://linkedin.com/in/basanta0lebitmgr/", icon: "fa-linkedin", color: "#00BFF" },
  { name: "Gmail", url: "mailto:lebitmagar@gmail.com", icon: "fa-envelope", color: "#db4437" },
];

export default function Intro() {
  const heading = "Hi, I'm Basanta Thapa";
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      const spans = headingRef.current.querySelectorAll(".intro-heading-span");
      spans.forEach((span, i) => {
        Velocity(
          span,
          { translateY: ["0px", "-44px"], opacity: [1, 0], rotateZ: ["0deg", "-360deg"] },
          { 
            duration: 900,
            delay: i * 70,
            easing: "easeOutBounce"
          }
        );
      });
    }
  }, []);

  return (
    <section className="intro-container">
      <div className="intro-content">
        <h1 className="animated-text" ref={headingRef}>
          {heading.split("").map((char, i) =>
            char === " " ? (
              <span key={i}>&nbsp;</span>
            ) : (
              <span key={i} className="intro-heading-span">{char}</span>
            )
          )}
        </h1>
        <h1 className="intro-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
