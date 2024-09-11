import bannerImg from "@/app/asset/images/banner-img.png";
import Image from "next/image";
import Button from "../button/button";

function HeroSection() {
  return (
    <section className=" w-screen bg-cyan-700 ">
      <div
        className=" max-w-[1140px] m-auto border-2 text-white p-[80px] pr-[20px] pl-[20px] flex max-md:flex-col items-center justify-center gap-20  "
        style={{ fontFamily: "Poppins" }}
      >
        <div className=" max-md:w-full flex flex-col gap-4 w-1/2 items-start ">
          <p className=" max-md:text-sm text-xl font-semibold leading-9 ">
            Apply Visa To Your Dream Country With Expert Help!
          </p>
          <h1 className=" max-md:text-3xl text-4xl font-semibold leading-9 ">
            Highfield Center
          </h1>
          <p className=" text-sm leading-6">
            “Highfield Center Your trusted partner for seamless visa processing
            and hassle-free travel experiences.”
          </p>
          <Button buttonType={"normal"} text={"Click here"}></Button>
        </div>
        <div className=" max-md:w-full w-1/2 flex justify-center  ">
          <Image
            src={bannerImg}
            width={500}
            height={500}
            alt="Banner image"
            className=" w-full block h-auto max-md:max-w-[400px] max-w-[500px] "
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
