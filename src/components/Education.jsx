import "../css/Education.css";
import { motion } from "framer-motion";
import profilePic from "../assets/img/hisoka.png"; // Replace with your actual image

export default function Education() {
  const educationHistory = [
    {
      degree: "Master of Information Technology and Systems",
      school: "Your University Name",
      year: "2022 - 2024",
    },
    {
      degree: "Bachelor of Computer Science",
      school: "Your Previous University",
      year: "2018 - 2022",
    },
    // Add more education history if needed
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay for each card
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 }, // Start from left
    visible: { opacity: 1, x: 0 }, // Move to center
    exit: { opacity: 0, x: -50 }, // Move back when scrolling up
  };
  return (
    <motion.div
      id="education"
      className="education-container"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
    >
      <h1>Education</h1>
      <div className="education-content">
        {/* Left Side: Profile Image */}
        <motion.div
          className="education-image"
          initial={{ opacity: 0, x: -50 }} // Slide in from left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={profilePic} alt="Profile" />
        </motion.div>

        {/* Right Side: Education History */}
        <motion.div className="education-history">
          {educationHistory.map((edu, index) => (
            <motion.div className="education-card" key={index} variants={itemVariants}>
              <h2>{edu.degree}</h2>
              <p>{edu.school}</p>
              <span>{edu.year}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
