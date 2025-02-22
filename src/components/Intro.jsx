import "../css/Intro.css";
import hisoka from "../assets/img/hisoka.png";

const socialLinks = [
  { name: "Facebook", 
    url: "https://facebook.com/lebit.magar",
    icon: "fa-facebook", 
    color: "#0000FF" },
  { name: "LinkedIn", 
    url: "https://linkedin.com/in/basanta0lebitmgr/", 
    icon: "fa-linkedin",
    color: "#00BFF" },
  { name: "Gmail", url: 
    "mailto:lebitmagar@gmail.com", 
    icon: "fa-envelope", 
    color: "#db4437" },
];

export default function Intro() {
  return (
    <section className="intro-container">
      <div className="intro-content">
        <h1 className="animated-text">Hi, I'm Roronoa Zoro</h1>
        <p className="intro-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="social-links">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-btn">
            <i className={`fa ${link.icon}`} style={{ color: link.color }}></i>
            {/* {link.name} */}
          </a>
        ))}
      </div>
      </div>
      {/* <div className="intro-image">
        <img src={hisoka} alt="Character Illustration" />
      </div> */}
    </section>
  );
}
