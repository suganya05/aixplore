import React from "react";
import Logo from "../../assets/logo/logo.png";
import Menu from "../../assets/icons/Menu.png";
import Sound from "../../assets/images/sound.png";
import "./Home.scss";

const Home: React.FC = () => {
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
        <div className="menu-icon">
          <img src={Menu} alt="" />
        </div>
      </div>
      <div className="content">
        <h4>
          Crafting digital products with <span>soul,</span>
          <br /> enchanting users with <span>love.</span>
        </h4>
        <p>We don't just provide solutions; we take care of them.</p>
      </div>
      <div className="sound">
        <img src={Sound} alt="" />
      </div>
    </div>
  );
};

export default Home;
