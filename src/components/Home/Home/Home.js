import React from "react";
import Menubar from "../../Shared/Menubar/Menubar";
import WhyChoose from "../../WhyChoose/WhyChoose";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <div className="mb-5 pb-5">
      <Banner></Banner>
      <Categories></Categories>
      <WhyChoose></WhyChoose>
    </div>
  );
};

export default Home;
