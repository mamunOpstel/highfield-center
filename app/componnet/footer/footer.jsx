"use client";
import Image from "next/image";
import logo from "@/app/asset/images/highfield-logo.jpg";
import styles from "./footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import university1 from "@/app/asset/images/university/university1.svg";
import university2 from "@/app/asset/images/university/university2.svg";
import university3 from "@/app/asset/images/university/university3.svg";
import university4 from "@/app/asset/images/university/university4.svg";
import university5 from "@/app/asset/images/university/university5.svg";
import university6 from "@/app/asset/images/university/university6.svg";

function Footer() {
  let imgList = [
    university2,
    university3,
    university4,
    university5,
    university6,
    university1,
  ];

  return (
    <section className=" bg-slate-700  text-white font-poppins ">
      <div className=" max-w-[1140px] m-auto p-8 pt-12 grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-4 gap-16 ">
        <div className=" max-md:w-full flex flex-col gap-8 ">
          <Image
            src={logo}
            width={80}
            height={80}
            alt="Logo"
            className=" rounded-lg"
          />
          <p className=" leading-7 text-md ">
            “ Highfield Center: Empowering communities through education,
            innovation, and collaboration for sustainable growth and
            development. ”
          </p>

          <div
            id={styles.socialBox}
            className=" flex gap-4 items-center w-fit "
          >
            <Link href="#" className={styles.links}>
              <FontAwesomeIcon icon={faFacebook} className={styles.icons} />
            </Link>
            <Link href="#" className={styles.links}>
              <FontAwesomeIcon icon={faLinkedinIn} className={styles.icons} />
            </Link>
            <Link href="#" className={styles.links}>
              <FontAwesomeIcon icon={faTwitter} className={styles.icons} />
            </Link>
            <Link href="#" className={styles.links}>
              <FontAwesomeIcon icon={faInstagram} className={styles.icons} />
            </Link>
          </div>
        </div>
        <div className=" max-md:w-full ">
          <h1 className=" text-xl font-semibold mb-4 ">Useful Links</h1>
          <ul className=" pl-6 ">
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className={styles.checkIcon} /> About us
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck}  className={styles.checkIcon}/> Services
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck}  className={styles.checkIcon}/> Apply Now
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck}  className={styles.checkIcon}/> Blog
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck}  className={styles.checkIcon}/> Contact
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck}  className={styles.checkIcon}/> Study Destination
            </li>
          </ul>
        </div>
        <div className=" max-md:w-full ">
          <h1 className=" text-xl font-semibold mb-4">Our Services</h1>
          <ul className=" pl-6 ">
            <li>
              <FontAwesomeIcon icon={faCircleCheck}  className={styles.checkIcon}/> Visit Visa
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck}  className={styles.checkIcon}/> Student Visa
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck}  className={styles.checkIcon}/> Air Ticket
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck}  className={styles.checkIcon}/> Workpermit Visa
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck}  className={styles.checkIcon}/> Contact
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck}  className={styles.checkIcon}/> Study Destination
            </li>
          </ul>
        </div>
        <div className=" max-md:w-full ">
          <h1 className=" text-xl font-semibold mb-4 ">Our Gallery</h1>
          <div className=" grid max-lg:grid-cols-2 grid-cols-3 gap-2 items-center ">
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
      </div>
      <div className=" bg-cyan-600">
        <div className=" max-w-[1140px] m-auto flex justify-between p-6 ">
          <p>Copyright©2024. Highfield Center</p>
          <p>Powered By DortStudio</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
