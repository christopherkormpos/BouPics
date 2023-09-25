import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div className="content1">
        <p className="paragraph1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni reprehenderit dolorum repellat beatae cumque facilis nostrum ex doloribus ad est placeat, asperiores nisi autem, voluptatem earum mollitia incidunt, corporis dolores.
        </p>
        <img src="./images/Photographer.png" alt="" className="paragraph1-image" />
      </div>
      <div className="content2">
        <img src="./images/Photography.png" alt="" className="paragraph2-image" />
        <p className="paragraph2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur voluptatem cumque similique corrupti libero totam culpa modi tempora nesciunt dignissimos. Incidunt fugit dolorum consequuntur corrupti possimus nulla ratione cumque quia.
        </p>
      </div>
    </div>
  );
};
