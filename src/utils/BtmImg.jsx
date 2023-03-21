import { useEffect, useRef } from "react";
import gsap, { Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const BtmImg = () => {
  let strn = useRef(null);
  let astro = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { duration: 2, ease: Power4.easeInOut },
    });
    tl.to(strn, {
      scrollTrigger: {
        start: "10% top",
        end: "15% top",
        scrub: 0.8,
        markers: true,
      },
      zIndex: 40,
      scale: 1.2,
      y: -300,
      delay: 10,
      x: 760,
    }).to(astro, {
      scrollTrigger: {
        start: "10% top",
        end: "15% top",
        scrub: 1,
      },
      zIndex: 40,
      scale: 1.2,
      x: -760,
      y: -300,
    });
  });
  return (
    <>
      <img
        ref={(el) => {
          strn = el;
        }}
        className="w-32"
        src="/assets/saturn.webp"
        alt="planet"
      />
      <img
        ref={(el) => {
          astro = el;
        }}
        className="w-32"
        src="/assets/astro3.webp"
        alt="astro2"
      />
    </>
  );
};

export default BtmImg;