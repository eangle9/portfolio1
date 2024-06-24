import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import PricingCards from "../components/PricingCards";
import WorkCards from "../components/WorkCards";
import pro3 from "../assets/todo-app.png";
import pro1 from "../assets/ecommerceweb.png";
import pro2 from "../assets/fullstack.jpg";
import pro4 from "../assets/frontend.jpg"

const Project = () => {
  return (
    <div className="">
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <WorkCards img1={pro1} img2={pro2} img3={pro3} img4={pro4}/>
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Project;
