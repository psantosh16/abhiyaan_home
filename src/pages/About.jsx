import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const About = () => {
  let header = useRef();
  let paragraph = useRef();

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from(header, {
      translateX: -100,
    });
    gsap.to([header, paragraph], {
      scrollTrigger: {
        trigger: "#about",
        start: "-20% center",
        end: "-10% center",
        scrub: 1,
      },
      opacity: 1,
      translateX: 0,
      delay: 0.5,
    });
  });

  const style = {
    background:
      "linear-gradient(to right bottom, #16244780, #16244790, #16244796, #16244780, #e43f5a70)",
  };

  return (
    // Every component should have bg-black and z-10 to get on top of particles
    <div
      className=" w-screen md:h-[35rem] antialiased  h-[48rem] select-none lg:mt-56 mt-44 bg-black z-10 relative"
      id="about"
    >
      <video
        loop={true}
        autoPlay={true}
        muted={true}
        className="w-full opacity-40  h-full object-cover"
      >
        <source src="assets/videoBg.mp4" type="video/mp4" />
        Your browser does not support the video tag. I suggest you upgrade your
        browser.
      </video>
      <div
        className="w-full h-full md-pb-0  lg:px-40   pb-7 absolute  top-0 px-4 text-white  flex justify-center flex-col"
        style={style}
      >
        <h1
          className="opacity-0 font-openSans text-5xl md:text-6xl md:py-0 py-4 lg:py-3 overflow-hidden"
          ref={(e) => {
            header = e;
          }}
        >
          About{" "}
          <span className="transition duration-400 ease-in-out hover:text-orange-600 text-orange-600 lg:text-white">
            Abhiyaan
          </span>
        </h1>
        <p
          className="opacity-0 font-poppins"
          ref={(e) => {
            paragraph = e;
          }}
        >
          <br />
          Abhiyaan is a cultural extravaganza which features events ranging from
          literary skills to performing arts to stardom and glamour. Our five
          day event is the highlight to the town which attracts the attention of
          many different college students and team of performers. Every year we
          feature participation from students from prominent colleges in Navi
          Mumbai.
          <br />
          This year Abhiyaan is all about the nostalgia we have witnessed in our
          school day, from pen fights to book cricket, from scribbling on your
          friend's book to passing secret messages in them, from lousy mornings
          assemblies to tirey last periods, we do miss our school days more
          often than not. However, the flashbacks are many a times followed with
          a feeling of sadness. Let's change that, shall we? Back To School,
          like those commercial for backpacks, is the time for a happy nostalgia
          for the adults just out of teenage. Reminiscing in the events complied
          with fun activities are what we might just need to get back to the
          good old days.
        </p>
      </div>
    </div>
  );
};

export default About;
