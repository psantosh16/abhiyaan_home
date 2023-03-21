import { useEffect, useRef } from "react";
import gsap, { Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LogoAbhiyaan from "../assets/logo.png";
import LogoBg from "../assets/logobg.png";

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
        trigger: "#home_main",

        start: "1% top",
        end: "20% top",
        scrub: 0.8,
      },
      rotate: -360,
      duration: 10,
    });
    tl.to(earthImg, {
      scrollTrigger: {
        trigger: "#home_main",
        start: "10% top",
        end: "20% top",
        scrub: 0.8,
      },
      scale: 1.5,
      translateY: 100,

      zIndex: 20,
    }).to(txt, {
      scrollTrigger: {
        trigger: "#home_main",
        start: "10% top",
        end: "20% top",
        scrub: 0.8,
      },
      zIndex: 40,
      scale: 1.2,
      translateY: 100,
    });
  });
  return (
    <>
      <img
        ref={(el) => {
          earthImg = el;
        }}
        id="earth_image"
        className="overflow-hidden m-auto "
        src={LogoBg}
        alt="earth"
      ></img>
      <img
        src={LogoAbhiyaan}
        ref={(el) => {
          txt = el;
        }}
        className="overflow-hidden w-[24rem] h-[24rem] md:w-[48rem] md:h-[48rem] lg:w-[40rem]  lg:h-[40rem] m-auto absolute "
      />
    </>
  );
};

export default Logo;
