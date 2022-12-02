import React from "react";
import MiniContainer from "../../components/mini-container/mini-container";
import "./edit-feedback.scss";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { FeedbacksContext } from "../../App";

const EditFeedback = () => {

  const { id } = useParams();
  const { feedbacks, setFilteredAlbums } = useContext(FeedbacksContext);
  const navigate = useNavigate();

  const currentFeedback = feedbacks.find(feedback => feedback.id === +id);
  const currentIndex = feedbacks.indexOf(currentFeedback);

  const editTitleRef = useRef();
  const editDescriptionRef = useRef();
  const editedCategoryRef = useRef();
  const editedStatusRef = useRef()

  
  const handleEditSubmit = (evt) => {
    evt.preventDefault();
    const editedFeedback = {
      id: +id,
      title: editTitleRef.current.value,
      category: editedCategoryRef.current.textContent,
      upvotes: currentFeedback.upvotes,
      status: editedStatusRef.current.textContent,
      comments: currentFeedback.comments,
      description: editDescriptionRef?.current?.value,
    };
    
    const editedFeedbacks = [
      ...feedbacks.slice(0, currentIndex),
      editedFeedback,
      ...feedbacks.slice(currentIndex + 1)
    ];

    if(editedFeedback.title === "" || editedFeedback.description === "") {
      alert("Input or textarea is empty!")
    } else{
      setFilteredAlbums([...editedFeedbacks]);
      alert("Feedback is edited!");
      navigate("/")
    }
  }

  
  const handleDeleteClick = () => {
    const deletedFeedbacks = [
      ...feedbacks.slice(0, currentIndex),
      ...feedbacks.slice(currentIndex + 1)
    ];
    navigate("/")
    setFilteredAlbums([...deletedFeedbacks]);
  }

  const handleCancelClick = () => {
    navigate("/")
  }

  // Moooooooooddddddaaaaaallll

  const [categoryModalActive, setCategoryModalActive] = useState(false);

  const [category, setCategory] = useState(currentFeedback?.category);

  const [status, setStatus] = useState(currentFeedback?.status);
  const [statusActive, setStatusAcitve] = useState(false);

  const handleCategoryModalBtn = () => {
    if(categoryModalActive) {
      setCategoryModalActive(false)
    } else {
      setCategoryModalActive(true)
    }
  }

  if(!currentFeedback){
    return <h1>Bunday ma'lumot yo'q</h1>
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

  // Set modal 

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
    <MiniContainer>
      <Link to={`/feedback/${id}`} className="link-back"><FaAngleLeft />go back</Link>
        <form className="edit"  onSubmit={handleEditSubmit}>
          <h2>Editing ‘{currentFeedback?.title}’</h2>
          <div className="edit-title">
            <h6>feedback title</h6>
            <p>Add a short, descriptive headline</p>
            <input type="text" defaultValue={currentFeedback?.title} ref={editTitleRef}/>
          </div>
          <div className="edit-category" onClick={handleCategoryModalBtn}>
            <h6>category</h6>
            <p>Choose a category for your feedback</p>
            <div ref={editedCategoryRef} onClick={handleCategoryModalBtn}>{category} <FaAngleDown /></div>
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
            <div ref={editedStatusRef} onClick={handleStatusClick}>{status} <FaAngleDown /></div>
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
      
          <div className="edit-text">
            <h6>feedback detail</h6>
            <p>Include any specific comments on what should be improved, added, etc.</p>
            <textarea defaultValue={currentFeedback?.description} ref={editDescriptionRef}></textarea>
          </div>
          <div className="edit-btns">
            <button onClick={handleDeleteClick}>delete</button>
            <div>
              <button onClick={handleCancelClick}>cancel</button>
              <button>done</button>
            </div>
          </div>
        </form>
    </MiniContainer>
  );
};

export default EditFeedback;