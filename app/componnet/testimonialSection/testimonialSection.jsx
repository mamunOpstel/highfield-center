import React from "react";
import Banner from "../banner/banner";

function TestimonialSection() {
  return (
    <section className=" w-screen bg-gray-200 ">
      <div className=" max-w-[1140px] m-auto text-white p-20 max-md:pl-8 max-md:pr-8 pl-12 pr-12 flex max-lg:flex-col items-center justify-center gap-20 font-poppins  ">
        <Banner color={"blue"} heading={"What Client Say"} />
      </div>
    </section>
  );
}

export default TestimonialSection;
