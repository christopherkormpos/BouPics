import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <h1 className="name">George Bougas</h1>
      <img src="./images/landscape-main.jpg" className="img-main" alt="" />
      <div className="content1">
        <p className="paragraph1">
          Welcome to Boupics Photography, where moments turn into memories through the lens of creativity.
          With a passion for visual storytelling, I specialize in capturing life's most cherished experiences.
          Whether it's the adrenaline rush of Motorsport, the romance of Weddings, or the breathtaking beauty of
          Landscape, I bring each frame to life with artistry and dedication.
        </p>
        <img src="./images/Photographer.svg" alt="" className="paragraph1-image" />
      </div>
      <div className="content2">
        <div>
        <p className="paragraph2">
          My portfolio reflects the diverse range of my work, from the high-speed drama of motorsports tracks to
          the tender moments of wedding ceremonies and the serenity of vast landscapes.Visit my portfolio for a 
          deeper exploration of my photographic journey and a closer look at the captivating stories waiting to 
          be unveiled.
        </p>   
        <a href="/portfolio" className='button'>
        <button>Explore My Portfolio</button>
        </a>
        </div>
          <img src="./images/Photography.svg" alt="" className="paragraph2-image" />
      </div>
      <div className="content3">
        <img src="./images/Photography.svg" alt="" className="paragraph3-image" />
        <p className="paragraph3">
          Photography serves as my canvas for preserving the fleeting essence of life.
          Each click of the shutter is an opportunity to encapsulate a moment's emotion, a story's heart, or an
          experience's magic, revealing the world's beauty in every frame.
        </p>
      </div>
    </div>
  );
};
