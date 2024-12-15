import React from "react";
import More from "../More/More";
export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3qzcAMShotQ?si=w1t4Bo5ZCwzLwBB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>If you are a fan of Tic Tac Toe, please try this game. We have smart AI and 2 player mode that can satisfy all your needs. You will feel amazing with glow effect and cool animation.

              The AI of this game is smart & challenging, you can play with it for hours without getting bored. In addition, you can also adjust the difficulty of the AI with 3 levels: Easy, Medium and Hard.
              
              This game is also designed for 2 players, so you can play with friends and family on your phone, saving paper and ink...<a href="/More">More to know</a></p>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
