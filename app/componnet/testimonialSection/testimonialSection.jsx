"use client";
import React from "react";
import Banner from "../banner/banner";
import TestimonialCard from "../testimonialCard/testimonialCard";
import clientImg from "@/app/asset/images/client.jpg";

function TestimonialSection() {
  let data = [
    {
      text: ' "Highfield Center clients praise our exceptional service, citing expert guidance, smooth processes, and successful outcomes. Trust us for your visa needs."',
      name: "Clilent",
      img: clientImg,
    },
    {
      text: ' "Highfield Center clients praise our exceptional service, citing expert guidance, smooth processes, and successful outcomes. Trust us for your visa needs."',
      name: "Clilent",
      img: clientImg,
    },
    {
      text: ' "Highfield Center clients praise our exceptional service, citing expert guidance, smooth processes, and successful outcomes. Trust us for your visa needs."',
      name: "Clilent",
      img: clientImg,
    },
  ];

  return (
    <section className="bg-gray-200 ">
      <div className=" max-w-[1140px] m-auto text-white p-20 max-md:pl-8 max-md:pr-8 pl-12 pr-12 flex flex-col items-center justify-center gap-2 font-poppins  ">
        <Banner color={"blue"} heading={"What Client Say"} />

        <div className=" flex justify-center gap-4 max-xl:flex-wrap" >
          {data.map((card, index) => (
            <TestimonialCard key={index} name={card.name} img={card.img} text={card.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
