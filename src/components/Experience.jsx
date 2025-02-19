import { motion } from "framer-motion";
export default function Experience() {
    return (
        <motion.div
        className="page-container2"
        initial={{ x: "100%", opacity: 0 }} // Start off-screen (left)
        animate={{ x: 0, opacity: 1 }} // Slide in to position
        exit={{ x: "-100%", opacity: 0 }} // Start off-screen (left)
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
      >
      <div className="page-container2">
        <h1>Experience</h1>
        <p>Details about experience go here...</p>
      </div>
      </motion.div>
    );
  }
  