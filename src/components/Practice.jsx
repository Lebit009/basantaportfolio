import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/Practice.css";
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
    image: powerbiImg,
    link: "https://example.com/student-analytics"
  }
];

// Add your YouTube links here
const youtubeLinks = [
  {
    id: 1,
    title: "Information Portal ",
    url: "https://www.youtube.com/watch?v=Pe8xnGbJfgM"
  },
  {
    id: 2,
    title: "Automotive Parts eCommerce Website",
    url: "https://youtu.be/nUjb3Bf54Vw"
  },
  {
    id: 3,
    title: "Automotive Parts eCommerce App",
    url: "https://youtu.be/iX1P8XDnQ9U"
  },
  {
    id: 4,
    title: "Anime Review Site",
    url: "https://youtu.be/L6LO8y4sVYw"
  }
];

export default function Practice() {
  const [selectedId, setSelectedId] = useState(youtubeLinks[0].id);

  const selectedVideo = youtubeLinks.find(video => video.id === Number(selectedId));

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
      <div className="youtube-section">
        <label htmlFor="youtube-dropdown" style={{ fontWeight: 500, marginRight: "1rem" }}>
          Projects on Youtube:
        </label>
        <select
          id="youtube-dropdown"
          value={selectedId}
          onChange={e => setSelectedId(e.target.value)}
          className="youtube-dropdown"
        >
          {youtubeLinks.map(video => (
            <option key={video.id} value={video.id}>
              {video.title}
            </option>
          ))}
        </select>
       
          <a
            href={selectedVideo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    
  );
}