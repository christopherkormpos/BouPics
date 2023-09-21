import React from "react";
import "./Photography.css";

export const Photography = () => {
  return (
    <div className="photography">
  <div className="image-container weddings">
    <img src="/images/wedding.jpg" alt="wedding" />
    <h2>Weddings</h2>
  </div>
  <div className="image-container motorsport">
    <img src="/images/motorsport.jpg" alt="motorsport" />
    <h2>MotorSport</h2>
  </div>
  <div className="image-container landscapes">
    <img src="/images/lanscape.png" alt="landscape" />
    <h2>Landscapes</h2>
  </div>
</div>
  );
};
