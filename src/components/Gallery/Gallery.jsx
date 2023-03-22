import React from "react";

import "./Gallery.css";
import Years from "../../models/Years";
import Data from "../../models/EventData";
const YearsPage = React.lazy(() => import("./YearsPage"));

export default function Gallery() {
  function imageEventHandler(e) {
    let height = window.innerWidth;

    if (height > 768) {
      document.querySelector(".image-container").style.display = "block";
      document.querySelector(".image-container").style.animation = "fadeIn 3s";
      document.querySelector(".media-container").style.display = "none";
    }
  }
  return (
    <>
      <div className="media-container">
        <div className="media-scroller">
          {Years.map((year, i) => {
            return (
              <div
                className="media-element"
                onClick={(e) => imageEventHandler(e)}
                style={{ backgroundImage: `url(${year[i]})` }}
                key={i}
              >
                <img
                  src="down-arrow.png"
                  alt=""
                  className="down-arrow"
                  onClick={(e) => imageEventHandler(e)}
                />
                <h1 className="year-heading">{Data[i].year}</h1>
                <p className="year-info">{Data[i].info}</p>
              </div>
            );
          })}
        </div>
      </div>

      <YearsPage />
    </>
  );
}
