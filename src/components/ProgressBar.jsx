import React, { useEffect } from "react";
import "../assets/styles/Animations.css";

const ProgressBar = ({ scrollPercentage }) => {
  console.log({ scrollPercentage });

  useEffect(() => {
    if (scrollPercentage >= 98) {
      const fill = document.getElementById("fill");
      fill.style.backgroundColor = "yellow";
      fill.style.boxShadow = "0 0 10px yellow";
      fill.classList.add("animate");
    }
  }, [scrollPercentage]);

  return (
    <div className="progress-bar">
      <div style={styles.bar}>
        <div
          id="fill"
          className="fill"
          style={{ ...styles.fill, width: `${scrollPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

const styles = {
  bar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "8px",
    backgroundColor: "lightgray",
    zIndex: 1,
    cursor: "pointer",
  },

  fill: {
    height: "5px",
    backgroundColor: "blue",
    transition:
      "width 0.2s ease-in-out, background-color 1s ease-in-out, box-shadow 1s ease-in-out",
  },
};
