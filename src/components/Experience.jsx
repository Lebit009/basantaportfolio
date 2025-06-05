import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const experiences = [
  {
    title: "Embracing Personalization and Customization for Tailored User Experiences",
    number: "01",
    color: "#FF5B7F",
  },
  {
    title: "Exploring the Role of AI and Machine Learning in Advanced UX Design",
    number: "02",
    color: "#FFA940",
  },
  {
    title: "The Influence of Augmented Reality (AR) and Virtual Reality (VR) on UX",
    number: "03",
    color: "#36B6FF",
  },
];

export default function Experience() {
  return (
    <div
      className="page-container2"
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "48px 0",
        position: "relative",
      }}
    >
      <h2
        style={{
          marginBottom: 56,
          textAlign: "center",
          fontWeight: 700,
          fontSize: 32,
          letterSpacing: 0.5,
          color: "#223",
        }}
      >
        UX Trends and Innovations Shaping Modern Web Design
      </h2>
      <div style={{ position: "relative", paddingLeft: 60 }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: 36,
            top: 0,
            bottom: 0,
            width: 4,
            background: "linear-gradient(to bottom, #FF5B7F, #FFA940, #36B6FF)",
            borderRadius: 2,
            opacity: 0.18,
            zIndex: 0,
          }}
        />
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {experiences.map((exp, idx) => (
            <ExperienceStep key={idx} exp={exp} idx={idx} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function ExperienceStep({ exp, idx }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, transition: { delay: idx * 0.18 } });
    } else {
      controls.start({ opacity: 0, x: 80 });
    }
  }, [inView, controls, idx]);

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: 80 }}
      animate={controls}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: 48,
        minHeight: 80,
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Numbered circle */}
      <div
        style={{
          minWidth: 56,
          minHeight: 56,
          borderRadius: "50%",
          background: exp.color,
          color: "#fff",
          fontWeight: "bold",
          fontSize: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 32,
          boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
          border: "4px solid #fff",
          position: "relative",
          top: 0,
        }}
      >
        {exp.number}
      </div>
      {/* Card-like text */}
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 12px rgba(44,53,63,0.07)",
          padding: "20px 28px",
          fontSize: 18,
          lineHeight: 1.5,
          fontWeight: 500,
          color: "#223",
          minWidth: 0,
          flex: 1,
        }}
      >
        {exp.title}
      </div>
    </motion.li>
  );
}