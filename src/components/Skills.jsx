import "../css/Skills.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

// Lerp utility
import { lerp } from "../utils/lerp"; 

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

  // --- Lerp background color based on mouse position ---
  const [bg, setBg] = useState("rgb(240,240,240)");
  const target = useRef({ r: 240, g: 240, b: 240 });
  const current = useRef({ r: 240, g: 240, b: 240 });

  // Canvas refs and state
  const canvasRef = useRef(null);
  const drawing = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let frame;
    function animate() {
      current.current.r = lerp(current.current.r, target.current.r, 0.1);
      current.current.g = lerp(current.current.g, target.current.g, 0.1);
      current.current.b = lerp(current.current.b, target.current.b, 0.1);
      setBg(
        `rgb(${Math.round(current.current.r)},${Math.round(current.current.g)},${Math.round(current.current.b)})`
      );
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Lerp background color (optional)
    const xNorm = x / rect.width;
    const yNorm = y / rect.height;
    target.current.r = 200 + xNorm * 55;
    target.current.g = 200 + yNorm * 55;
    target.current.b = 240 - xNorm * 40;

    // Draw on canvas
    if (drawing.current && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.strokeStyle = "#222";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(lastPos.current.x, lastPos.current.y);
      ctx.lineTo(x, y);
      ctx.stroke();
      lastPos.current = { x, y };
    }
  }

  function handleMouseDown(e) {
    drawing.current = true;
    const rect = e.currentTarget.getBoundingClientRect();
    lastPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  function handleMouseUp() {
    drawing.current = false;
  }

  function handleMouseLeave() {
    drawing.current = false;
    target.current = { r: 240, g: 240, b: 240 };
  }

  // Clear canvas on resize or when section mounts
  useEffect(() => {
    function clearCanvas() {
      const canvas = canvasRef.current;
      if (canvas) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = canvas.offsetWidth * dpr;
        canvas.height = canvas.offsetHeight * dpr;
        canvas.getContext("2d").scale(dpr, dpr);
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    clearCanvas();
    window.addEventListener("resize", clearCanvas);
    return () => window.removeEventListener("resize", clearCanvas);
  }, []);

  return (
    <motion.div
      id="skills"
      className="skills-container"
      style={{ background: bg, position: "relative", overflow: "hidden" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Canvas overlay */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none", // allows mouse events to pass through
          zIndex: 1,
        }}
      />
      <h1 style={{ position: "relative", zIndex: 2 }}> Skills</h1>
      <motion.div className="skills-grid" style={{ position: "relative", zIndex: 2 }}>
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
