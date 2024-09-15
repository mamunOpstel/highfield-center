import React from "react";
import HeroSection from "./componnet/hero section/hero-section";
import Curves from "./componnet/curves/curves";
import HeroCard from "./componnet/heroCard.jsx/heroCard";

import universityImg from "@/app/asset/images/university/university1.svg";
import WorkSection from "./componnet/workSection/workSection";
import ServiceSection from "./componnet/serviceSection/serviceSection";
import HelpSection from "./componnet/helpSection/helpSection";
import HeroSection2 from "./componnet/hero section/hero-section2";
import TestimonialSection from "./componnet/testimonialSection/testimonialSection";

function App() {
  return (
    <main className=" bg-cyan-700 min-h-screen">
      <HeroSection />
      <Curves />
      <HeroCard
        img={universityImg}
        heading="Welcome To Highfield Center"
        text="“Welcome to Highfield Center, a beacon of innovation and excellence. We’re dedicated to fostering education, empowerment, and sustainable development. Through collaborative efforts, we create impactful solutions for global challenges. Join us in shaping a brighter, more inclusive future for communities worldwide. Together, let’s make a difference.”"
        buttonText={"About Us"}
      />
      <WorkSection />
      <ServiceSection />
      <HelpSection />
      <HeroSection2 />
      <TestimonialSection />
    </main>
  );
}

export default App;
