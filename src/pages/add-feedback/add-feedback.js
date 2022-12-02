import React from "react";
import { Link } from "react-router-dom";
import MiniContainer from "../../components/mini-container/mini-container";
import NewFeedback from "../../components/new-feedback/new-feedback";
import { FaAngleLeft } from "react-icons/fa";

import "./add-feedback.scss";   

const Addfeedback = () => { 
  return(
    <MiniContainer>
      <Link to="/" className="link-back"><FaAngleLeft /> go back</Link>
      <NewFeedback />
    </MiniContainer>
  );    
};

export default Addfeedback; 