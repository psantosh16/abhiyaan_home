// Importing Modules
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

const App = () => {
  let curzr = useRef(null);

  window.onload = function () {
    showMouseCurzr();
  };

  function showMouseCurzr() {
    if (window.innerWidth < 1024 && window.innerHeight > window.innerWidth) {
      curzr.style.visibility = "hidden";
    } else {
      curzr.style.visibility = "visible";
    }
  }

  // Animation
  useEffect(() => {
    let mouseX;
    let mouseY;
    gsap.set(curzr, { xPercent: -50, yPercent: -50 });

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(curzr, { x: mouseX, y: mouseY });
    });
  }, []);

  return (
    <>
      {/* Ignore */}
      <div
        ref={(el) => {
          curzr = el;
        }}
        id="curzr"
        className="fixed bg-white bg-opacity-100 left-0 cursor-pointer  rounded-[50%] pointer-events-none top-0 w-[20px] h-[20px] z-[80000] "
      ></div>

      <div className="flex flex-col w-full ">
        <div>
          <Navbar />
        </div>
        <Home />
        <About />
        <Gallery/>
      </div>
    </>
  );
};

export default App;
