import React from "react";
import { useNavigate } from "react-router-dom";

import "./Gallery.css";
import Photos from "../models/Photos";

export default function YearsPage() {
  const navigate = useNavigate();
  const arr = ["wide", "tall", "big"];

  return (
    <div className="image-container" style={{ margin: "15px" }}>
      <span>
        <img
          src="/Gallery-images/cancel.png"
          alt=""
          onClick={() => navigate(-1)}
          className="cancel-button"
        />
      </span>
      <div className="grid-wrapper">
        {Photos.map((photo, i) => {
          return (
            <div
              key={i}
              className={`img-co ${arr[Math.floor(Math.random() * 3)]}`}
            >
              <img src={photo.src} loading="lazy" alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
