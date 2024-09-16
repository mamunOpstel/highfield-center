import React from "react";
import Banner from "../banner/banner";
import Card from "../card/card";

import img1 from "@/app/asset/images/card/card1.svg";
import img2 from "@/app/asset/images/card/card2.svg";
import img3 from "@/app/asset/images/card/card3.svg";
import img4 from "@/app/asset/images/card/card4.svg";

function ServiceSection() {
  let data = [
    {
      heading: "Student Visa",
      text: "“Secure your future abroad with a student visa: gateway to global education, cultural immersion, and endless opportunities.”",
      img: img1,
    },
    {
      heading: "Visit Visa",
      text: "“Discover new horizons with a visit visa, granting access to explore cultures, landmarks, and experiences in destinations worldwide with ease.”",
      img: img2,
    },
    {
      heading: "Air Ticket",
      text: "“Unlock your journey’s potential: book an air ticket for seamless travel, unforgettable experiences, and connections around the globe.”",
      img: img3,
    },
    {
      heading: "Workpermit Visa",
      text: "“Obtain a work permit visa for global employment opportunities, professional growth, and cultural immersion in diverse work environments worldwide.”",
      img: img4,
    },
  ];

  return (
    <section className=" bg-cyan-700">
      <div className=" w-full max-w-[1140px] p-8 pt-24 m-auto min-h-40 pb-20 ">
        <Banner heading={"Our Services"} />
        <div className=" grid max-md:grid-cols-1 max-xl:grid-cols-2 grid-cols-3 gap-4 mt-8 justify-items-center ">
          {data.map((card) => (
            <Card
              key={card.heading}
              heading={card.heading}
              text={card.text}
              img={card.img}
              btnText={"Read More"}
              textColor="text-black"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
