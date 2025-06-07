import React from "react";
import { motion } from "framer-motion";
import "../css/Practice.css"; // Import CSS
import powerbiImg from "../assets/img/student.png"; 

const cardData = [
  {
    id: 1,
    title: "Power BI Dashboard",
    content: "Explore my interactive Power BI dashboard showcasing data insights and visualizations.",
    image: powerbiImg,
    link: "https://app.powerbi.com/links/93VeLrx0FP?ctid=c09afb75-1cf8-46ca-9c5e-0a01bfbd86f2&pbi_source=linkShare"
  },
  {
    id: 2,
    title: "Student Analytics Portal",
    content: "A modern analytics portal for students, featuring real-time data, charts, and actionable insights.",
    image: powerbiImg, // Replace with another image if available
    link: "https://example.com/student-analytics"
  }
];

export default function Practice() {
  return (
    <div className="practice-container">
    <h2 className="section-title">My Projects</h2>
    <div className="cards-container">
      {cardData.map((card) => (
        <motion.div
          key={card.id}
          className="card professional-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src={card.image}
            alt={card.title}
            className="card-image"
          />
          <h3 className="card-title">{card.title}</h3>
          <p className="card-content">{card.content}</p>
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="powerbi-link card-link"
          >
            View Project
          </a>
        </motion.div>
      ))}
    </div>
    </div>
  );
}