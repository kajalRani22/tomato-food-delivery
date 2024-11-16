import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";

import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import APPdownload from "../../components/APPDownload/APPdownload";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <APPdownload />
    </div>
  );
};

export default Home;
