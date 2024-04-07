import React from "react";
import { Services } from "../Components/Services";
import Home_caurosal from "../Components/Home_caurosal";
// import Popular from '../Components/Popular'
import { Categories } from "../Components/Categories";
import { NewCollection } from "../Components/NewCollection";
// import Bestsellers from '../Components/Bestsellers'
import Reel from "../Components/Reel";
const Home = () => {
  return (
    <div className="">
      <Home_caurosal />
      <Categories />
      <Reel />
      {/* <Popular/> */}

      <NewCollection />
      {/* <Bestsellers/> */}
      <Services />
    </div>
  );
};

export default Home;
