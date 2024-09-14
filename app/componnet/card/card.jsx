import Image from "next/image";
import React from "react";
import Button from "../button/button";

function Card({ img, heading, text, bgColor = "bg-white", btnText }) {
  let bg = bgColor;
  return (
    <div
      className={`${bg} rounded-lg p-2 pb-4  flex flex-col items-start justify-between font-poppins shadow-lg `}
    >
      <Image
        src={img}
        width={100}
        height={100}
        alt="Card image"
        className=" w-full h-auto aspect-auto block rounded-lg mb-4 "
      />
      <div className=" pl-4">
        <p className="text-2xl text-cyan-700 font-semibold mb-4 text-start ">
          {heading}
        </p>
        <p className=" text-start text-neutral-500 ">{text}</p>
        {btnText && <Button text={btnText} />}
      </div>
    </div>
  );
}

export default Card;
