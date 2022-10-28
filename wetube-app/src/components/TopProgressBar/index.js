import "components/TopProgressBar/style.css";
import React from "react";

function TopProgressBar({ isAnimating }) {
  return (
    <div className="TopProgressBar">
      <style jsx>{`
        .TopProgressBar {
          animation: ${isAnimating
            ? "TopProgressBarAnimation 1s linear alternate infinite"
            : "none"};
        }
      `}</style>
    </div>
  );
}

export default TopProgressBar;
