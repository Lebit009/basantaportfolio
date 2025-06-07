import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import "../css/Experience.css";

const jobs = [
  {
    company: "Tech Solutions",
    role: "Frontend Developer",
    year: "2024",
    description: "Built responsive web apps with React and improved UI/UX for enterprise clients.",
    color: "#FF5B7F",
  },
  {
    company: "Startup Inc.",
    role: "Full Stack Engineer",
    year: "2022 - 2023",
    description: "Developed scalable APIs and integrated cloud services for a fast-growing SaaS product.",
    color: "#FFA940",
  },
  {
    company: "Creative Studio",
    role: "UI/UX Designer",
    year: "2021 - 2022",
    description: "Designed modern interfaces and conducted user research for mobile and web platforms.",
    color: "#36B6FF",
  },
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