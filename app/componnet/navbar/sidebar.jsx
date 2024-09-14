import { faAngleDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./sidebar.module.css";

function Sidebar({ switchFunc }) {
  function switchMenu() {
    switchFunc();
  }

  return (
    <div className=" font-poppins " >
      <FontAwesomeIcon
        icon={faXmark}
        className=" w-[20px] h-[20px] p-2 cursor-pointer float-right clear-both m-8 text-orange-500 border-2 border-orange-500 rounded-md shadow-lg "
        onClick={switchMenu}
      />
      {/* Menu starts here */}
      <ul
        id={styles.sideMenu}
        className=" mt-16 p-8 pt-20 flex flex-col gap-6 w-full"
      >
        <li>HOME</li>
        <li>
          ABOUT
          <FontAwesomeIcon
            icon={faAngleDown}
            className=" w-[12px] h-[12px] float-end "
          />
          <ul id={styles.dropdown} className=" hidden">
            <li>Our Experts</li>
            <li>Our Success</li>
          </ul>
        </li>
        <li>
          SERVICES
          <ul id={styles.dropdown} className=" hidden bg-cyan-700">
            <li id={styles.visa}>
              Visit VIsa{" "}
              <FontAwesomeIcon
                icon={faAngleDown}
                className=" w-[12px] h-[12px] float-end  "
              />
              {/* Dropdown menu starts */}
              <ul
                id={styles.visaDropdown}
                className=" hidden bg-cyan-700 border-2 shadow-md"
              >
                <li>Visiting In UK</li>
                <li>Visiting In USA</li>
                <li>Visiting In CANADA</li>
                <li>Visiting In AUSTRALIA</li>
                <li>Visiting In DENMARK</li>
                <li>Visiting In MALTA</li>
              </ul>
              {/* Dropdown menu ends */}
            </li>

            <li>Workpermit Visa</li>
            <li id={styles.air}>
              Air Ticket
              <FontAwesomeIcon
                icon={faAngleDown}
                className=" w-[12px] h-[12px] float-end  "
              />
              {/* Dropdown menu starts */}
              <ul
                id={styles.airDropdown}
                className=" hidden bg-cyan-700 border-2 shadow-md"
              >
                <li>Domestic</li>
                <li>International</li>
              </ul>
            </li>
          </ul>
        </li>
        <li id={styles.study}>
          STUDY DESTINATION
          <FontAwesomeIcon
            icon={faAngleDown}
            className=" w-[12px] h-[12px] float-end  "
          />
          {/* Dropdown menu starts */}
          <ul
            id={styles.studyDropdown}
            className=" hidden bg-cyan-700 border-2 shadow-md pt-8 pb-8"
          >
            <li>Study In UK</li>
            <li>Study In USA</li>
            <li>Study In CANADA</li>
            <li>Study In AUSTRALIA</li>
            <li>Study In DENMARK</li>
            <li>Study In MALTA</li>
          </ul>
        </li>
        <li>BLOG</li>
        <li>CONTANT</li>
      </ul>
      {/* Menu ends here */}
    </div>
  );
}

export default Sidebar;
