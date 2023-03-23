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
      defaults: { duration: 10, ease: Power4.easeInOut },
    });
    tl.to(astro, {
      scrollTrigger: {
        start: "1% top",
        end: "10% top",
        scrub: 1,
      },
      zIndex: 10,
      scale: 4,
      y: -height*2,
      x: -2 * width
    });
  },[]);
  return (
    <>
      <img
        ref={(el) => {
          strn = el;
        }}
        className="w-32 md:w-44"
        src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        alt="planet"
      />
      <img
        ref={(el) => {
          astro = el;
        }}
        className="w-32 md:w-44"
        src="/assets/astro3.webp"
        alt="astro2"
      />
    </>
  );
};

export default BtmImg;