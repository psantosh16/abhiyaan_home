import React from "react";

import "./Event.css";

const Events = () => {
  const poster = [
    { link: "Gallery-images/photo-1.avif" },
    { link: "Gallery-images/photo-2.avif" },
    { link: "Gallery-images/photo-3.avif" },
    { link: "Gallery-images/photo-4.avif" },
    { link: "Gallery-images/photo-5.avif" },
    { link: "Gallery-images/photo-1.avif" },
    { link: "Gallery-images/photo-2.avif" },
    { link: "Gallery-images/photo-3.avif" },
    { link: "Gallery-images/photo-4.avif" },
    { link: "Gallery-images/photo-5.avif" },
    { link: "Gallery-images/photo-1.avif" },
    { link: "Gallery-images/photo-2.avif" },
  ];

  function onClickHandler(e) {
    const sec = document.querySelector(".secrete-img");
    document.getElementById("secrete").style.display = "block";
    sec.src = e.target.src;
  }

  function cancelHandler() {
    document.getElementById("secrete").style.display = "none";
    document.querySelector(".secrete-img").src = "";
  }

  return (
    <div className="z-[99] bg-black" id="events">
      <h1 className="event-heading">Events</h1>
      <div className="event-image-container">
        {poster.map((p, i) => {
          return (
            <div key={i}>
              <img src={p.link} alt="" onClick={onClickHandler} />
            </div>
          );
        })}
        <div id="secrete">
          <img
            src="Gallery-images/cancel.png"
            className="image-cancel"
            alt=""
            onClick={cancelHandler}
          />
          <img src="" alt="" className="secrete-img" />
        </div>
      </div>
    </div>
  );
};

export default Events;
