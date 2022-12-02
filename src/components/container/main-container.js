import React from "react";
import "./main-container.scss";

const MainContainer = ({ className = "", children}) => {
  return(
    <div className={`main-container ${className}`}>
      {children}
    </div>
  );
};

export default MainContainer;