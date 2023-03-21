import Marquee from "react-fast-marquee";

const MarqueeText = ({text}) => {
  return (
    <>
      <Marquee
        gradient={false}
        pauseOnHover={true}
        loop={0}
        className=" text-4xl font-bold md:text-8xl overflow-hidden bg-white text-black uppercase "
      >
        {" "}
        {text} ✷ {text}  ✷ {text} ✷ {text} ✷ {" "}
      </Marquee>
    </>
  );
};

export default MarqueeText;
