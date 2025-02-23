import "../css/Education.css";
import profilePic from "../assets/img/hisoka.png"; // Your profile image
import mitLogo from "../assets/img/vit.png"; // University logos
import coventryLogo from "../assets/img/mit.jpg";

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

  return (
    <div className="education-container" >
      <h1 className="education-title">Education</h1>

      <div className="education-content">
        <div className="education-column">
          {leftSide.map((edu, index) => (
            <div className="education-card left" key={index}>
              <img src={edu.logo} alt={`${edu.school} logo`} className="education-logo" />
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
              <img src={edu.logo} alt={`${edu.school} logo`} className="education-logo" />
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
