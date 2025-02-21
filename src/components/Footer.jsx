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
            We are a team of passionate professionals delivering innovative solutions 
            to enhance business efficiency.
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h4>Connect with Me</h4>
          <ul>
            <li>
              <FaEnvelope className="icon" />
              <a href="mailto:info@yourcompany.com">lebitmagar@gmail.com</a>
            </li>
            <li>
              <FaPhone className="icon" />
              <a href="tel:+61 04156516316">+61 0415651631</a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="footer-section social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 YourCompany. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
