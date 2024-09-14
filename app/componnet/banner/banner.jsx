import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

function Banner({ heading, text, color }) {
  return (
    <>
      {color ? (
        <div className=" flex flex-col items-center gap-6 font-poppins mt-8 mb-8 ">
          <h1 className=" text-3xl text-cyan-700 font-bold ">{heading}</h1>
          <div className=" flex items-center gap-2">
            <span className=" w-[150px] h-[1px] bg-cyan-700 "></span>
            <FontAwesomeIcon
              icon={faPlaneDeparture}
              className=" w-[25px] h-[25px] text-cyan-700 "
            />
            <span className=" w-[150px] h-[1px] bg-cyan-700 "></span>
          </div>
          {text && <p className=" text-neutral-500">{text}</p>}
        </div>
      ) : (
        <div className=" flex flex-col items-center gap-8 font-poppins ">
          <h1 className=" text-3xl text-white font-bold ">{heading}</h1>
          <div className=" flex items-center gap-2">
            <span className=" w-[150px] h-[1px] bg-white "></span>
            <FontAwesomeIcon
              icon={faPlaneDeparture}
              className=" w-[25px] h-[25px] text-white "
            />
            <span className=" w-[150px] h-[1px] bg-white "></span>
          </div>
          {text && <p className=" text-neutral-500 ">{text}</p>}
        </div>
      )}
    </>
  );
}

export default Banner;
