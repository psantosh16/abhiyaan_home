const TopImg = () => {
    const images = [
      { name: "astro1", link: "/assets/astro1.png", id: "animate" },
      { name: "satellite", link: "/assets/satellite.webp", id: "animate2" },
    ];
    return (
      <>
        {images.map((img) => {
          return (
            <>
              <img className="w-32" src={img.link} alt={img.name} id={img.id} />
            </>
          );
        })}
      </>
    );
  };

  export default TopImg;