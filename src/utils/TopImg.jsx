const TopImg = () => {
  const images = [
    { name: "astro1", link: "/assets/astro1.png", id: "animate" },
    { name: "satellite", link: "/assets/satellite.webp", id: "animate2" },
  ];
  return (
    <>
      {images.map((img, idx) => {
        return (
          <img
            key={idx}
            className="w-24 md:w-44"
            src={img.link}
            alt={img.name}
            id={img.id}
          />
        );
      })}
    </>
  );
};

export default TopImg;
