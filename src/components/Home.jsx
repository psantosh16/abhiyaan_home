import "../index.css";
import { useEffect, useRef } from "react";
import gsap, { Power3, Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Home = () => {
  let earthImg = useRef(null);
  let txt = useRef(null);
  let strn = useRef(null);
  let astro = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    console.clear();
    let tl = gsap.timeline({
      defaults: { duration: 2, ease: Power4.easeInOut },
    });
    const lettersx = gsap.utils.toArray(".tt");
    // console.log(lettersx);
    
    gsap.to(earthImg, {
      scrollTrigger: {
        start: "1% top",
        end: "20% top",
        scrub: 0.8,
        // markers: true,
      },
      rotate: -360,
      duration: 10,
    });

    tl.fromTo(
        lettersx,
        
        {
            y:-100,
            opacity:0,
           
        },
        {
            y:0,
            display:"inline-block",
            overflow:"hidden",
            opacity:1,
            stagger:1
        }
    )
    .to(earthImg, {
      scrollTrigger: {
        start: "10% top",
        end: "20% top",
        scrub: 0.8,
        // markers:true
      },
      scale: 2,
      zIndex: 20,
    })
      .to(strn, {
        scrollTrigger: {
          start: "10% top",
          end: "20% top",
          scrub: 0.8,
          // markers:true
        },
        zIndex: 40,
        scale: 1.2,
        y: -150,
        x: 350,
      })
      .to(txt, {
        scrollTrigger: {
          start: "10% top",
          end: "20% top",
          scrub: 0.8,
          //   markers:true
        },
        zIndex: 40,
        scale: 1.02,
        y: 150,
      })
      .to(astro, {
        scrollTrigger: {
          start: "10% top",
          end: "20% top",
          scrub: 1,
          // markers:true
        },
        zIndex: 400,
        scale: 1.2,
        x: -350,
        y: -120,
      }).to(
        "#home_main",
        {
            scrollTrigger: {
                trigger:".tt",
                start: "10% top",
                end: "30% top",
                scrub: 1,
                // pin:true,

                // markers:true
              },
              delay:10,
            y:-1000
        },"+=1"
      )
    // tl.play();
  });
  return (
    <>
      <div
        className="z-10  container w-screen h-[100vh] bg-[url('/assets/bg.jpg')] relative top-0 left-0"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "80%",
        }}
        id="home_main"
      >
        <div className="image_wraper overflow-hidden">
          <section className="overflow-hidden scroll-smooth w-screen h-screen grid grid-cols-2 content-between  gap-2 md:gap-64 lg:gap-96 pb-2 md:pb-36 lg:pb-56 p-2 relative top-0 bottom-0 left-0 right-0">
            <img src="/assets/astro1.png"   alt="astro" />
            <img src="/assets/satellite.webp" alt="satellite" />
            <img
              ref={(el) => {
                strn = el;
              }}
              src="/assets/saturn.webp"
              alt="planet"
            />
            <img
              ref={(el) => {
                astro = el;
              }}
              src="/assets/astro3.webp"
              alt="astro2"
            />
          </section>
          <div className="w-screen h-screen flex justify-center items-center flex-col absolute top-0 m-auto overflow-hidden">
            <img
              ref={(el) => {
                earthImg = el;
              }}
              id="earth"
              className="overflow-hidden m-auto"
              src="/assets/planet.webp"
              alt="earth"
            ></img>
            <h1
              ref={(el) => {
                txt = el;
              }}
              id="text"
              className="text-6xl md:text-[7rem] text-center m-auto font-Logo tracking-wide overflow-hidden absolute top-[45vh] md:top-[40vh]"
            >
              <span className="tt">A</span>
              <span className="tt">B</span>
              <span className="tt">H</span>
              <span className="tt">I</span>
              <span className="tt">Y</span>
              <span className="tt">A</span>
              <span className="tt">A</span>
              <span className="tt">N</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="z-10 container w-screen h-screen" id="about"></div>
    </>
  );
};

export default Home;
