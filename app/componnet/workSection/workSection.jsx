import React from "react";
import Banner from "../banner/banner";
import Card2 from "../card2/card2";

import img1 from "@/app/asset/images/card/card5.jpg";
import img2 from "@/app/asset/images/card/card6.jpg";
import img3 from "@/app/asset/images/card/card7.jpg";
import img4 from "@/app/asset/images/card/card8.jpg";

function WorkSection() {
  let data = [
    {
      heading: "Assessment",
      text: '"Assessment evaluates skills, knowledge, and performance to enhance learning and development effectively."',
      img: img1,
    },
    {
      heading: "One Stop Study Solution",
      text: '"Comprehensive platform for all educational needs, offering tutoring, resources, and study tools for students."',
      img: img2,
    },
    {
      heading: "Processing & Communication",
      text: '"Efficient processing and seamless communication for enhanced productivity and connectivity in every aspect."',
      img: img3,
    },
    {
      heading: "Result",
      text: '"Outcome-driven actions lead to desired results, reflecting efforts, strategies, and achievements accurately and effectively."',
      img: img4,
    },
  ];

  return (
    <section className=" bg-zinc-50 w-screen">
      <div className=" w-full max-w-[1140px] m-auto min-h-40 border-2 pt-20 pb-20 ">
        <Banner
          heading={"HOW DO WE WORK?"}
          color={"blue"}
          text={
            "“We work efficiently, collaboratively, and creatively to achieve outstanding results.”"
          }
        ></Banner>

        <div>
          {data.map((card) => (
            <Card2
              key={card.heading}
              heading={card.heading}
              text={card.text}
              img={card.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
