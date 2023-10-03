import React from "react";
import "./Portfolio.css";

export const Portfolio = () => {
  return (
    <div className="portfolio-container">
        <h1>Portfolio</h1>
      <div className="portfolio">
        <div className="image-container photography">
          <img src="/images/photography.jpg" alt="photography" />
          <h2>Photography</h2>
        </div>
        <div className="image-container videography">
          <img src="/images/videography.jpg" alt="videography" />
          <h2>Videography</h2>
        </div>
        </div>
    </div>
  );
};
