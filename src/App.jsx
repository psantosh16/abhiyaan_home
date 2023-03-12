import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  let curzr = useRef(null);

  useEffect(() => {
    let mouseX;
    let mouseY;
    let cursorScale = document.getElementById("text");
    console.clear();
    gsap.set(curzr, { xPercent: -50, yPercent: -50 });
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(curzr, { x: mouseX, y: mouseY });
    });

    cursorScale.addEventListener("mouseover", () => {
      gsap.to(curzr, {
        scale: 3,
        duration: 0.3,
      });
    });
    cursorScale.addEventListener("mouseleave", () => {
      gsap.to(curzr, {
        scale: 1,
        duration: 0.3,
      });
    });
  }, []);

  return (
    <>
      <div
        ref={(el) => {
          curzr = el;
        }}
        id="curzr"
        className="fixed bg-white bg-opacity-100 left-0 cursor-pointer mix-blend-difference rounded-[50%] pointer-events-none top-0 w-[30px] h-[30px] z-[80000] "
      ></div>
      <div className="flex flex-col gap-10 w-full ">
        <div>
          <Navbar />
        </div>
        <Home />
      </div>
    </>
  );
};

export default App;
