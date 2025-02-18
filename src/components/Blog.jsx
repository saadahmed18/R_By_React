function Blog() {
  return (
    <>
      <section className="bg-white py-16" id="blog">
        <div class="container m-auto px-4">
          <h2 className="text-center text-3xl font-bold">Blog</h2>
          <div className="flex justify-center flex-wrap gap-10 mt-5">
            <div className="flex items-center flex-wrap justify-center gap-4 rounded-lg bg-[#dbd6d6]">
            <img className="rounded-lg w-full md:w-auto" src="images/javascript.webp" alt="javascript" />
              <div class="description">
                <h3 className="mb-5 text-3xl font-bold">Learn Python</h3>
                <p>
                  Lorem ipsum dolor <br />
                  sit amet, consecte <br />
                  adipiscing elit. Proin <br />
                  tristique elit nec. lorem ipsum
                </p>
              </div>
            </div>
            <div className="flex items-center flex-wrap justify-center gap-4 rounded-lg bg-[#dbd6d6]">
              <img className="rounded-lg w-full md:w-auto" src="images/javascript.webp" alt="javascript" />
              <div class="description">
                <h3 className="mb-5 text-3xl font-bold">Learn Javascript</h3>
                <p>
                  Lorem ipsum dolor <br />
                  sit amet, consecte <br />
                  adipiscing elit. Proin <br />
                  tristique elit nec. lorem ipsum
                </p>
              </div>
            </div>
            <div className="flex items-center flex-wrap justify-center gap-4 rounded-lg bg-[#dbd6d6]">
            <img className="rounded-lg w-full md:w-auto" src="images/javascript.webp" alt="javascript" />
              <div class="description">
                <h3 className="mb-5 text-3xl font-bold">Learn UiUx</h3>
                <p>
                  Lorem ipsum dolor <br />
                  sit amet, consecte <br />
                  adipiscing elit. Proin <br />
                  tristique elit nec. lorem ipsum
                </p>
              </div>
            </div>
            <div className="flex items-center flex-wrap justify-center gap-4 rounded-lg bg-[#dbd6d6]">
            <img className="rounded-lg w-full md:w-auto" src="images/javascript.webp" alt="javascript" />
              <div class="description">
                <h3 className="mb-5 text-3xl font-bold">Learn Rust</h3>
                <p>
                  Lorem ipsum dolor <br />
                  sit amet, consecte <br />
                  adipiscing elit. Proin <br />
                  tristique elit nec. lorem ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Blog;
