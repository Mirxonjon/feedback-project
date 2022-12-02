import { Link, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

import "./single-feedback-navigate.scss";

const SingleFeedbackNavigate = () => {
    const { id } = useParams(); 

  return(
    <div className="single-feedback__navigate">
      <Link to="/" className="back-link"><FaAngleLeft />go back</Link>
      <Link to={`/edit-feedback/${id}`} className="edit-link">edit feedback</Link>
    </div>
  );  
};  

export default SingleFeedbackNavigate;  