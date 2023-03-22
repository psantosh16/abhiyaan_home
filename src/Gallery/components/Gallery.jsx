import React from "react";
import { useNavigate } from "react-router-dom";

import "./Gallery.css";
import Years from "../models/Years";
import Data from "../models/EventData";

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <>
      <div className="media-container" id="gallery">
        <div className="media-scroller">
          {Years.map((year, i) => {
            return (
              <div
                className="media-element"
                onClick={() => window.innerWidth > 768 && navigate("/years")}
                style={{ backgroundImage: `url(${year[i]})` }}
                key={i}
              >
                <h1 className="year-heading">{Data[i].year}</h1>
                <p className="year-info">{Data[i].info}</p>
                <button
                  className="button-54"
                  role="button"
                  onClick={() => navigate("/years")}
                >
                  View More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
