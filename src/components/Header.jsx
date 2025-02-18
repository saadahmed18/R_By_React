function Header() {
  return (
    <>
      <header className="bg-[#212529] text-white py-5">
        <div className="container m-auto px-4 flex justify-between items-center">
          <div className="logo text-3xl font-bold">
            <a href="/">R</a>
          </div>
          <nav>
            <img className="hover:cursor-pointer md:hidden" src="/icons/menu.webp" alt="Menu Icon" />
            <ul className="hidden md:flex gap-5">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
