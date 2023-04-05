import React from "react";
function Scard(props) {
  return (
    <div className="s-profile-card">
      <h3>{props.name}</h3>
      <h4>{props.position}</h4>
      <div className="s-caption">
        <div className="s-social-links">
          <a href={props.insta} target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Scard;

