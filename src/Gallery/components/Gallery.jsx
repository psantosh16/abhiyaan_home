import React from "react";
import { useNavigate } from "react-router-dom";

import "./Gallery.css";
import Years from "../models/Years";
import Data from "../models/EventData";

export default function Gallery() {
  const navigate = useNavigate();

  function clickHandler() {
    if (window.innerWidth > 768) {
      navigate("/years");
      window.scrollTo(0, 0);
    }
  }

  return (
    <>
      <div
        className="min-h-screen bg-black z-10 flex flex-col justify-center items-center gap-8 pt-8"
        id="gallery"
      >
        <h1 className="text-6xl font-bold text-white">Gallery</h1>
        <div className="media-container">
          <div className="media-scroller">
            {Years.map((year, i) => {
              return (
                <div
                  className="media-element"
                  onClick={() => clickHandler()}
                  style={{ backgroundImage: `url(${year[i]})` }}
                  key={i}
                >
                  <h1 className="year-heading">{Data[i].year}</h1>
                  <p className="year-info">{Data[i].info}</p>
                  <button
                    className="button-54"
                    role="button"
                    onClick={() => {
                      navigate("/years");
                      window.scrollTo(0, 0);
                    }}
                  >
                    View More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
