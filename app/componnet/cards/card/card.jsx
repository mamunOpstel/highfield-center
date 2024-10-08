import Image from "next/image";
import React from "react";
import Button from "../../button/button";

function Card({
  img,
  heading,
  text,
  bgColor = "bg-white",
  textColor = "black",
  hover,
  btnText,
  rounded = "rounded-lg",
  shadow = "shadow-lg",
  height = "",
}) {
  let bg = bgColor;
  return (
    <div
      className={`${bg} ${rounded} p-2  flex flex-col items-start justify-between font-poppins ${shadow} `}
    >
      <Image
        src={img}
        width={100}
        height={100}
        alt="Card image"
        className={`w-full block rounded-lg mb-4 object-cover `}
        style={height ? { height: height } : { height: "auto" }}
      />
      <div className=" pl-4">
        <p
          className={`text-2xl text-cyan-700 font-semibold mb-2 text-start ${textColor} `}
        >
          {heading}
        </p>
        <p className={`text-start text-neutral-500 ${textColor}  `}>{text}</p>
        {btnText && <Button text={btnText} />}
      </div>
    </div>
  );
}

export default Card;
