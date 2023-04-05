import { useEffect, useState } from "react";
import Logo from "../assets/logo.webp";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [mobile, setMobile] = useState(false);

  function HandelRender({ name }) {
    if (name == "home" || name == "Home") {
      if (mobile == true) {
        return (
          <a
            href={"#root"}
            onClick={() => {
              setNavbar(!navbar);
            }}
          >
            {name}
          </a>
        );
      } else {
        return <a href={"#root"}>{name}</a>;
      }
    } else {
      if (mobile == true) {
        return (
          <a
            href={"#" + name}
            onClick={() => {
              setNavbar(!navbar);
            }}
          >
            {name}
          </a>
        );
      } else {
        return <a href={"#" + name}>{name}</a>;
      }
    }
  }
  const NavElements = () => {
    const el = [
      "home",
      "about",
      "events",
      "gallery",
      "teams",
      "sponsers",
      "contact",
    ];
    return (
      <>
        {el.map((item) => {
          return (
            <li key={item} className="overflow-hidden hover:text-orange-500">
              <HandelRender name={item} />
            </li>
          );
        })}
      </>
    );
  };

  useEffect(() => {
    function checkMobile() {
      let width = window.innerWidth;
      let height = window.innerHeight;

      if (width < 768 && height > width) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
    checkMobile();
  }, []);

  return (
    <nav
      id="navbar"
      className={`w-screen top-0 fixed z-[100] md:h-[10vh] h-auto select-none  ${
        navbar
          ? "backdrop-blur-[1rem]  bg-[rgba(0%,_0%,_0%,_0.75)] h-screen"
          : "backdrop-blur-[0.5rem]  bg-[hsla(0,_0%,_100%,_0.05)]"
      }`}
    >
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 items-center h-full">
        <div className="flex items-center justify-between h-14 overflow-hidden">
          <div>
            <a href="/">
              <img
                src={Logo}
                className={`h-auto w-[10rem] overflow-hidden ${
                  navbar ? "hidden" : "visible"
                } `}
                alt="logo"
              />
            </a>
          </div>
          <div className="md:hidden">
            <button
              className=" text-white rounded-md outline-none md:hidden"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                // cross.svg
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                // 3-bar.svg
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ffffff"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block text-4xl" : "hidden"
            }`}
          >
            <ul className="items-center justify-center text-center space-y-8 md:flex md:space-x-6 md:space-y-0 md:text-white capitalize font-openSans ">
              <NavElements />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
