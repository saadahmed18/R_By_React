function Hero() {
  return (
    <>
      <section className="bg-[#dee2e6] py-16">
        <div className="container m-auto px-4 flex justify-center items-center gap-24 flex-wrap">
          <div className="col">
            <h1 className="text-[40px] font-bold">
              Hello <br />
              I’m Ridho
            </h1>
            <p className="text-[#808080]">Freelancer Web Developer</p>
            <button type="button" className="px-[25px] py-[12px] mt-6 border-2 border-solid border-black rounded-[8px]">
              Hire Me
            </button>
          </div>
          <div className="col">
            <img src="/images/hero.webp" alt="Hero" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
