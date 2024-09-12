import * as motion from "framer-motion/client";

function Button({ text = "Button", rounded = false }) {
  return (
    <>
      <motion.button className=" p-[12px] pr-6 pl-6 mt-4 rounded-md font-poppins text-white bg-sky-700 hover:bg-black  transition duration-300 ">
        {text}
      </motion.button>
    </>
  );
}

export default Button;
