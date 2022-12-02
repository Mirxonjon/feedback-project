import { useNavigate } from "react-router-dom";
import NoFeedbackImg from "../../assets/img/Group 16.png";
import './no-feedback.scss'
const NoFeedback = () => {

  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate("/add-feedback")
  }

  return(
    <div className="no-feedback__wrapper">
      <img src={NoFeedbackImg} alt="No feedback img" />
      <h2>There is no feedback yet.</h2>
      <p>Got a suggestion? Found a bug that needs to be squashed?</p>
      <p> We love hearing about new ideas to improve our app.</p>
      <button onClick={handleAddClick}>+ add feedback</button>
    </div>
  );
};

export default NoFeedback;