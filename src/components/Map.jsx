import React from "react";

const Map = () => {
  const googleApiLink =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241398.2101212174!2d73.055078!3d19.026461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24393d763af%3A0x266652df8009380d!2sBharati%20Vidyapeeth%20College%20of%20Engineering%2C%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1679733305595!5m2!1sen!2sin";
  return (
    <div
      id="locate us"
      className="z-10 bg-black w-screen h-auto m-auto py-10 text-center"
    >
      <h1 className="text-5xl md:text-6xl font-openSans py-4">
        Locate <span className="text-orange-600 hover:text-white">Us</span>
      </h1>
      <iframe
        className="w-screen h-[60vh] lg:h-[80vh] p-4 md:p-8 lg:p-18 rounded-[2rem] md:rounded-[4rem]"
        src={googleApiLink}
        loading="lazy"
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
