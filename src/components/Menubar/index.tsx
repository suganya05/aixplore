import React from "react";
import Close from "../../assets/icons/close.png";
import LinkedIn from "../../assets/icons/linked-in.png";
import Facebook from "../../assets/icons/facebook.png";
import Github from "../../assets/icons/github.png";
import Insta from "../../assets/icons/insta.png";
import "./Menubar.scss";

interface IMenubar {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const data = [
  {
    number: "01",
    nav: "Home",
  },
  {
    number: "02",
    nav: "Our Works",
  },
  {
    number: "03",
    nav: "About Us",
  },
];

const Menubar: React.FC<IMenubar> = ({ setOpen }) => {
  return (
    <div className="menubar-wrapper">
      <div className="close-icon" onClick={() => setOpen(false)}>
        <img src={Close} alt="" />
      </div>
      <div className="menu-head">
        {data.map((f, index) => {
          return (
            <div key={index} className="head-content">
              <h4>{f.number}</h4>
              <h5>{f.nav}</h5>
            </div>
          );
        })}
      </div>
      <div className="say-btn">
        <button>Say Hi!</button>
      </div>
      <div className="border-bottom"></div>
      <div className="bottom-content">
        <h3>Get in Touch</h3>
        <div className="flex-content">
          <div>
            <p>Telephone</p>
            <h5>+91 000 000 0000</h5>
          </div>
          <div>
            <p>Email</p>
            <h5>info@aixplore.tech</h5>
          </div>
        </div>
        <div className="social-media">
          <h4>Follow us on</h4>
          <div className="social-media-icon">
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

export default Menubar;
