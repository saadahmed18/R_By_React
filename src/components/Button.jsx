function Button({ nameBtn, stylec }) {
  return (
    <>
      <button type="button" className={`px-[25px] py-[12px] mt-6 border-2 border-solid border-black rounded-[8px] hover:bg-[#212529] hover:text-white ${stylec}`}>
        {nameBtn}
      </button>
    </>
  );
}
export default Button;
