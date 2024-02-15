import React from "react";
import Close from "../../assets/icons/close.png";

const Menubar: React.FC = () => {
  return (
    <div className="menubar-wrapper">
      <div>
        <img src={Close} alt="" />
      </div>
    </div>
  );
};

export default Menubar;
