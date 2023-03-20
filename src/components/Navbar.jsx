import { useState } from "react";
import Logo from "../assets/logo.png";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className={`w-screen top-0 fixed z-[1000]  ${
      navbar ? "backdrop-blur-none bg-black h-screen" : "backdrop-blur-xl rounded-b-2xl bg-transpernt"
    }`}>
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex h-14 items-center justify-between  md:block overflow-hidden">
            <a href="#home">
              <img src={Logo} alt="abhiyaan_logo" className="w-[10rem] p-2 h-auto" />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block text-4xl" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white overflow-hidden hover:text-blue-600">
                <a href="#root" onClick={()=>{
                  setNavbar(!navbar);
                }}>Home</a>
              </li>
              <li className="text-white overflow-hidden hover:text-blue-600">
                <a href="#about" onClick={()=>{
                  setNavbar(!navbar);
                }}>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
