import Image from "next/image";
import React from "react";

function Card2({ img, heading, text }) {
  return (
    <div className=" bg-white box shadow-lg p-4 pb-6 rounded-lg font-poppins ">
      <Image
        src={img}
        width={100}
        height={100}
        alt="Card image"
        className=" w-full h-auto aspect-auto block rounded-lg mb-4 "
      />
        <p className="text-2xl text-cyan-700 font-semibold mb-4 text-center ">{heading}</p>
        <p className=" text-center text-neutral-500 " >{text}</p>
    </div>
  );
}

export default Card2;
