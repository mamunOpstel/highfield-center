function Button({ text = "Button", rounded = false }) {

  return (
    <>
      <button
        className={`p-[12px] pr-8 pl-8 mt-4 rounded-md font-poppins text-white bg-sky-700 hover:bg-black  transition duration-300 w-fit ${rounded && `rounded-full` }`}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
