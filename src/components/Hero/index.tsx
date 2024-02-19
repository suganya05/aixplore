import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "../../assets/icons/Menu.png";
import Sound from "../../assets/images/sound.png";
import LogoFirst from "../../assets/logo/logo-1.png";
import logoSecond from "../../assets/logo/logo-2.png";
import Menubar from "../Menubar";
import "./Hero.scss";

const Hero: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenubar = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-wrapper mx">
      <div className="home-head">
        {/* <div
          className="logo"
          contentEditable={true}
          style={{ outline: "none", cursor: "default" }}
          suppressContentEditableWarning={true}
        >
          <img src={Logo} alt="" />
          <div className="border"></div>
          <h4>Aixplore</h4>
        </div> */}
        <div>
          <AnimatePresence mode="wait">
            <header className="header">
              <div className="logo">
                <motion.img
                  key={"logo1"}
                  src={LogoFirst}
                  alt=""
                  animate={{
                    y: !isScrolled ? 0 : -27,
                    opacity: !isScrolled ? 1 : 0,
                  }}
                  transition={{ type: "tween" }}
                  className="img-1"
                />
                <motion.img
                  key={"logo2"}
                  src={logoSecond}
                  alt=""
                  animate={{
                    y: isScrolled ? 0 : 27,
                    opacity: isScrolled ? 1 : 0,
                  }}
                  transition={{ type: "tween" }}
                  className="img-2"
                />
              </div>
              <nav></nav>
            </header>
          </AnimatePresence>
        </div>

        <div className="menu-icon" onClick={toggleMenubar}>
          <img src={Menu} alt="" />
        </div>
      </div>
      <div className="content">
        <h4>
          Crafting digital products with <span>soul,</span>
          <br /> enchanting users with <span>love.</span>
        </h4>
        <p>We don't just provide solutions, we take care of them.</p>
      </div>
      <div className="sound">
        <img src={Sound} alt="" />
      </div>
      {isOpen && <Menubar setOpen={setOpen} />}
    </div>
  );
};

export default Hero;
