import "../css/Skills.css";
import { motion } from "framer-motion";

// Importing Logos
import reactLogo from "../assets/img/react.svg";
import nodeLogo from "../assets/img/nodejs.svg";
import htmlLogo from "../assets/img/html.svg";
import cssLogo from "../assets/img/css.svg";
import mongoLogo from "../assets/img/mongodb.svg";
import pythonLogo from "../assets/img/python.svg";
import jupyterLogo from "../assets/img/jupyter.svg";
import sqlLogo from "../assets/img/sql.svg";
import jsLogo from "../assets/img/javascript.svg";
import gitLogo from "../assets/img/git.svg";

export default function Skills() {
  const skills = [
    { name: "JavaScript", logo: jsLogo },
    { name: "React", logo: reactLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "MongoDB", logo: mongoLogo },
    { name: "Python", logo: pythonLogo },
    { name: "Jupyter Notebook", logo: jupyterLogo },
    { name: "SQL", logo: sqlLogo },
    { name: "Git", logo: gitLogo },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay for each child
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start from below
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }, // Slide up
  };

  return (
    <motion.div
      id="skills"
      className="skills-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants} // Parent animation
    >
      <h1> Skills</h1>
      <motion.div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            variants={itemVariants} // Individual skill animation
          >
            <img src={skill.logo} alt={`${skill.name} Logo`} className="skill-logo" />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
