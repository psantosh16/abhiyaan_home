import Marquee from "react-fast-marquee";

const MarqueeText = ({text , symbol , direc}) => {
  return (
    <>
      <Marquee
        gradient={false}
        direction={direc}
        pauseOnHover={true}
        speed={40}
        loop={0}
        className=" text-4xl font-bold md:text-8xl overflow-hidden bg-white text-black uppercase "
      >
        {" "} {symbol} {text} {symbol} {text} {symbol} {text} {symbol} {text} {" "}
      </Marquee>
    </>
  );
};

export default MarqueeText;
