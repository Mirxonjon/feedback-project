import { useContext } from "react";
import { FeedbacksContext } from "../../App";

import "./type-filter-modal.scss";

const TypeFilterModal = () => {

  const {feedbacks, setFilteredAlbums, setCategory} = useContext(FeedbacksContext);
  
  const filterAlbums = (category) => {
    const updatedAlbums = category
      ? feedbacks?.filter((album) => album.category === category)
      : feedbacks;
    setFilteredAlbums(updatedAlbums);
    setCategory(category)
  };

  return(
    <form className="type-filter__modal" method="get"> 
      <label onClick={() => filterAlbums(null)} className="type-filter__label">
        <input defaultChecked className="visually-hidden type-filter__radio" type="radio" name="type" />
        <span className="type-filter__styled-radio">All</span>
      </label>      
      <label onClick={() => filterAlbums("UI")} className="type-filter__label">
        <input className="visually-hidden type-filter__radio" type="radio" name="type" />
        <span className="type-filter__styled-radio">UI</span>
      </label>      
      <label onClick={() => filterAlbums("UX")} className="type-filter__label">
        <input className="visually-hidden type-filter__radio" type="radio" name="type" />
        <span className="type-filter__styled-radio">UX</span>
      </label>      
      <label onClick={() => filterAlbums("enhancement")} className="type-filter__label">
        <input className="visually-hidden type-filter__radio" type="radio" name="type" />
        <span className="type-filter__styled-radio">Enhancement</span>
      </label>      
      <label onClick={() => filterAlbums("bug")} className="type-filter__label">
        <input className="visually-hidden type-filter__radio" type="radio" name="type" />
        <span className="type-filter__styled-radio">Bug</span>
      </label>      
      <label onClick={() => filterAlbums("feature")} className="type-filter__label">
        <input className="visually-hidden type-filter__radio" type="radio" name="type" />
        <span className="type-filter__styled-radio">Feature</span>
      </label>      
    </form>
  )
}

export default TypeFilterModal;