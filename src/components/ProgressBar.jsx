import React, { useState, useEffect } from "react";

const LoadingBar = ({ progress }) => (
  <div
    style={{
      width: "100%",
      backgroundColor: "#f0f0f0",
      borderRadius: "4px",
      padding: "2px",
    }}>
    <div
      style={{
        width: `${progress}%`,
        backgroundColor: "#3498db",
        borderRadius: "4px",
        height: "20px",
      }}>
      <span style={{ color: "#ffffff", fontWeight: "bold", marginLeft: "5px" }}>
        {progress}%
      </span>
    </div>
  </div>
);

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 60) {
        setProgress(progress + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div style={{ margin: "20px", width: "90%" }}>
      <LoadingBar progress={progress} />
    </div>
  );
};

export default ProgressBar;
