import React from "react";
import zuri from "../assets/zuri.png";
import hng from "../assets/hng9.png";
import i4g from "../assets/i4g.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={zuri} alt="zuri" />
        <img src={hng} alt="hng" />
        <img src={i4g} alt="i4g" />
      </div>
    </footer>
  );
};

export default Footer;
