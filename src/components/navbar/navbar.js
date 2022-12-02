import { FaAngleDown } from "react-icons/fa";

import "./navbar.scss";
import navImg from "../../assets/img/Vector (7).png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FeedbacksContext } from "../../App"


const Navbar = () => {

  const {feedbacks, filteredAlbums, setFilteredAlbums} = useContext(FeedbacksContext)
  const [modalActive, setModalActive] = useState(true)
  const [sortTextcontent, setSortTextcontent] = useState("Random");
 
  const handleSortClick = () => {
   if(modalActive) {
    setModalActive(false)
   } else {
    setModalActive(true)
   }
  }

  const handleMostUpvotesClick = () => {
    setSortTextcontent("most upvotes");
    feedbacks?.sort((a, b) => a.upvotes < b.upvotes ? 1 : -1).map(feedback => setFilteredAlbums([...feedbacks]));
    setModalActive(true);
  }

  const handleLeastUpvotesClick = () => {
    setSortTextcontent("least upvotes");
    feedbacks?.sort((a, b) => a.upvotes > b.upvotes ? 1 : -1).map(feedback => setFilteredAlbums([ ...feedbacks]));
    setModalActive(true);
  }

  const handleMostCommentsClick = () => {
    setSortTextcontent("most comments");
    feedbacks?.sort((a, b) => a.comments < b.comments ? 1 : -1).map(feedback => setFilteredAlbums([...feedbacks]));
    setModalActive(true);
  }

  const handleLeastCommentClick = () => {
    setSortTextcontent("least comments");
    feedbacks?.sort((a, b) => a.comments?.length > b.comments?.length ? 1 : -1).map(feedback => setFilteredAlbums([...feedbacks]));
    setModalActive(true);
  }
  
  return(  
    <>
      <nav className="navbar">
        <div className="navbar-left"> 
          <img src={navImg} alt="Navlogo"/>
          <h3><span>{filteredAlbums?.length} </span>suggestion</h3>
          <p onClick={handleSortClick}>sort by: <span>{sortTextcontent}</span><FaAngleDown /></p>
        </div>

        <Link to="/add-feedback" className="link-add__feedback">+ add feedback</Link>
      </nav>

      <div className={modalActive ? "modal-hidden" : "filter-modal"}>
       <p onClick={handleMostUpvotesClick}>most upvotes </p>
       <hr />
       <p onClick={handleLeastUpvotesClick}>least upvotes </p>
       <hr />
       <p onClick={handleMostCommentsClick}>most comments </p>
       <hr />
       <p onClick={handleLeastCommentClick}>least comments </p>
    </div>
    </> 
  );
};

export default Navbar;