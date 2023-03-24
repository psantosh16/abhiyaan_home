import React, { useEffect, useRef } from "react";
import gsap, { Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LogoAbhiyaan from "../assets/logo.png";
import LogoBg from "../assets/logobg.png";
// const LogoBg = React.Children;

const Logo = () => {
  // Getting Reference for animation
  let earthImg = useRef(null);
  let txt = useRef(null);

  // Registring Plugins

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { duration: 2, ease: Power4.easeInOut },
    });
    gsap.to(earthImg, {
      scrollTrigger: {
        trigger: "#home",
        start: "2% top",
        end: "20% top",
        scrub: 1,
      },
      rotate: -360,
      duration: 4,
    });
    tl.to(earthImg, {
      scrollTrigger: {
        trigger: "#home",
        start: "10% top",
        end: "20% top",
        scrub: 1,
      },
      scale: 1.2,
      translateY: 60,
      zIndex: 20,
    }).to(txt, {
      scrollTrigger: {
        trigger: "#home",
        start: "10% top",
        end: "20% top",
        scrub: 1,
      },
      scale: 1.2,
      translateY: 60,
      zIndex: 40,
    });
  });
  return (
    <>
      <img
        ref={(el) => {
          earthImg = el;
        }}
        id="earth_image"
        className="overflow-hidden m-auto lg:w-[36rem] lg:h-[36rem] "
        src={LogoBg}
        loading="lazy"
        alt="earth"
      ></img>
      <img
        src={LogoAbhiyaan}
        ref={(el) => {
          txt = el;
        }}
        className=" overflow-hidden w-[24rem] h-[24rem] md:w-[48rem] md:h-[48rem] lg:w-[40rem]  lg:h-[40rem] m-auto absolute "
      />
    </>
  );
};

export default Logo;
