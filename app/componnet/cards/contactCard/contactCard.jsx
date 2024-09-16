import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./contactCard.module.css";

function ContactCard() {
  return (
    <section className=" bg-white p-4 pt-20 pb-20 ">
      <div className=" max-w-[1140px] bg-sky-700 m-auto p-20 flex max-md:flex-col justify-between items-center gap-4 rounded-xl ">
        <div>
          <h1 className=" max-md:text-xl text-3xl text-white font-poppins font-medium ">
            If you ar satisfaction this place please <br /> contact us
          </h1>
        </div>

        <div
          id={styles.bar}
          className=" min-w-[200px] bg-white rounded-full rounded-br "
        >
          <p id={styles.text}>Contact Us</p>
          <div
            id={styles.circle}
            className=" bg-white transition-all delay-300 rounded-full flex items-center relative z-0 "
          >
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              id={styles.icon}
              className=" w-[60px] h-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCard;
