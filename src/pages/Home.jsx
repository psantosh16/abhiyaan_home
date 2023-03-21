// Importing modules
import BtmImg from "../utils/BtmImg";
import TopImg from "../utils/TopImg";
import { useEffect } from "react";
import gsap, { Power4 } from "gsap";
import Logo from "../components/Logo";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import ParticalBackground from "../components/ParticalBackground";
import "../index.css";

const Home = () => {
  useEffect(() => {
    console.clear();

    let tl = gsap.timeline({
      defaults: { duration: 2, ease: Power4.easeInOut },
    });
    tl.to(
      "#home",
      {
        scrollTrigger: {
          trigger: ".tt",
          start: "10% top",
          end: "30% top",
          scrub: 1,
        },
        delay: 10,
        y: -10,
      },
      "+=1"
    );
  });

  return (
    <>
      <div className=" overflow-hidden bg-no-repeat bg-cover z-10 w-full h-screen relative top-0 left-0 py-10 px-2 select-none" id="home" >
        <ParticalBackground />
        <section className="overflow-hidden w-screen h-screen grid grid-cols-[auto,_auto] justify-between content-between pt-20  absolute  top-0 left-0">
          <TopImg />
          <BtmImg />
        </section>
        <div className="w-screen h-screen flex justify-center items-center flex-col absolute top-0 m-auto overflow-hidden">
          <Logo />
        </div>
      </div>
    </>
  );
};

export default Home;
