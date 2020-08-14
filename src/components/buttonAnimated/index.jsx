import React from "react";


import "./style.css";

const ButtonAnimated = ({ label, ...rest }) => {
  return (
    <div className="button2Wrapper">
      <button {...rest} className="button2 animatedButton2">
        {label}
      </button>
    </div>
  );
};

export default ButtonAnimated;
