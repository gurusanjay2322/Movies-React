import React from "react";
import Navbar from "../components/Navbar";
import MyParticles from "../components/MyParticles";
import HomeComponent from "../components/HomeComponent";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div>
      <HomeComponent />
      <AboutSection/>
      <Testimonials/>
    </div>
  );
}

export default Home;
