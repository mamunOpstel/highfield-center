function HoverButton({ text, direction }) {
  return (
    <>
      {direction ? (
        <button className=" bg-cyan-700 border-2 p-[12px] pr-6 pl-6 mt-4 rounded-md font-poppins transition duration-300 hover:bg-white hover:text-black hover:translate-y-[12px] ">
          {text}
        </button>
      ) : (
        <button className=" bg-cyan-700 border-2 p-[12px] pr-6 pl-6 mt-4 rounded-md font-poppins transition duration-300 hover:bg-white hover:text-black hover:translate-y-[-12px] ">
          {text}
        </button>
      )}
    </>
  );
}

export default HoverButton;
