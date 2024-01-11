import React from "react";
import { Categories } from "../Components/Categories";
import { Hero } from "../Components/Hero";
import { NewCollection } from "../Components/NewCollection";
import { Popular } from "../Components/popular";
import { Services } from "../Components/Services";

const Home = () => {
  return (
    <div className=" w-[90%] mr-auto ml-auto">
      <div className="flex justify-center mb-20 relative">
        <Hero />
      </div>
      <Popular />
      <Categories />
      <NewCollection />
      <Services />
    </div>
  );
};

export default Home;
