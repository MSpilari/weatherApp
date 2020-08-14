import React from "react";


import "./style.css";

const ButtonAnimated = ({ label }) => {
  return (
    <div className="button2Wrapper">
      <button className="button2 animatedButton2">
        {label}
      </button>
    </div>
  );
};

export default ButtonAnimated;
