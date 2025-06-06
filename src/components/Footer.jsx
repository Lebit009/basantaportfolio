import { FaFacebookF, FaLinkedinIn, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import "../css/Footer.css"; // Import CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-section about">
          <h4>About Me</h4>
          <p>
            I am a dedicated professional committed to delivering innovative solutions that drive business success and efficiency.
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <FaEnvelope className="icon" />
              <a href="mailto:lebitmagar@gmail.com">lebitmagar@gmail.com</a>
            </li>
            <li>
              <FaPhone className="icon" />
              <a href="tel:+610415651631">+61 0415 651 631</a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="footer-section social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://facebook.com/lebit.magar" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://linkedin.com/in/basanta0lebitmgr/" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Basanta Thapa. All Rights Reserved.</p>
      </div>
    </footer>
  );
}