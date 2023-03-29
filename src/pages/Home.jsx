import BtmImg from "../utils/BtmImg";
import TopImg from "../utils/TopImg";
import Logo from "../components/Logo";
import ParticalBackground from "../components/ParticalBackground";
import "../index.css";
import React from "react";

import Navbar from "../components/Navbar";
import About from "./About";
import Gallery from "../Gallery/components/Gallery";
import Sponsers from "../components/Sponsers";
import Event from "./Events/Event";
import Map from "../components/Map";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Teams from "../components/Teams";

const Home = () => {
  return (
    <>
      <div className="flex flex-col w-full ">
        <div>
          <Navbar />
        </div>
        <div
          className="overflow-hidden bg-no-repeat bg-cover z-10 w-full h-screen relative top-0 left-0 py-10 px-2 select-none"
          id="home"
        >
          <ParticalBackground />
          <section className="overflow-hidden w-screen h-screen grid grid-cols-[auto,_auto] justify-between content-between pt-20  px-4 absolute  top-0 left-0">
            <TopImg />
            <BtmImg />
          </section>
          <div className="w-screen h-screen flex justify-center items-center flex-col absolute top-0 m-auto overflow-hidden">
            <Logo />
          </div>
        </div>
        <About />
        <Event />
        <Gallery />
        <Teams />
        <Sponsers />
        <Contact />
        <Map />
        <Footer />
      </div>
    </>
  );
};

export default Home;
