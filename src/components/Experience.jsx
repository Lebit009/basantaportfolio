import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import "../css/Experience.css";

const jobs = [
  {
    company: "Softwarica College of IT and E-commerce",
    role: "Frontend Developer",
    year: "2021",
    description: "Built responsive website named information portal for students.",
    color: "#FF5B7F",
  },
  {
    company: "Victorian Institute of Technology",
    role: "Full Stack Developer",
    year: "March-June 2024",
    description: " Internship – Developed a web application to collect data from companies and generate insightful visual reports based on the stored information.",
    color: "#FFA940",
  }
];

export default function Experience() {
  return (
    <div className="experience-pro-container">
      <h2 className="experience-title">Professional Experience</h2>
      <div className="experience-timeline-wrapper">
        <div className="experience-timeline-line" />
        <ul className="experience-list">
          {jobs.map((job, idx) => (
            <ExperienceJob key={idx} job={job} idx={idx} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function ExperienceJob({ job, idx }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });
  const controls = useAnimation();
  const direction = idx % 2 === 0 ? -1 : 1;

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { delay: idx * 0.18, duration: 0.7, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        x: 80 * direction,
        transition: { duration: 0.7, ease: "easeIn" },
      });
    }
  }, [inView, controls, idx, direction]);

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: 80 * direction }}
      animate={controls}
      className="experience-list-item"
    >
      <div
        className="experience-circle"
        style={{ background: job.color }}
      >
        {`0${idx + 1}`}
      </div>
      <div className="experience-card">
        <div className="experience-role">{job.role}</div>
        <div className="experience-meta">
          {job.company} &middot; <span style={{ color: job.color }}>{job.year}</span>
        </div>
        <div className="experience-desc">{job.description}</div>
      </div>
    </motion.li>
  );
}