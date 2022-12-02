import { useEffect, useState } from "react";
import "../comments/comments";
import "./add-comment.scss";

const MAX_COUNT = 250;

const AddComment = () => {

  const [ textareaValue, setTextareaValue] = useState(""); 
  const [ message, setMessage ] = useState("");

  const leftLettersCount = MAX_COUNT - textareaValue.length;

  const handleTextareaChange = (evt) => {
    evt.preventDefault();

    if(MAX_COUNT - evt.target.value.length >= 0) { 
      setTextareaValue(evt.target.value)
    }
  }

  useEffect(() => {
    if(leftLettersCount === 0) {
      setMessage("You cannot type anymore!");
    } else {
      setMessage("");
    }   
  }, [textareaValue]);

  return(
    <form className="add-comment">
      <h3>add comment</h3>
      <textarea onChange={handleTextareaChange} value={textareaValue} placeholder="Type your comment here"></textarea>
      <div>
        <p>{leftLettersCount} Characters left</p>
        <button type="button">post comment</button>
      </div>
      <p className="add-comment__error-message">{message}</p>
    </form>
  );
};

export default AddComment;  