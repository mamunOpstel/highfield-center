"use client";
import Image from "next/image";
import logo from "@/app/asset/images/highfield-logo.jpg";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <section className="container relative z-50 w-screen ">
      <div className=" bg-white w-screen">
        <div className=" flex justify-between p-[20px] items-center gap-[20px] w-screen max-w-[1140px] m-auto  bg-white text-neutral-600 fontRoboto ">
          <Image
            src={logo}
            width={65}
            height={50}
            alt="Logo"
            className=" rounded-[5px] h-[50px] w-[65px] max-w-[65px] cursor-pointer "
          />

          <button
            id={styles.menuBtn}
            className=" hidden border-[1px] border-orange-400 p-[8px] w-[45px] h-[29px] max-lg:block hover:bg-orange-500 rounded-sm "
            onClick={() => setOpenSideMenu(!openSideMenu)}
          >
            <span className=" h-[1px] w-full bg-orange-400 border-solid block mb-[4px] hover:bg-white "></span>
            <span className=" h-[1px] w-full bg-orange-400 border-solid block mb-[4px] hover:bg-white "></span>
            <span className=" h-[1px] w-full bg-orange-400 border-solid block mb-[4px] hover:bg-white "></span>
          </button>

          {/* Menu starts here */}
          <ul
            id={styles.menuUl}
            className=" max-lg:hidden flex gap-6 relative z-10 "
          >
            <li>HOME</li>
            <li id={styles.about} className="">
              ABOUT US{" "}
              <FontAwesomeIcon
                icon={faAngleDown}
                className=" w-[12px] h-[12px] inline "
              />
              {/* Dropdown menu starts */}
              <div
                id={styles.dropdown}
                className=" absolute opacity-1 top-[-10px] "
              >
                <ul className=" flex flex-col rounded-md min-w-[220px] ">
                  <li>Our Experts</li>
                  <li>Our Success</li>
                </ul>
              </div>
              {/* Dropdown menu ends */}
            </li>

            <li id={styles.services} className=" cursor-pointer">
              SERVICES{" "}
              <FontAwesomeIcon
                icon={faAngleDown}
                className=" w-[12px] h-[12px] inline "
              />
              {/* Dropdown menu starts */}
              <div
                id={styles.dropdown}
                className=" absolute opacity-1 top-[-10px] "
              >
                <ul className=" flex flex-col rounded-md min-w-[220px] ">
                  <li id={styles.visa}>
                    Visit VIsa{" "}
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className=" w-[12px] h-[12px] inline relative overflow-visible "
                    />
                    {/* Dropdown menu starts */}
                    <div
                      id={styles.visaDropdown}
                      className=" absolute left-24 bg-green-300"
                    >
                      <ul className=" flex flex-col rounded-md min-w-[220px] ">
                        <li>Visiting In UK</li>
                        <li>Visiting In USA</li>
                        <li>Visiting In CANADA</li>
                        <li>Visiting In AUSTRALIA</li>
                        <li>Visiting In DENMARK</li>
                        <li>Visiting In MALTA</li>
                      </ul>
                    </div>
                    {/* Dropdown menu ends */}
                  </li>

                  <li>Workpermit Visa</li>
                  <li id={styles.ticket}>
                    Air Ticket{" "}
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className=" w-[12px] h-[12px] inline relative overflow-visible "
                    />
                    {/* Dropdown menu starts */}
                    <div
                      id={styles.ticketDropdown}
                      className=" absolute left-24 bg-green-300"
                    >
                      <ul className=" flex flex-col rounded-md min-w-[220px] ">
                        <li>Domestic</li>
                        <li>International</li>
                      </ul>
                    </div>
                    {/* Dropdown menu ends */}
                  </li>
                </ul>
              </div>
              {/* Dropdown menu ends */}
            </li>

            <li id={styles.study}>
              STUDY DESTINATION{" "}
              <FontAwesomeIcon
                icon={faAngleDown}
                className=" w-[12px] h-[12px] inline "
              />
              <div
                id={styles.dropdown}
                className=" absolute opacity-1 top-[-10px] "
              >
                <ul className=" flex flex-col rounded-md min-w-[220px] ">
                  <li>Study In UK</li>
                  <li>Study In USA</li>
                  <li>Study In CANADA</li>
                  <li>Study In AUSTRALIA</li>
                  <li>Study In DENMARK</li>
                  <li>Study In MALTA</li>
                </ul>
              </div>
            </li>

            <li>BLOG</li>
            <li>CONTANT</li>
          </ul>
          {/* Menu ends here */}

          {/* Search box starts here */}
          <div className=" max-md:hidden flex h-[36px] bg-gray-200 items-center ">
            <input
              type="text"
              name=""
              id={styles.input}
              placeholder="Search here..."
              className=" w-full h-[36px] p-0 pr-[12px] pl-[12px] border-[1px] outline-0 text-zinc-800"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className=" w-[40px] h-[25px] cursor-pointer "
            />
          </div>
          {/* Search box ends here */}
        </div>

        {/* Sidebar starts here */}
        {/* {openSideMenu && (
          <div className=" bg-white w-screen h-screen absolute top-0 bottom-0 transition duration-200  ease-in-out">
            <FontAwesomeIcon
              icon={faXmark}
              className=" w-[25px] h-[25px] cursor-pointer float-right mr-8 mt-8 "
              onClick={() => setOpenSideMenu(!openSideMenu)}
            />

            <ul
              id={styles.menuUl}
              className="flex gap-6 relative z-10 "
            >
              <li>HOME</li>
              <li id={styles.about} className="">
                ABOUT US{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className=" w-[12px] h-[12px] inline "
                />
              </li>

              <li id={styles.services} className=" cursor-pointer">
                SERVICES{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className=" w-[12px] h-[12px] inline "
                />
              </li>

              <li id={styles.study}>
                STUDY DESTINATION{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className=" w-[12px] h-[12px] inline "
                />
              </li>

              <li>BLOG</li>
              <li>CONTANT</li>
            </ul>
          </div>
        )} */}
        {/* Sidebar ends here */}
      </div>
    </section>
  );
}

export default Navbar;
