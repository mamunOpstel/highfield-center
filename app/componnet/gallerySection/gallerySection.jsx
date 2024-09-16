"use client"
import React from "react";
import Banner from "../banner/banner";

import university1 from "@/app/asset/images/university/university1.svg";
import university2 from "@/app/asset/images/university/university2.svg";
import university3 from "@/app/asset/images/university/university3.svg";
import university4 from "@/app/asset/images/university/university4.svg";
import university5 from "@/app/asset/images/university/university5.svg";
import university6 from "@/app/asset/images/university/university6.svg";
import Image from "next/image";

function GallerySection() {
  let imgList = [
    university2,
    university3,
    university4,
    university5,
    university6,
    university1,
  ];

  return (
    <section className="bg-cyan-650 bg-white ">
      <div className=" max-w-[1140px] m-auto text-white p-[80px] pr-[20px] pl-[20px] font-poppins  ">
        <Banner heading={"Our Sucess Story"} color={"blue"} />

        <div className=" flex overflow-hidden gap-2 ">
          {imgList.map((img) => (
            <Image
              src={img}
              width={100}
              height={100}
              alt="university Image"
              className=" max-md:w-full w-[180px] h-auto block rounded-md "
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
