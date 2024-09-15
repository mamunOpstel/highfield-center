import Image from "next/image";
import boothImg from "@/app/asset/images/booth.svg";
import Button from "../button/button";

function HelpSection() {
  return (
    <section className=" bg-white">
      <div className=" w-full max-w-[1140px] p-8 pt-24 m-auto min-h-40 pb-20 max-md:flex-col flex gap-12  ">
        <div className=" max-md:w-full w-1/2">
          <Image
            src={boothImg}
            width={200}
            height={150}
            alt="Booth Image"
            className=" w-full block rounded-md "
          />
        </div>
        <div className=" max-md:w-full w-1/2 flex flex-col justify-evenly max-md:gap-4 font-poppins ">
          <h2 className=" text-2xl font-semibold text-neutral-500 " >
            NEED HELP? <span className=" block text-cyan-700 ">TALK TO AN OUR EXPERT!!</span>
          </h2>
          <p className=" text-neutral-600" >
            Reach out to Highfield Center and speak with one of our experts for
            tailored advice and assistance on your visa application.
          </p>
          <Button rounded={true} text="TALK TO AN EXPERT" />
        </div>
      </div>
    </section>
  );
}

export default HelpSection;
