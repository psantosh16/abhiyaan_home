import { Link } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  const Icons = [
    {
      class: "fa-brands fa-instagram text-3xl md:text-5xl hover:scale-110 ",
      id: 1,
      link: "https://www.instagram.com/bvcoenm/",
    },
    {
      class:
        "fa-brands fa-square-facebook text-3xl md:text-5xl  hover:scale-110",
      id: 2,
      link: "https://www.facebook.com/bvcoenmedu/",
    },
    {
      class: "fa-brands fa-youtube text-3xl md:text-5xl  hover:scale-110",
      id: 3,
      link: "https://www.youtube.com/channel/UC4Pwf6mDh3k0ra0p7QWDPnQ",
    },
    {
      class:
        "fa-brands fa-square-twitter text-3xl md:text-5xl  hover:scale-110",
      id: 4,
      link: "https://twitter.com/abhiyaan_bvcoe",
    },
    {
      class: "fa-brands fa-linkedin text-3xl md:text-5xl  hover:scale-110",
      id: 5,
      link: "https://www.linkedin.com/school/bharati-vidyapeeth-college-of-engineering-navi-mumbai/",
    },
    {
      class: "fa-brands fa-telegram text-3xl md:text-5xl  hover:scale-110",
      id: 6,
      link: "https://t.me/bvcoenm",
    },
  ];
  return (
    <div id="footer" className="z-10 bg-black w-screen h-auto">
      <div className="social-links text-5xl flex gap-4 md:gap-8  justify-center py-4">
        {Icons.map((icon) => {
          return (
            <a href={icon.link} key={icon.id}>
              <span>
                <i
                  id="fa_icon"
                  className={icon.class}
                  style={{ color: "#ffffff" }}
                ></i>
              </span>
            </a>
          );
        })}
      </div>
      <div id="footer_text" className="text-center p-4">
        <p>Copyright © BVCOE, Navi Mumbai | All rights reserved</p>
        <h1>
          Designed And Developed By
          <Link
            to="/web-team"
            className="text-orange-600 hover:underline font-semibold"
          >
            {" "}
            Web Development Committee
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
