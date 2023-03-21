import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const About = () => {
  let header = useRef();
  let paragraph = useRef();

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from([header ], {
      translateX: -100,
    });
    gsap.to([header , paragraph], {
      scrollTrigger: {
        trigger: "#about",
        start: "-20% center",
        end: "-10% center",
        scrub: 1,
        markers: true,
      },
      opacity: 1,
      translateX: 0,
      delay: 0.5,
    });
  });

  return (
    <div className=" mt-10 w-screen select-none p-4" id="about">
      <div className="w-full flex justify-center flex-col">
        <h1
          className=" opacity-0 font-openSans text-3xl md:text-6xl"
          ref={(e) => {
            header = e;
          }}
        >
          About <span className="hover:text-orange-600">Abhiyaan</span>
        </h1>
        <p className="opacity-0" ref={(e)=>{paragraph=e}}>
        Abhiyaan is a cultural extravaganza which features events ranging from
        literary skills to performing arts to stardom and glamour. Our five day
        event is the highlight to the town which attracts the attention of many
        different college students and team of performers. Every year we feature
        participation from students from prominent colleges in Navi Mumbai. This
        year Abhiyaan is all about the nostalgia we have witnessed in our school
        day, from pen fights to book cricket, from scribbling on your friend's
        book to passing secret messages in them, from lousy mornings assemblies
        to tirey last periods, we do miss our school days more often than not.
        However, the flashbacks are many a times followed with a feeling of
        sadness. Let's change that, shall we? Back To School, like those
        commercial for backpacks, is the time for a happy nostalgia for the
        adults just out of teenage. Reminiscing in the events complied with fun
        activities are what we might just need to get back to the good old days.
        </p>
      </div>
    </div>
  );
};

export default About;
