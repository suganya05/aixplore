import React from "react";
import { Link } from "react-router-dom";
import LinkedIn from "../../assets/icons/linked-in.png";
import Facebook from "../../assets/icons/facebook.png";
import Github from "../../assets/icons/github.png";
import Insta from "../../assets/icons/insta.png";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper mx">
      <div className="head">
        <h5>Small Team</h5>
        <h1>Big Results</h1>
        <p>
          There’s about 10 of us working to deliver results. 7 creatives and 3
          ex missile engineer. <br /> Guess who keeps your project on track…
        </p>
        <div className="btn">
          <button>SCHEDULE A CALL</button>
        </div>
      </div>
      <div className="footer-end">
        <div className="nav">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/">About</Link>
          </div>
          <div>
            <Link to="/">Work</Link>
          </div>
        </div>
        <div className="copy-right">
          <div className="copy-right-text">
            <p>© 2024 Aixplore.All rights reserved</p>
          </div>
          <div className="footer-social-media-icon">
            <img src={Insta} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Facebook} alt="" />
            <img src={Github} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
