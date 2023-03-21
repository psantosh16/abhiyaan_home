import { useEffect, useRef } from "react";
import gsap, { Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const BtmImg = () => {
  let strn = useRef(null);
  let astro = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

 
  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let tl = gsap.timeline({
      defaults: { duration: 2, ease: Power4.easeInOut },
    });
    tl.to(strn, {
      scrollTrigger: {
        start: "1% top",
        end: "10% top",
        scrub: 1,
      },
      zIndex: 40,
      scale: 10,
      y:- height,
      x: 10 * width
    }).to(astro, {
      scrollTrigger: {
        start: "1% top",
        end: "10% top",
        scrub: 1,
      },
      zIndex: 40,
      scale: 10,
      y: -height,
      x: -10 * width
    });
  },[]);
  return (
    <>
      <img
        ref={(el) => {
          strn = el;
        }}
        className="w-24 md:w-44"
        src="/assets/saturn.webp"
        alt="planet"
      />
      <img
        ref={(el) => {
          astro = el;
        }}
        className="w-24 md:w-44"
        src="/assets/astro3.webp"
        alt="astro2"
      />
    </>
  );
};

export default BtmImg;