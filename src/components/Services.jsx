function Services() {
  return (
    <>
      <section id="services" className="bg-[#dee2e6] py-16">
        <div className="container m-auto px-4">
          <div className="text-center mb-5">
            <h2 className="text-4xl font-bold">Services</h2>
            <p className="text-[#808080]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin <br />
              tristique elit nec malesuada tincidunt. Pellentesque lobortis.
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-10">
            <div className="bg-[#212529] p-6 rounded-lg text-center">
              <img src="/icons/web-development.webp" alt="Web Development Icon" />
              <h3 className="my-5 text-white">Web Development</h3>
              <p className="text-[#dbd6d6]">
                Lorem ipsum dolor sit <br />
                amet, consectetur <br />
                adipiscing elit. Proin <br />
                tristique elit nec
              </p>
            </div>
            <div className="bg-[#212529] p-6 rounded-lg text-center">
              <img src="/icons/web-design.webp" alt="Web Design Icon" />
              <h3 className="my-5 text-white">Web Design</h3>
              <p className="text-[#dbd6d6]">
                Lorem ipsum dolor sit <br />
                amet, consectetur <br />
                adipiscing elit. Proin <br />
                tristique elit nec
              </p>
            </div>
            <div className="bg-[#212529] p-6 rounded-lg text-center">
              <img src="/icons/mobile.webp" alt="Mobile Icon" />
              <h3 className="my-5 text-white">App Design</h3>
              <p className="text-[#dbd6d6]">
                Lorem ipsum dolor sit <br />
                amet, consectetur <br />
                adipiscing elit. Proin <br />
                tristique elit nec
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;
