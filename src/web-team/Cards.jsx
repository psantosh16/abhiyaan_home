import React from "react";

function UCard(props) {
  return (
    <div className="profile" id={props.ids}>
      <div className="outerboxes">
        {" "}
        <div className="middleboxes"></div>
        <div className="innerboxes">
          <div id="instagramLink">
            <a href={props.insta} target="blank">
              <img
                src="/web-assets/icons/instagram.png"
                alt="hello"
                className="links"
              />
            </a>
          </div>
          <div id="linkedinLink">
            <a href={props.linked} target="blank">
              <img
                src="/web-assets/icons/linked_in.png"
                alt="hello"
                className="links"
              />
            </a>
          </div>
          <div id="portfolioLink">
            <a href={props.pf} target="blank">
              <img
                src="/web-assets/icons/pf.png"
                alt="hello"
                className="links"
              />
            </a>
          </div>
          <div id="githubLink-2">
            <a href={props.github} target="blank">
              <img
                src="/web-assets/icons/github.png"
                alt="hello"
                className="links"
              />
            </a>
          </div>
          <img src={props.img} alt="hello" className="boxes" />
          <div className="name">
            <p style={{ whiteSpace: "nowrap" }}>{props.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UCard;
