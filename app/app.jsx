import React from "react";
import Navbar from "./componnet/navbar/navbar";
import Banner from "./componnet/navBanner/navBanner";
import HeroSection from "./componnet/hero section/hero-section";
import Curves from "./componnet/curves/curves";
import HeroCard from "./componnet/heroCard.jsx/heroCard";

import universityImg from "@/app/asset/images/university/university1.jpg";
import WorkSection from "./componnet/workSection/workSection";

function App() {
  return (
    <main className=" bg-cyan-700 min-h-screen">
      <Banner></Banner>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Curves></Curves>
      <HeroCard
        img={universityImg}
        heading="Welcome To Highfield Center"
        text="“Welcome to Highfield Center, a beacon of innovation and excellence. We’re dedicated to fostering education, empowerment, and sustainable development. Through collaborative efforts, we create impactful solutions for global challenges. Join us in shaping a brighter, more inclusive future for communities worldwide. Together, let’s make a difference.”"
        buttonText={"About Us"}
      ></HeroCard>
      <WorkSection></WorkSection>
    </main>
  );
}

export default App;
