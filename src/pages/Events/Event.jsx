import React, { useEffect } from "react";
import gsap from "gsap";

import "./Event.scss";

export default function Events() {
  useEffect(() => {
    const $menu = document.querySelector(".menu");
    const $items = document.querySelectorAll(".menu--item");
    const $images = document.querySelectorAll(".menu--item img");
    let menuWidth = $menu.clientWidth;
    let itemWidth = $items[0].clientWidth;
    let wrapWidth = $items.length * itemWidth;

    let scrollSpeed = 0;
    let oldScrollY = 0;
    let scrollY = 0;
    let y = 0;

    const lerp = (v0, v1, t) => {
      return v0 * (1 - t) + v1 * t;
    };

    const dispose = (scroll) => {
      gsap.set($items, {
        x: (i) => {
          return i * itemWidth + scroll;
        },
        modifiers: {
          x: (x, target) => {
            const s = gsap.utils.wrap(
              -itemWidth,
              wrapWidth - itemWidth,
              parseInt(x)
            );
            return `${s}px`;
          },
        },
      });
    };
    dispose(0);

    const handleMouseWheel = (e) => {
      scrollY -= e.deltaY * 0.9;
    };

    let touchStart = 0;
    let touchX = 0;
    let isDragging = false;
    const handleTouchStart = (e) => {
      touchStart = e.clientX || e.touches[0].clientX;
      isDragging = true;
      $menu.classList.add("is-dragging");
    };
    const handleTouchMove = (e) => {
      if (!isDragging) return;
      touchX = e.clientX || e.touches[0].clientX;
      scrollY += (touchX - touchStart) * 2.5;
      touchStart = touchX;
    };

    const handleTouchEnd = () => {
      isDragging = false;
      $menu.classList.remove("is-dragging");
    };

    $menu.addEventListener("mousewheel", handleMouseWheel);

    $menu.addEventListener("touchstart", handleTouchStart);
    $menu.addEventListener("touchmove", handleTouchMove);
    $menu.addEventListener("touchend", handleTouchEnd);

    $menu.addEventListener("mousedown", handleTouchStart);
    $menu.addEventListener("mousemove", handleTouchMove);
    $menu.addEventListener("mouseleave", handleTouchEnd);
    $menu.addEventListener("mouseup", handleTouchEnd);

    $menu.addEventListener("selectstart", () => {
      return false;
    });

    window.addEventListener("resize", () => {
      menuWidth = $menu.clientWidth;
      itemWidth = $items[0].clientWidth;
      wrapWidth = $items.length * itemWidth;
    });

    const render = () => {
      requestAnimationFrame(render);
      y = lerp(y, scrollY, 0.1);
      dispose(y);

      scrollSpeed = y - oldScrollY;
      oldScrollY = y;

      gsap.to($items, {
        skewX: -scrollSpeed * 0.2,
        rotate: scrollSpeed * 0.01,
        scale: 1 - Math.min(100, Math.abs(scrollSpeed)) * 0.003,
      });
    };
    render();
  }, []);

  return (
    <>
      <div
        className="event-container bg-black z-10 min-h-screen flex flex-col gap-5 justify-center items-center"
        id="events"
      >
        <h1 className="transition duration-400 ease-in-out hover:text-orange-600 text-orange-600 lg:text-white text-center text-6xl mb-12 font-bold">Events</h1>
        <div className="menu">
          {poster.map((p, i) => {
            return (
              <div className="menu--item" key={i}>
                <figure>
                  <img src={p.link} alt="" loading="lazy" />
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

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
