import React from "react";
import "./mini-container.scss";

const MiniContainer = ({className = "", children}) => {
  return(
    <div className={`mini-container ${className}`}>
      {children}
    </div>
  );
};

export default MiniContainer;