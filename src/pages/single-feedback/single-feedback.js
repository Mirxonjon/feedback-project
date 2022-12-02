import React from "react";
import SingleFeedbackNavigate from "../../components/single-feedback-navigate/single-feedback-navigate";
import Comments from "../../components/comments/comments";
import AddComment from "../../components/add-comment/add-comment";
import { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { FeedbacksContext } from "../../App";

import {FaAngleUp, FaComment} from "react-icons/fa"
import "./single-feedback.scss";

const SingleFeedback = () => {  

  const {filteredAlbums} = useContext(FeedbacksContext);
  const { id } = useParams();
  const upvotesRef = useRef();
  
  const currentFeedback = filteredAlbums?.find(feedback => feedback?.id === +id);
  const upvotesCount = currentFeedback?.upvotes;

  const [upvotes, setUpvotes] = useState(upvotesCount);
  
  const handleUpvotesClick = () => {
    if(upvotes === upvotesCount) {
      setUpvotes(upvotes + 1);
      upvotesRef.current.style.color = "#fff";
      upvotesRef.current.style.backgroundColor = "#4661E6";
    } else {
      setUpvotes(upvotes - 1);
      upvotesRef.current.style.color = "#3A4374";
      upvotesRef.current.style.backgroundColor = "#F2F4FE";
    }
  };

  return (
    <div className="single-feedback__container">
      <SingleFeedbackNavigate />  
        <article key={currentFeedback?.id} className="card">
          <div className="card-left">
            <p className="upvotes-count" ref={upvotesRef} onClick={handleUpvotesClick}>
            <FaAngleUp className="upvotes-icon" />
              {upvotes}
            </p>
            <div className="card-text">
              <h2 className="card-title" to={`/feedback/${currentFeedback?.id}`}>{currentFeedback?.title}</h2>
              <p>{currentFeedback?.description}</p>
              <span>{currentFeedback?.category}</span>
            </div>
          </div>
          <div className="card-comment">
            <span>
              <FaComment className="comment-icon" />
              {currentFeedback?.comments?.length}
            </span>
          </div>
        </article>
      <Comments currentFeedback={currentFeedback} />
      <AddComment />
    </div>  
  );
};
  
export default SingleFeedback;