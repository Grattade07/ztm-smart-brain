import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br3 shadow-2"
        tiltEnable={true}
        tiltMaxAngleX={45}
        tiltMaxAngleY={40}
        style={{ height: 150, width: 150 }}>
        <div className="Tilt-inner pa3">
          <img src={brain} alt="brain logo" style={{ paddingTop: "5px" }}></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
