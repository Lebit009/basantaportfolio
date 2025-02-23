import React from "react";
import { motion } from "framer-motion";
import "../css/Practice.css"; // Import CSS

const cardData = [
  { id: 1, title: "Card 1", content: "This is card one." },
  { id: 2, title: "Card 2", content: "This is card two." },
  { id: 3, title: "Card 3", content: "This is card three." },
  { id: 4, title: "Card 4", content: "This is card four." },
  { id: 5, title: "Card 5", content: "This is card five." },
  { id: 6, title: "Card 6", content: "This is card six." },
  { id: 7, title: "Card 7", content: "This is card seven." },
  { id: 8, title: "Card 8", content: "This is card eight." },
];

const columns = 3; // Define the number of columns

export default function Practice() {
  return (
    <div className="cards-container">
      {cardData.map((card, index) => {
        const columnIndex = index % columns; // Determine the column index (0, 1, 2)
        return (
          <motion.div
            key={card.id}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: columnIndex * 0.2 }} // Delay per column
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
