import Banner from "@/app/componnet/banner/banner";
import HeroCard from "@/app/componnet/heroCard.jsx/heroCard";
import React from "react";
import bannerImg from "@/app/asset/images/uk/banner.svg";
import place1 from "@/app/asset/images/uk/uk1.svg";
import place2 from "@/app/asset/images/uk/uk2.svg";
import place3 from "@/app/asset/images/uk/uk3.svg";
import place4 from "@/app/asset/images/uk/uk4.svg";
import place5 from "@/app/asset/images/uk/uk5.svg";
import place6 from "@/app/asset/images/uk/uk6.svg";
import Card from "@/app/componnet/cards/card/card";
import ContactCard from "@/app/componnet/cards/contactCard/contactCard";

function page() {
  let places = [
    {
      img: place1,
      name: "London",
      description:
        "“Discover the vibrant city of London! Highfield Center offers expert guidance for navigating the city’s attractions, culture, and amenities, ensuring a memorable and enriching experience for visitors.”",
    },
    {
      img: place2,
      name: "Edinburgh",
      description:
        "“Discover the vibrant city of Edinburgh! Highfield Center offers expert guidance for navigating the city’s attractions, culture, and amenities, ensuring a memorable and enriching experience for visitors.”",
    },
    {
      img: place3,
      name: "Liverpool",
      description:
        "“Discover the vibrant city of Liverpool! Highfield Center offers expert guidance for navigating the city’s attractions, culture, and amenities, ensuring a memorable and enriching experience for visitors.”",
    },
    {
      img: place4,
      name: "Birmingham",
      description:
        "“Discover the vibrant city of birmingham! Highfield Center offers expert guidance for navigating the city’s attractions, culture, and amenities, ensuring a memorable and enriching experience for visitors.”",
    },
    {
      img: place5,
      name: "Liverpool",
      description:
        "“Discover the vibrant city of Liverpool! Highfield Center offers expert guidance for navigating the city’s attractions, culture, and amenities, ensuring a memorable and enriching experience for visitors.”",
    },
    {
      img: place6,
      name: "Birmingham",
      description:
        "“Discover the vibrant city of birmingham! Highfield Center offers expert guidance for navigating the city’s attractions, culture, and amenities, ensuring a memorable and enriching experience for visitors.”",
    },
  ];

  return (
    <main>
      <section className=" bg-slate-400 pt-20 pb-20">
        <Banner heading={"Visiting In UK"} />
      </section>
      <HeroCard
        img={bannerImg}
        heading="Welcome To UNITED KINGDOM"
        text="Welcome to the United Kingdom, a diverse and historic nation comprising England, Scotland, Wales, and Northern Ireland. Explore iconic landmarks like Big Ben and Stonehenge, experience rich cultural heritage, indulge in traditional cuisine, and immerse yourself in the vibrant cities of London, Edinburgh, Cardiff, and Belfast."
        reverse={true}
      />

      <section className=" bg-sky-600 ">
        <div className=" max-w-[800px] m-auto text-center pt-16 pb-8 ">
          <Banner
            heading={"Most Popular Place"}
            textTop={
              "“Exploring the UK offers historic landmarks, picturesque landscapes, diverse culture, and vibrant cities for an unforgettable travel experience.”"
            }
          />
        </div>

        {/* Cards section */}
        <div>
          <div className=" max-w-[1140px] m-auto p-4 pb-12 grid gap-4 max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 ">
            {places.map((place, index) => (
              <div
                key={index}
                className=" max-md:w-full bg-sky-700 h-[500px] rounded-lg shadow-xl hover:bg-sky-800 transition-color duration-300 "
              >
                <Card
                  img={place.img}
                  heading={place.name}
                  text={place.description}
                  bgColor=""
                  textColor={"text-white"}
                  hover={true}
                  rounded=""
                  shadow=""
                  height="240px"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Cards section */}
      </section>

      {/* ContactCard section starts here */}
      <ContactCard />
      {/* ContactCard section ends here */}
    </main>
  );
}

export default page;
