// Importing modules
import BtmImg from "../utils/BtmImg";
import TopImg from "../utils/TopImg";
import Logo from "../components/Logo";
import ScrollTrigger from "gsap/ScrollTrigger";
import ParticalBackground from "../components/ParticalBackground";
import "../index.css";

const Home = () => {

  return (
    <>
      <div
        className=" overflow-hidden bg-no-repeat bg-cover z-10 w-full h-screen relative top-0 left-0 py-10 px-2 select-none"
        id="home"
      >
        <ParticalBackground />
        <section className="overflow-hidden w-screen h-screen grid grid-cols-[auto,_auto] justify-between content-between pt-20  lg:px-44 px-4 absolute  top-0 left-0">
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
