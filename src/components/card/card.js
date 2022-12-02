import "./card.scss";

import { FaAngleUp, FaComment } from "react-icons/fa"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Card = ({ feedback }) => {  
  const [upvote, setUpvote] = useState(feedback?.upvotes);
  const upvoterRef = useRef()
  
  useEffect(() => {
    setUpvote(feedback?.upvotes)
  }, [feedback])

  const handleUpvoteClick = (evt) => {  
    if(upvote === feedback?.upvotes) {
      setUpvote(upvote + 1)
      upvoterRef.current.style.backgroundColor = "#4661E6"
      upvoterRef.current.style.color = "#fff"

    } else {
      setUpvote(upvote - 1)
      upvoterRef.current.style.backgroundColor = "#F2F4FE"
      upvoterRef.current.style.color = "#3A4374"
    }
  }

  return( 
   
      <article key={feedback?.id} className="card">
        <div className="card-left">   
          <p ref={upvoterRef} className="upvotes-count" onClick={handleUpvoteClick}>
           <FaAngleUp className="upvotes-icon" />
              {upvote}  
          </p>
          <div className="card-text">
            <Link className="card-title" to={`/feedback/${feedback?.id}`}>{feedback?.title}</Link>
            <p>{feedback?.description}</p>
            <span>{feedback?.category}</span>
          </div>
        </div>

        <div className="card-comment">
          <span>
          <FaComment className="comment-icon" />
          {feedback?.comments?.length}
          </span>
        </div>
      </article>
      
  );
};

export default Card;