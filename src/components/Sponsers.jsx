import React from "react";

const Sponsers = () => {
  const sponsers = [
    {
      name: "BeReal",
      link: "https://bere.al/en",
      img: "https://images.typeform.com/images/Mqf5KH9VePwW/image/default",
      id: "1",
    },
    {
      name: "StarBucks",
      link: "https://www.starbucks.in/dashboard",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png",
      id: "2",
    },
    {
      name: "HotMuggs",
      link: "https://hotmuggs.com/",
      img: "sponsers/hotmuggs.webp",
      id: "3",
      black: true,
    },
    {
      name: "Clyde",
      link: "https://clydeeducation.com/",
      img: "sponsers/Clydelogo.png",
      id: "4",
    },
    {
      name: "Eti",
      link: "https://exceltechnical.in/",
      img: "sponsers/eti.png",
      id: "5",
    },
  ];
  return (
    <div
      id="sponsers"
      className="w-screen h-auto bg-black px-4 pt-20 z-50 select-none"
    >
      <div className="text-white  text-5xl md:text-6xl font-openSans mb-4 overflow-hidden text-center">
        <h1 className="overflow-hidden  hover:text-orange-500">Our Sponsers</h1>
      </div>
      <div className="bg-black grid grid-cols-1 md:grid-cols-5 md:p-2 p-16 lg:p-32 items-center justify-items-center md:gap-10 gap-2 lg:gap-10">
        {sponsers.map((sp) => {
          return (
            <div
              key={sp.id}
              className="w-auto  h-auto  hover:scale-105 hover:ease-in-out p-12  md:p-0 lg:p-3"
            >
              <a href={sp.link} target="_blank">
                <img
                  src={sp.img}
                  loading="lazy"
                  className="w-auto h-auto "
                  alt={sp.name}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sponsers;
