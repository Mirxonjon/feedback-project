import React from "react";
import { useContext, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom";
import { FeedbacksContext } from "../../App";

import "./new-feedback.scss";

const NewFeedback = () => {

  const {feedbacks, setFilteredAlbums} = useContext(FeedbacksContext);
  const titleRef = useRef();
  const textRef = useRef();
  const categoryRef = useRef();
  const statusRef = useRef()

  const errorTextareaRef = useRef()
  const errorTitleareaRef = useRef()

  const navigate = useNavigate()
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
    const newFeedback = { 
      id: feedbacks.length + 1,
      title: titleRef.current.value,
      category: categoryRef.current.textContent,
      upvotes: 0,
      status: statusRef.current.textContent,
      description: textRef.current.value,
      comments: []    
    };

    if(titleRef.current.value === "" || textRef.current.value === "") {
      alert("Title or text is empty!")
    } else {
      setFilteredAlbums([newFeedback, ...feedbacks]);
      alert("Your feedback is added");
      navigate("/")
    }
  }


  // Category Modal

  const [categoryModalActive, setCategoryModalActive] = useState(false);

  const [category, setCategory] = useState("Feature");

  const handleCategoryModalBtn = () => {
    if(categoryModalActive) {
      setCategoryModalActive(false)
    } else {
      setCategoryModalActive(true)
    }
  }

  const handleCategoryFeatureClick = () => {
    setCategory('feature')
    setCategoryModalActive(false)
  }

  const handleCategoryUiClick = () => {
    setCategory('UI')
    setCategoryModalActive(false)
  }

  const handleCategoryUxClick = () => {
    setCategory('UX')
    setCategoryModalActive(false)
  }

  const handleCategoryEnhacementClick = () => {
    setCategory('enhacement')
    setCategoryModalActive(false)
  }

  const handleCategoryBugClick = () => {
    setCategory('bug')
    setCategoryModalActive(false)
  }

 // Status Modallllll

 const [status, setStatus] = useState("Suggestion");
 const [statusActive, setStatusAcitve] = useState(false);

 const handleStatusClick = () => {

  if(statusActive) {
    setStatusAcitve(false)
  } else {
    setStatusAcitve(true)
  }
 }

const handleStatusSuggestionClick = () => {
  setStatus("Suggestion")
  setStatusAcitve(false)
}
const handleStatusPlannedClick = () => {
  setStatus("Planned")
  setStatusAcitve(false)
}
const handleStatusInProgressClick = () => {
  setStatus("In-Progress")
  setStatusAcitve(false)
}
const handleStatusLiveClick = () => {
  setStatus("Live")
  setStatusAcitve(false)
}
  return(
    <form onSubmit={handleFormSubmit} className="new-feedback">  
      <h2>create new feedback</h2>

      <div className="feedback-title">
        <h6>feedback title</h6>
        <p>Add a short, descriptive headline</p>
        <input ref={titleRef} type="text"/>
        <p ref={errorTitleareaRef} style={{color: "red", visibility: "hidden"}}>Input is empty!</p>
      </div>

      <div className="feedback-category">
        <h6>category</h6>
        <p>Choose a category for your feedback</p>
        <span ref={categoryRef} onClick={handleCategoryModalBtn}>{category} <FaAngleDown /></span>
      </div>

      <div className={categoryModalActive ? "category-modal" : "category-modal__hidden"}>
        <p onClick={handleCategoryFeatureClick}>Feature</p>
        <hr />
        <p onClick={handleCategoryUiClick}>UI</p>
        <hr />
        <p onClick={handleCategoryUxClick}>UX</p>
        <hr />
        <p onClick={handleCategoryEnhacementClick}>Enhancement</p>
        <hr />
        <p onClick={handleCategoryBugClick}>Bug</p>
      </div>

      <div className="edit-status">
        <h6>update status</h6>
        <p>Change feedback state</p>
        <div ref={statusRef} onClick={handleStatusClick}>{status} <FaAngleDown /></div>
      </div>

      <div className={statusActive ? "status-modal" : "status-modal__hidden"}>
        <p onClick={handleStatusSuggestionClick}>Suggestion</p>
        <hr />
        <p onClick={handleStatusPlannedClick}>Planned</p>
        <hr />
        <p onClick={handleStatusInProgressClick}>In-Progress</p>
        <hr />
        <p onClick={handleStatusLiveClick}>Live</p>
      </div>

      <div className="feedback-detail">
        <h6>feedback detail</h6>
        <p>Include any specific comments on what should be improved, added, etc.</p>
        <textarea ref={textRef}></textarea>
        <p ref={errorTextareaRef} style={{color: "red", visibility: "hidden"}}>Textarea is empty!</p>
      </div>

      <div className="new-feedback__btns">
        <Link className="link-cancel" to="/">cancel</Link>
        <button className="submit-btn" type="submit">add feedback</button>
      </div>
    </form>
  );
};

export default NewFeedback;