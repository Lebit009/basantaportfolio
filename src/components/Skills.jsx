import "../css/Skills.css";

// Importing Logos
import reactLogo from "../assets/img/react.SVG";
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
        { name: "Git", logo: gitLogo }
    ];

    return (
        <section className="skills-container">
            <h1> Skills</h1>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <img src={skill.logo} alt={`${skill.name} Logo`} className="skill-logo" />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
