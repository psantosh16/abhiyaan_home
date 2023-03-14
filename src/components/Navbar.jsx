import Logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <nav className="fixed w-screen top-0 z-[1000] bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-b-[1rem]" id="nav_main">  
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14" id="nav_inner_wrapper">
          {/* Logo */}
          <span id="nav_logo"  className="">
            <img src={Logo} className="h-[9rem] w-[10rem]" alt="logo"/>
          </span>
          {/* Bar_Icon svg */}
          <div id="bar_icon"  className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          {/* Navbar Links */}
          <div id="nav_links"  className="md:flex hidden space-x-4 text-white">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
