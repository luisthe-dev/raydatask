import React from "react";
import { FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <div className="headerDiv">
      <div className="headerInfo">
        <h4> Welcome </h4>
        <h6> Your current sales auction and activity </h6>
      </div>
      <div className="headerNotifs">
        <FiBell />
        <label> 2 </label>
      </div>
    </div>
  );
};

export default Header;
