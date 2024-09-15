import styles from "./navBanner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function NavBanner() {
  return (
    <div className=" max-lg:hidden bg-cyan-600 ">
      <div className=" flex justify-around items-center h-[70px] max-w-[1140px] m-auto  ">

        <div className=" flex  gap-24 text-white ">
          <div className=" flex items-center gap-2 cursor-pointer" >
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            +8801700-543345
          </div>
          <div className=" flex items-center gap-2" >
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />{" "}
            highfieldcenter@gmail.com
          </div>
        </div>

        <div
          id={styles.socialBox}
          className=" flex gap-4 items-center "
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
    </div>
  );
}

export default NavBanner;
