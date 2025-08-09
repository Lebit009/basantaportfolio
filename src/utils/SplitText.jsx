import React from "react";
import "../css/SplitText.css";

export default function SplitText({
  text,
  className = "",
  duration = 0.5,
  delayStep = 0.05,
}) {
  return (
    <span
      className={`split-text ${className}`}
      aria-label={text}
      role="presentation"
    >
      {text.split(" ").map((word, wi) => (
        <span className="split-word" key={wi}>
          {word.split("").map((char, ci) => (
            <span
              className="split-char"
              style={{
                animationDelay: `${(wi * 0.2) + ci * delayStep}s`,
                animationDuration: `${duration}s`,
              }}
              key={ci}
              aria-hidden="true"
            >
              {char}
            </span>
          ))}
          {/* Add space between words */}
          <span className="split-space" aria-hidden="true">
            &nbsp;
          </span>
        </span>
      ))}
    </span>
  );
}