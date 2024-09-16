"use client";
import React from "react";
import Banner from "../banner/banner";
import TestimonialCard from "../testimonialCard/testimonialCard";
import clientImg from "@/app/asset/images/client.svg";
import Slider from "../slider/slider";

function TestimonialSection() {
  let data = [
    {
      text: ' "Highfield Center clients praise our exceptional service, citing expert guidance, smooth processes, and successful outcomes. Trust us for your visa needs."',
      name: "Clilent",
      image: clientImg,
    },
    {
      text: ' "Highfield Center clients praise our exceptional service, citing expert guidance, smooth processes, and successful outcomes. Trust us for your visa needs."',
      name: "Clilent",
      image: clientImg,
    },
    {
      text: ' "Highfield Center clients praise our exceptional service, citing expert guidance, smooth processes, and successful outcomes. Trust us for your visa needs."',
      name: "Clilent",
      image: clientImg,
    },
  ];

  return (
    <section className="bg-gray-200 ">
      <div className=" max-w-[1140px] m-auto text-white pt-20 pb-20 max-md:pl-8 max-md:pr-8 flex flex-col items-center justify-center gap-2 font-poppins  ">
        <Banner color={"blue"} heading={"What Client Say"} />

        <div className=" w-full max-lg:hidden p-2 flex gap-4">
          {data.map((card, index) => (
            <TestimonialCard
              key={index}
              text={card.text}
              name={card.name}
              img={card.image}
            />
          ))}
        </div>
      </div>

      {/* Slider starts here */}
      <div className=" max-lg:block hidden pb-20 max-w-[1140px] ">
        <Slider data={data} />
      </div>
      {/* Slider ends here */}
    </section>
  );
}

export default TestimonialSection;
