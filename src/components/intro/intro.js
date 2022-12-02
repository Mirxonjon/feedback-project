import { useState } from "react";
import TypeFilterModal from "../type-filter-modal/type-filter-modal";
import "./intro.scss";

const Intro = () => {

  const [ burger_class, setBurgerClass ] = useState("burger-bar unclicked");
  const [ menu_class, setMenuClass ] = useState("menu hidden");
  const [ isMenuClicked, setIsMenuClicked ] = useState(false);
  const [ burger_modal, setBurgerModal] = useState("")

  const handleUpdateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible")
      setBurgerModal("active")
    } else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
      setBurgerModal("")
    }
    setIsMenuClicked(!isMenuClicked)
  }
  return(
    <div className="header-top">
      <div className="intro">
        <h1>
          frontend mentor
          <span>feedback board</span>
        </h1> 
        <div>
            <div className="burger-menu" onClick={handleUpdateMenu}>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
            </div>
          <div className={menu_class}></div>
        </div>
      </div>

      <div className={`burger-modal ${burger_modal}`}>
        <TypeFilterModal />
      </div>
    </div>
  );
};

export default Intro;