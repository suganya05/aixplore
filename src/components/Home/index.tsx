import React, { useState } from "react";
import Logo from "../../assets/logo/logo.png";
import Menu from "../../assets/icons/Menu.png";
import Sound from "../../assets/images/sound.png";
import Menubar from "../Menubar";
import "./Home.scss";

const Home: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenubar = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="home-wrapper mx">
      <div className="home-head">
        <div
          className="logo"
          contentEditable={true}
          style={{ outline: "none", cursor: "default" }}
          suppressContentEditableWarning={true}
        >
          <img src={Logo} alt="" />
          <div className="border"></div>
          <h4>Aixplore</h4>
        </div>
        <div className="menu-icon" onClick={toggleMenubar}>
          <img src={Menu} alt="" />
        </div>
      </div>
      <div className="content">
        {/* <h4>
          Crafting digital products with <span>soul,</span>
          <br /> enchanting users with <span>love.</span>
        </h4> */}
        <div className="flex-content">
          <h2>
            {"Crafting digital products with".split("").map((child, idx) => (
              <span className="hoverText" key={idx}>
                {child}
              </span>
            ))}
          </h2>
          <h3>
            {"soul,".split("").map((child, idx) => (
              <span className="hoverText" key={idx}>
                {child}
              </span>
            ))}
          </h3>
        </div>
        <div className="flex-content">
          <h2>
            {"enchanting users with".split("").map((child, idx) => (
              <span className="hoverText" key={idx}>
                {child}
              </span>
            ))}
          </h2>
          <h3>
            {"love.".split("").map((child, idx) => (
              <span className="hoverText" key={idx}>
                {child}
              </span>
            ))}
          </h3>
        </div>

        <p>We don't just provide solutions, we take care of them.</p>
      </div>
      <div className="sound">
        <img src={Sound} alt="" />
      </div>
      {isOpen && <Menubar setOpen={setOpen} />}
    </div>
  );
};

export default Home;
