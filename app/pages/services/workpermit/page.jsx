import Banner from "@/app/componnet/banner/banner";
import HeroCard from "@/app/componnet/heroCard.jsx/heroCard";
import country1 from "@/app/asset/images/workpermit/workpermit1.svg";
import country2 from "@/app/asset/images/workpermit/workpermit2.svg";
import country3 from "@/app/asset/images/workpermit/workpermit3.svg";
import country4 from "@/app/asset/images/workpermit/workpermit4.svg";
import country5 from "@/app/asset/images/workpermit/workpermit5.svg";
import country6 from "@/app/asset/images/workpermit/workpermit6.svg";
import Card from "@/app/componnet/cards/card/card";

function page() {
  let heroCardsData = [
    {
      heading: "Document Processing",
      text: "“Streamline your document processing with our efficient services. From verification to submission, we ensure accuracy and timeliness, making your paperwork hassle-free and ensuring smooth progress toward your goals.”",
      img: country1,
      revese: false,
    },
    {
      heading: "Our Best Visa Consultancy",
      text: "“Unlock your global opportunities with our premier visa consultancy. Expert guidance, personalized support, and streamlined processes ensure your journey abroad is smooth and successful. Trust us for your visa needs.”",
      img: country2,
      revese: true,
    },
    {
      heading: "Case Delivery",
      text: "“Experience seamless case delivery with our meticulous approach. From initial assessment to final resolution, we prioritize efficiency and accuracy, ensuring your needs are met promptly and professionally.”",
      img: country3,
      revese: false,
    },
  ];

  let popularCountry = [
    {
      img: country1,
      name: "Workpermit In UK",
      description:
        "“Plan your visit to the UK for an unforgettable experience of rich culture, historic landmarks, and vibrant cities. Start exploring today!”",
    },
    {
      img: country2,
      name: "Workpermit In USA",
      description:
        "“Embark on an unforgettable journey in the USA, exploring iconic landmarks, diverse cultures, and breathtaking landscapes. Your adventure awaits!”",
    },
    {
      img: country3,
      name: "Workpermit In Canada",
      description:
        "“Explore Canada’s beauty, from its majestic mountains to bustling cities. Adventure awaits in the Great White North!”",
    },
    {
      img: country4,
      name: "Workpermit In Malta",
      description:
        "“Experience Malta’s charm: historic sites, crystal-clear waters, and Mediterranean cuisine. Your Mediterranean adventure begins in Malta!”",
    },
    {
      img: country5,
      name: "Workpermit In Australia",
      description:
        "“Discover Australia’s wonders: iconic landmarks, stunning beaches, and diverse wildlife. An unforgettable adventure awaits down under!”",
    },
    {
      img: country6,
      name: "Workpermit In Nepal",
      description:
        "“Immerse in Nepal’s beauty: Himalayan peaks, ancient temples, and warm hospitality. Experience the magic of the Himalayas firsthand.”",
    },
  ];

  return (
    <section>
      <div className=" bg-slate-500 pt-20 pb-20 ">
        <Banner heading={"Workpermit Visa"} />
      </div>

      <section className="">
        {heroCardsData.map((data, index) => (
          <HeroCard
            heading={data.heading}
            text={data.text}
            img={data.img}
            reverse={data.revese}
          />
        ))}
      </section>

      {/* Cards section */}
      <section className=" bg-sky-700 pt-20 pb-20">
        <Banner heading={"Most popular workpermit country"} />
        <div className=" max-w-[1140px] m-auto p-4 pt-8 pb-12 grid gap-4 max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 ">
          {popularCountry.map((place, index) => (
            <div
              key={index}
              className=" max-md:w-full h-[500px] bg-white rounded-lg shadow-lg "
            >
              <Card
                img={place.img}
                heading={place.name}
                text={place.description}
                textColor={"text-black"}
                shadow=""
                height="240px"
                btnText={"Contact Us"}
              />
            </div>
          ))}
        </div>
      </section>
      {/* Cards section */}
    </section>
  );
}

export default page;
