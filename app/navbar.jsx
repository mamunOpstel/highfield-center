import Image from "next/image";
import logo from "@/app/asset/images/highfield-logo.jpg";
import search from "@/app/asset/images/search.jpg"

function Navbar() {
  return (
    <section className="container">
      <div className=" flex justify-between p-[20px] items-center gap-[20px] w-screen max-w-[2400px] bg-slate-500 ">
        <Image src={logo} width={65} height={50} alt="Logo" className=" rounded-[5px] h-[50px] w-[65px] max-w-[65px] " />
        <button className=" hidden border-[1px] border-orange-400 p-[8px] w-[45px] h-[29px] max-lg:block hover:bg-orange-500  ">
          <span className=" h-[1px] w-full bg-orange-400 border-solid block mb-[4px] hover:bg-white " ></span>
          <span className=" h-[1px] w-full bg-orange-400 border-solid block mb-[4px] hover:bg-white " ></span>
          <span className=" h-[1px] w-full bg-orange-400 border-solid block mb-[4px] hover:bg-white " ></span>
        </button>
        <div className=" max-md:hidden flex bg-slate-500 h-[36px] " >
          <input type="text" name="" id="" placeholder="Search here..." className=" w-full h-[36px] p-0 pr-[12px] pl-[12px] border-[1px] " />
          <Image src={search} width={50} height={50} alt="search icon" className=" bg-white max-w-[35px] " />

        </div>

      </div>
      <div></div>
    </section>
  );
}

export default Navbar;
