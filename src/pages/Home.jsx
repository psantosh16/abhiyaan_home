import BtmImg from "../utils/BtmImg";
import TopImg from "../utils/TopImg";
import Logo from "../components/Logo";
import ParticalBackground from "../components/ParticalBackground";
import "../index.css";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

import Navbar from "../components/Navbar";
import About from "./About";
import Gallery from "../Gallery/components/Gallery";
import Events from "./Events/Events";

const Home = () => {
  // let curzr = useRef(null);

  // window.onload = function () {
  //   showMouseCurzr();
  // };

  // function showMouseCurzr() {
  //   if (window.innerWidth < 1024 && window.innerHeight > window.innerWidth) {
  //     curzr.style.visibility = "hidden";
  //   } else {
  //     curzr.style.visibility = "visible";
  //   }
  // }

  // // Animation
  // useEffect(() => {
  //   let mouseX;
  //   let mouseY;
  //   gsap.set(curzr, { xPercent: -20, yPercent: -20 });

  //   window.addEventListener("mousemove", (e) => {
  //     mouseX = e.clientX;
  //     mouseY = e.clientY;
  //     gsap.to(curzr, { x: mouseX, y: mouseY });
  //   });
  // }, []);
  return (
    <>
      {/* <div
        ref={(el) => {
          curzr = el;
        }}
        id="curzr"
        className="fixed bg-white bg-opacity-100 left-0 cursor-pointer  rounded-[50%] pointer-events-none top-0 w-[20px] h-[20px] z-[80000] "
      ></div> */}

      <div className="flex flex-col w-full ">
        <div>
          <Navbar />
        </div>
        <div
          className=" overflow-hidden bg-no-repeat bg-cover z-10 w-full h-screen relative top-0 left-0 py-10 px-2 select-none"
          id="home"
        >
          <ParticalBackground />
          <section className="overflow-hidden w-screen h-screen grid grid-cols-[auto,_auto] justify-between content-between pt-20  px-4 absolute  top-0 left-0">
            <TopImg />
            <BtmImg />
          </section>
          <div className="w-screen h-screen flex justify-center items-center flex-col absolute top-0 m-auto overflow-hidden">
            <Logo />
          </div>
        </div>
        <About />
        <Gallery />
        <Events />
      </div>
    </>
  );
};

export default Home;
