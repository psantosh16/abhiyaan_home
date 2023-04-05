import React from "react";
import Aos from "aos";

import "./Timeline.css";
import "aos/dist/aos.css";

export default function Timeline() {
  Aos.init();

  return (
    <>
      <div
        id="Events"
        style={{ paddingBottom: "120px", paddingTop: "4rem" }}
        className="z-10
      "
      >
        <div className="timeline">
          <div className="containerr left">
            <div className="card mb-3" data-aos="fade-right">
              <div className="card-body">
                <h2 className="card-title text-center">Cultural Events</h2>
                <p className="card-text">
                  They are organized especially for the student's exposure to
                  the unfamiliar traditions and cultures and to know about each
                  other better. With the assistance of Student Council members,
                  many events are organized as social gatherings which let
                  students learn to value and respect each other's beliefs and
                  culture, promoting humble engagement across differences in
                  Abhiyaan 2022.
                </p>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="containerr right">
            <div className="card mb-3" data-aos="fade-left">
              <div className="card-body">
                <h2 className="card-title text-center">Sport Events</h2>
                <p className="card-text">
                  Through sports, there can be a worthy balance between physical
                  and mental growth of the students. Abhiyaan 2022 has arranged
                  various sports events like football, volleyball, cricket,
                  basketball, kho kho, kabbadi, etc. Further all, these events
                  offer exciting prizes to the winners. The main purpose of
                  conducting these events is to enhance the overall personality
                  of all the participants.
                </p>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="containerr left">
            <div className="card mb-3" data-aos="fade-right">
              <div className="card-body">
                <h2 className="card-title text-center">Technical Events</h2>
                <p className="card-text">
                  What is a college life without some fun events and
                  competitions? Here we are, back with ARISE 2022 with a great
                  motive to inspire, develop and gain technical knowledge with
                  so many fun events and competitions, also a chance to earn
                  many prizes and to have fun in a comprehensive manner.
                </p>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="containerr right">
            <div className="card mb-3" data-aos="fade-left">
              <div className="card-body">
                <h2 className="card-title text-center">NSS</h2>
                <p className="card-text">
                  The motto of NSS states “NOT ME BUT YOU” which truly reflects
                  the essence of selfless living. NSS is a voluntary association
                  of young people who place community of BVCOE before itself.
                  The sole aim of the NSS is to provide hands-on experience to
                  young students in delivering social service.
                </p>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="containerr left">
            <div className="card mb-3" data-aos="fade-right">
              <div className="card-body">
                <h2 className="card-title text-center">NCC</h2>
                <p className="card-text">
                  The National Cadet Corps (NCC) is the youth wing of the Indian
                  Armed Forces. Its motto is 'UNITY AND DISCIPLINE'. It provides
                  basic military training to the cadets. The sole purpose of NCC
                  is to help the participants lead a more disciplined and
                  organised lifestyle, for their own benefit and for the nation.
                </p>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
