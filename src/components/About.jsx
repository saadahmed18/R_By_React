import Button from "./Button";
function About() {
  return (
    <>
      <section id="about" className="py-16">
        <div className="container m-auto px-4 flex justify-center items-center gap-24 flex-wrap">
          <h2 className="text-4xl font-bold">
            About <br />
            Me
          </h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin <br />
              tristique elit nec malesuada tincidunt. Pellentesque lobortis <br />
              metus quis ipsum mattis, vitae laoreet est posuere. Mauris <br />
              bibendum eros massa, sit amet tempor sem lobortis non.
            </p>
            <Button />
            <Button />
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
