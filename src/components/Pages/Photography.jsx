import React from "react";
import "./Photography.css";

export const Photography = () => {
  return (
    <>
      <div className="photography-intro">
        <p>As you explore the world through my lens, you'll witness a tapestry of emotions, stories,
          and moments frozen in time. Now, it's time to delve deeper into my portfolio—an ever-evolving
          collection of my work. These images are not just photographs; they're a visual diary of the incredible
          journeys I've embarked upon and the incredible people I've had the privilege to meet. Whether it's the
          roar of engines on the racetrack, the tender exchanges of wedding vows, or the serene vistas of
          untouched landscapes, each photograph carries a unique narrative waiting to be discovered</p>
      </div>
      <div className="photography">
        <a href="/weddings">
          <div className="image-container weddings">
            <img src="/images/wedding.jpg" alt="wedding" />
            <h2>Weddings</h2>
          </div>
        </a>
        <a href="/motorsport">
          <div className="image-container motorsport">
            <img src="/images/motorsport.jpg" alt="motorsport" />
            <h2>MotorSport</h2>
          </div>
        </a>
        <a href="/landscapes">
          <div className="image-container landscapes">
            <img src="/images/lanscape.png" alt="landscape" />
            <h2>Landscapes</h2>
          </div>
        </a>
      </div>
      <div className="photography-outro">
        <p>Photography is more than images; it's storytelling.
          I capture moments that endure, leaving memories etched.</p>
      </div>
    </>
  );
};
