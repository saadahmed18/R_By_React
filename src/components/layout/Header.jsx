import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 bg-[#212529] text-white py-5">
        <div className="container m-auto px-4 flex justify-between items-center">
          <div className="logo text-3xl font-bold">
            <a href="/">R</a>
          </div>
          <nav>
            <button className=" md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img className="hover:cursor-pointer" src="/icons/menu.webp" alt="Menu Icon" />
            </button>
            <ul className={`${isMenuOpen ? "absolute right-0 top-20 w-[250px] rounded-md bg-[#212529] p-3" : "hidden"} md:flex gap-5`}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
