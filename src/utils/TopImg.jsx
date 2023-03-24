const TopImg = () => {
  const images = [
    {
      name: "astro1",
      link: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
      id: "animate",
    },
    {
      name: "satellite",
      link: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
      id: "animate2",
    },
  ];
  return (
    <>
      {images.map((img, idx) => {
        return (
          <img
            key={idx}
            className="w-32 md:w-44"
            src={img.link}
            loading="lazy"
            alt={img.name}
            id={img.id}
          />
        );
      })}
    </>
  );
};

export default TopImg;
