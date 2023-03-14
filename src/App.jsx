// Importing Modules
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ParticalBackground from "./configs/ParticalBackground";

const App = () => {
  // Refrencing cursor
  let curzr = useRef(null);

  // Animation
  useEffect(() => {
    console.clear();
    let mouseX;
    let mouseY;
    let cursorScale = document.getElementById("text");
    // Initial properties
    gsap.set(curzr, { xPercent: -50, yPercent: -50 });

    //Actual animation
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(curzr, { x: mouseX, y: mouseY });
    });

    // // Cursor Animation on Text
    // cursorScale.addEventListener("mouseover", () => {
    //   curzr.style.mixBlendMode = "difference";
    //   gsap.to(curzr, {
    //     scale: 3,
    //     duration: 0.3,
    //   });
    // });
    // cursorScale.addEventListener("mouseleave", () => {
    //   curzr.style.mixBlendMode = "normal";
    //   gsap.to(curzr, {
    //     scale: 1,
    //     duration: 0.3,
    //   });
    // });

    // // Cursor Image followUp
    // let curzrIcon = document.querySelector("#curzr_follow svg");
    // let curzrStyle = curzrIcon.style;
    // window.addEventListener("mousemove", (e) => {
    //   curzrStyle.left = e.clientX;
    //   curzrStyle.top = e.clientY;
    // });
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
      <div className="flex flex-col gap-10 w-full " id="_">
        <div>
          <Navbar />
        </div>
        <Home />
      <ParticalBackground/>

      </div>
    </>
  );
};

export default App;
