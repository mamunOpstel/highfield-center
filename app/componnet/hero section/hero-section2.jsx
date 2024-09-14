import bannerImg from "@/app/asset/images/banner-img.png";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function HeroSection2() {
  return (
    <section className=" w-screen bg-gray-700 ">
      <div
        className=" max-w-[1140px] m-auto text-white p-20 max-md:pl-8 max-md:pr-8 pl-12 pr-12 flex max-lg:flex-col items-center justify-center gap-20 font-poppins  "
      >
        <div className=" max-lg:w-full w-1/2">
          <Image
            src={bannerImg}
            width={500}
            height={500}
            alt="Banner image"
            className=" w-full block h-auto max-md:max-w-[400px] max-w-[500px] m-auto "
          />
        </div>
        <div className=" max-lg:w-full w-1/2 flex flex-col gap-6 font-poppins leading-8 ">
          <h1 className=" text-3xl font-semibold ">
            WE MAXIMIZE YOUR VISA APPROVAL CHANCE
          </h1>
          <p className=" text-md" >
            It doesn’t matter which country you want to apply to; chances are
            our experts have experience applying for visas for hundreds of
            clients in that particular country!
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleCheck} /> Straightforward,
            stress-free, and convenient application process.
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleCheck} /> Experienced in US, UK,
            Schengen, Canada, and Australia visa processing.
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleCheck} /> Visas processed online with
            document submission, strategy calls, and personalized support for
            convenience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection2;
