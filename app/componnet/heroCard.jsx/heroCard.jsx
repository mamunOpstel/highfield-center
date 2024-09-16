import Image from "next/image";
import React from "react";
import Button from "../button/button";

function HeroCard({
  img,
  heading = "Heading",
  text = "Text",
  buttonText,
  reverse = false,
}) {
  let flexReverse = "";
  if (reverse) {
    flexReverse = "flex-row-reverse";
  }

  return (
    <section className=" bg-white overflow-hidden box-border ">
      <div
        className={`max-w-[1140px] flex ${flexReverse} max-lg:flex-col gap-6 justify-center items-center p-[20px] pt-[80px] pb-[120px] m-auto `}
      >
        <div className=" max-lg:w-full w-1/2">
          <Image
            src={img}
            width={600}
            height={400}
            alt="Image"
            className=" max-lg:max-w-[600px] w-full h-auto max-w-[530px] rounded-md block "
          />
        </div>

        <div className=" max-lg:w-full w-1/2 flex flex-col items-start justify-center max-lg:gap-4 max-lg:pr-6 gap-6 font-poppins ">
          <h1 className=" text-2xl font-bold ">{heading}</h1>
          <p className=" leading-8 text-zinc-700 ">{text}</p>
          {buttonText ? <Button text={buttonText} /> : ""}
        </div>
      </div>
    </section>
  );
}

export default HeroCard;
