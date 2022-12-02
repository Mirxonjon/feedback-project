import React from "react";
import Card from "../../components/card/card";
import MainContainer from "../../components/container/main-container";
import Intro from "../../components/intro/intro";
import Navbar from "../../components/navbar/navbar";
import FIlterModal from "../../components/filter-modal/filter-modal";

import "./home.scss";
import NoFeedback from "../../components/no-feedback/no-feedback";
import { useContext } from "react";
import { FeedbacksContext } from "../../App";
import TypeFilter from "../../components/type-filter/type-filter";
    
const Home = () => { 

  const { filteredAlbums } = useContext(FeedbacksContext);
  
  return(
    <MainContainer> 
      <main className="home">
        <div className="home-left">
          <Intro />
          <TypeFilter />
        </div>
        <div className="home-right">
          <Navbar />
          <FIlterModal />
          {filteredAlbums.length === 0 ? <NoFeedback /> : filteredAlbums?.map(feedback => <Card feedback={feedback} key={feedback.id} />)}
        </div>
      </main>
    </MainContainer>
  );
};

export default Home;