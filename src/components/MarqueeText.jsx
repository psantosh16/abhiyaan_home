import Marquee from "react-fast-marquee";

const MarqueeText = (props) => {
  return (
    <>
      <Marquee
        gradient={false}
        pauseOnHover={true}
        loop={0}
        className="text-8xl overflow-hidden bg-white text-black uppercase"
      >
        {" "}
        {props.text} ✷ {props.text} ✷ {props.text} ✷ {props.text}{" "}
      </Marquee>
    </>
  );
};

export default MarqueeText;
