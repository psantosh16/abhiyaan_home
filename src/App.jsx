// Importing Modules
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import ParticalBackground from "../configs/ParticalBackground";

const App = () => {
  // Refrencing cursor
  let curzr = useRef(null);

  // Animation
  useEffect(() => {
    console.clear();
    let mouseX;
    let mouseY;
    // Initial properties
    gsap.set(curzr, { xPercent: -50, yPercent: -50 });

    //Actual animation
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(curzr, { x: mouseX, y: mouseY });
    });
  }, []);

  // Render
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

      {/* Content */}
      <Navbar/>
      <Home/>
    </>
  );
};

export default App;
