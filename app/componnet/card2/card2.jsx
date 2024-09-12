import Image from "next/image";
import React from "react";

function Card2({ img, heading, text }) {
  return (
    <div className=" bg-white box " >
      <Image src={img} width={100} height={100} alt="Card image" />
      <p>{heading}</p>
      <p>{text}</p>
    </div>
  );
}

export default Card2;
