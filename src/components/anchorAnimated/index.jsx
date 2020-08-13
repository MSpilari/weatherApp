import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const AnimatedAnchor = ({ path, label }) => {
  return (
    <div className="buttonWrapper">
      <Link className="button animatedButton" to={path}>
        {label}
      </Link>
    </div>
  );
};

export default AnimatedAnchor;
