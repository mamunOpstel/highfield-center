import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function TestimonialCard({ text,name, img }) {
  return (
    <div className=" max-lg:w-[90%] max-lg:h-fit max-lg:gap-8 w-[350px] h-[360px] bg-white shadow-xl p-[30px] pt-16 rounded-lg flex flex-col justify-between font-poppins ">
      <p className=" text-neutral-500 leading-8 ">
       {text}
      </p>
      <div className=" flex justify-between">
        <div className=" flex items-center gap-2 ">
          <Image
            src={img}
            width={50}
            height={50}
            alt="Client Image"
            className=" rounded-full border-2 w-[80px] h-[80px] "
          />
          <div>
            <h1 className=" text-black text-lg ">{name}</h1>
            <p className=" text-neutral-500 text-sm ">Client</p>
          </div>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faQuoteRight}
            className=" text-black w-[100px] h-[80px] "
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
