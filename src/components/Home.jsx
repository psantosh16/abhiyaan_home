// Importing modules
import { useEffect, useRef } from "react";
import gsap, { Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Logo from "../assets/logo.png";
import LogoBg from "../assets/logobg.png";

// Import CSS
import "../index.css";
import About from "./About";

const Home = () => {
  // Getting Reference for animation
  let earthImg = useRef(null);
  let txt = useRef(null);
  let strn = useRef(null);
  let astro = useRef(null);

  // Registring Plugins
  gsap.registerPlugin(ScrollTrigger);

  // Animations on render
  useEffect(() => {
    console.clear();

    //  timeline for animation
    let tl = gsap.timeline({
      defaults: { duration: 2, ease: Power4.easeInOut },
    });
    const lettersx = gsap.utils.toArray(".tt");

    // ! Normal Animations
    gsap.to(earthImg, {
      scrollTrigger: {
        trigger: "#home_main",

        start: "1% top",
        end: "20% top",
        scrub: 0.8,
      },
      rotate: -360,
      duration: 10,
    });

    // ! TimeLine Animation
    tl.fromTo(
      lettersx,
      {
        y: -90,
        opacity: 0,
      },
      {
        y: 0,
        display: "inline-block",
        overflow: "hidden",
        opacity: 1,
        stagger: 0.2,
      }
    )
      .to(earthImg, {
        scrollTrigger: {
          trigger: "#home_main",
          start: "10% top",
          end: "20% top",
          scrub: 0.8,
        },
        scale: 2,
        zIndex: 20,
      })
      .to(strn, {
        scrollTrigger: {
          trigger: "#home_main",
          start: "10% top",
          end: "20% top",
          scrub: 0.8,
        },
        zIndex: 40,
        scale: 1.2,
        y: -300,
        delay: 10,
        x: 760,
      })
      .to(txt, {
        scrollTrigger: {
          trigger: "#home_main",
          start: "10% top",
          end: "20% top",
          scrub: 0.8,
        },
        zIndex: 40,
        scale: 1.6,
        y: 150,
      })
      .to(astro, {
        scrollTrigger: {
          trigger: "#home_main",

          start: "10% top",
          end: "20% top",
          scrub: 1,
        },
        zIndex: 40,
        scale: 1.2,
        x: -760,
        y: -300,
      }).to(
          "#home_main",
          {
            scrollTrigger: {
              trigger: ".tt",
              start: "10% top",
              end: "30% top",
              scrub: 1,
            },
            delay: 10,
            y: -1000,
          },
          "+=1"
        );
  });

  //? Actual render
  return (
    <>
      <div
        className=" overflow-hidden bg-no-repeat bg-cover z-10 w-screen h-screen relative top-0 left-0"
        style={{
          background: "#000000",
          background: " -webkit-linear-gradient(bottom,#000000,#3c1053)",
          background: " -moz-linear-gradient(bottom,#000000,#3c1053)",
          background: "linear-gradient(to top,#000000,#3c1053)",
        }}
        id="home_main"
      >
        <div className="overflow-hidden" id="image_wraper">
          {/* Side-Images Start */}
          <section className="overflow-hidden scroll-smooth w-screen h-screen grid grid-cols-2 content-between gap-2 md:gap-52 lg:gap-[20rem] pb-2 md:pb-10 lg:pb-40 p-2 relative top-0 bottom-0 left-0 right-0">
            <img src="/assets/astro1.png" alt="astro" id="animate" />
            <img src="/assets/satellite.webp" alt="satellite" id="animate2" />
            <img
              ref={(el) => {
                strn = el;
              }}
              className="z-50"
              src="/assets/saturn.webp"
              alt="planet"
            />
            <img
              ref={(el) => {
                astro = el;
              }}
              className="z-50"
              src="/assets/astro3.webp"
              alt="astro2"
            />
          </section>
          {/* Side-Images End */}
          {/* Hero-Images Start */}
          <div className="w-screen h-screen flex justify-center items-center flex-col absolute top-0 m-auto overflow-hidden">
            <img
              ref={(el) => {
                earthImg = el;
              }}
              id="earth_image"
              className="overflow-hidden m-auto "
              src={LogoBg}
              alt="earth"
            ></img>
            {/* <div></div> */}
            {/* <h1
              ref={(el) => {
                txt = el;
              }}
              id="text"
              className="text-6xl md:text-[8rem] lg:text-[10rem] text-center m-auto tracking-widest overflow-x-hidden absolute top-[45vh] md:top-[45vh]"
            >
              <span className="tt font-hindi italic">अ</span>
              <span className="tt font-hindi italic">भि</span>
              <span className="tt font-bold">y</span>
              <span className="tt font-logo font-bold">a</span>
              <span className="tt font-logo font-bold">a</span>
              <span className="tt font-logo font-bold">n</span>
            </h1> */}
            <img src={Logo} ref={(el) => {txt = el}}
              className="overflow-hidden w-[28rem] h-[28rem] m-auto absolute "
            />
          </div>
          {/* Hero-Images End */}
        </div>
      </div>

      {/* Other Pages */}
      <div className=" w-screen h-screen" id="about">
        <About />
      </div>
      <div className=" w-screen h-screen bg-green-600" id="gallery"></div>
      <div className=" w-screen h-screen bg-yellow-600" id="events"></div>
      <div className=" w-screen h-screen bg-cyan-600" id="sponsers"></div>
    </>
  );
};

export default Home;
