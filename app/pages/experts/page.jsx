import Banner from "@/app/componnet/banner/banner";
import Card from "@/app/componnet/cards/card/card";
import HelpSection from "@/app/componnet/helpSection/helpSection";
import expertsImg from "@/app/asset/images/client.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function page() {
  let expertsData = [
    {
      image: expertsImg,
      name: "Korim Uddin",
      position: "propraietor & CEO",
      socials: [
        {
          media: "FaceBook",
          link: "#",
          icon: faFacebook,
        },
        {
          media: "FaceBook",
          link: "#",
          icon: faTwitter,
        },
        {
          media: "FaceBook",
          link: "#",
          icon: faWhatsapp,
        },
        {
          media: "FaceBook",
          link: "#",
          icon: faInstagram,
        },
      ],
    },
    {
      image: expertsImg,
      name: "Korim Uddin",
      position: "propraietor & CEO",
      socials: [
        {
          media: "FaceBook",
          link: "#",
          icon: faFacebook,
        },
        {
          media: "FaceBook",
          link: "#",
          icon: faTwitter,
        },
        {
          media: "FaceBook",
          link: "#",
          icon: faWhatsapp,
        },
        {
          media: "FaceBook",
          link: "#",
          icon: faInstagram,
        },
      ],
    },
    {
      image: expertsImg,
      name: "Korim Uddin",
      position: "propraietor & CEO",
      socials: [
        {
          media: "FaceBook",
          link: "#",
          icon: faFacebook,
        },
        {
          media: "FaceBook",
          link: "#",
          icon: faTwitter,
        },
        {
          media: "FaceBook",
          link: "#",
          icon: faWhatsapp,
        },
        {
          media: "FaceBook",
          link: "#",
          icon: faInstagram,
        },
      ],
    },
    {
      image: expertsImg,
      name: "Korim Uddin",
      position: "propraietor & CEO",
      socials: [
        {
          media: "FaceBook",
          link: "#",
          icon: faFacebook,
        },
        {
          media: "FaceBook",
          link: "#",
          icon: faTwitter,
        },
        {
          media: "FaceBook",
          link: "#",
          icon: faWhatsapp,
        },
        {
          media: "FaceBook",
          link: "#",
          icon: faInstagram,
        },
      ],
    },
    {
      image: expertsImg,
      name: "Korim Uddin",
      position: "propraietor & CEO",
      socials: [
        {
          media: "FaceBook",
          link: "#",
          icon: faFacebook,
        },
        {
          media: "FaceBook",
          link: "#",
          icon: faTwitter,
        },
        {
          media: "FaceBook",
          link: "#",
          icon: faWhatsapp,
        },
        {
          media: "FaceBook",
          link: "#",
          icon: faInstagram,
        },
      ],
    },
    {
      image: expertsImg,
      name: "Korim Uddin",
      position: "propraietor & CEO",
      socials: [
        {
          media: "FaceBook",
          link: "#",
          icon: faFacebook,
        },
        {
          media: "FaceBook",
          link: "#",
          icon: faTwitter,
        },
        {
          media: "FaceBook",
          link: "#",
          icon: faWhatsapp,
        },
        {
          media: "FaceBook",
          link: "#",
          icon: faInstagram,
        },
      ],
    },
  ];

  return (
    <main className=" bg-white min-h-80 ">
      <section className=" bg-stone-500 pt-20 pb-20 ">
        <Banner heading={"Our Expert"} />
      </section>
      <HelpSection />

      <section className=" bg-sky-700 p-8 ">
        <Banner heading={"Our Expert"} />
      </section>
      <section className=" bg-sky-700 pb-20">
        <div className=" max-w-[1140px] m-auto p-4 pb-12 grid gap-4 max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 ">
          {expertsData.map((card, index) => (
            <div
              key={index}
              className=" max-md:w-full bg-sky-700 pb-4 rounded-lg shadow-xl hover:bg-sky-800 transition-color duration-300 "
            >
              <Card
                img={expertsImg}
                text={"propraietor & CEO"}
                heading={"Korim Uddin"}
                bgColor=""
                textColor={"text-white"}
                hover={true}
                rounded=""
                shadow=""
              />
              <div className=" pl-4 flex gap-4 " >
                {card.socials.map((social, indx) => (
                  <Link key={indx} href={social.link} >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className=" w-[20px] h-[20px] text-sky-700 p-4 bg-white rounded-full "
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default page;
