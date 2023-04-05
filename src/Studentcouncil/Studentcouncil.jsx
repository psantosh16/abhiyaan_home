import "./Studentcouncil.css";
import { useState } from "react";
import React from "react";
import Profilecard from "./profilecard";
import Scard from "./Scard";
export default function Studentcouncil() {
  const [GS, setGS] = useState(true);
  const [CS, setCS] = useState(false);
  const [SS, setSS] = useState(false);
  const [DP, setDP] = useState(false);
  const [CH, setCH] = useState(false);
  const [Rep, setRep] = useState(false);

  const toggleGS = () => {
    if (!GS) {
      setGS(true);
      setCS(false);
      setRep(false);
      setCH(false);
      setDP(false);
      setSS(false);
    }
  };

  const toggleCS = () => {
    if (!CS) {
      setCS(true);
      setGS(false);
      setRep(false);
      setCH(false);
      setDP(false);
      setSS(false);
    }
  };
  const toggleSS = () => {
    if (!SS) {
      setSS(true);
      setGS(false);
      setRep(false);
      setCH(false);
      setDP(false);
      setCS(false);
    }
  };
  const toggleRep = () => {
    if (!Rep) {
      setRep(true);
      setGS(false);
      setCS(false);
      setCH(false);
      setDP(false);
      setSS(false);
    }
  };
  const toggleCH = () => {
    if (!CH) {
      setCH(true);
      setRep(false);
      setGS(false);
      setCS(false);
      setDP(false);
      setSS(false);
    }
  };
  const toggleDP = () => {
    if (!DP) {
      setDP(true);
      setRep(false);
      setGS(false);
      setCS(false);
      setCH(false);
      setSS(false);
    }
  };

  return (
    <div id="Teams">
      <h1 className="TeamsHeader">Student Council 2023</h1>
      <p className="desc">Meet the students who make the event possible</p>
      <div id="TeamTabs">
        <div id="teamsbtn">
          <button
            className="tablink"
            style={{
              color: GS ? "#000000" : "#ffffff",
              backgroundColor: GS ? "#ffffff" : "",
            }}
            id="defaultOpen"
            onClick={toggleGS}
          >
            GS Team
          </button>
          <button
            className="tablink"
            style={{
              color: CS ? "#000000" : "#ffffff",
              backgroundColor: CS ? "#ffffff" : "",
            }}
            onClick={toggleCS}
          >
            CS Team
          </button>
          <button
            className="tablink"
            style={{
              color: SS ? "#000000" : "#ffffff",
              backgroundColor: SS ? "#ffffff" : "",
            }}
            onClick={toggleSS}
          >
            SS Team
          </button>
          <button
            className="tablink"
            style={{
              color: DP ? "#000000" : "#ffffff",
              backgroundColor: DP ? "#ffffff" : "",
            }}
            onClick={toggleDP}
          >
            Departmental President
          </button>
          <button
            className="tablink"
            style={{
              color: CH ? "#000000" : "#ffffff",
              backgroundColor: CH ? "#ffffff" : "",
            }}
            onClick={toggleCH}
          >
            Committee Head
          </button>
          <button
            className="tablink"
            style={{
              color: Rep ? "#000000" : "#ffffff",
              backgroundColor: Rep ? "#ffffff" : "",
            }}
            onClick={toggleRep}
          >
            Representatives
          </button>
        </div>
      </div>

      <div
        className="tabcontent"
        style={{ display: GS ? "block" : "none" }}
      >
        <div className="TeamMember1">
          <Profilecard img="/ss-assets/shruti.jpg" name="Shruti Mhatre" insta="https://www.instagram.com/shruti_mhatre27/" position="General Secretary" linked="" />
        </div>
        <div className="subTeam">
          <div className="subTeamMember1">
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/saurav.jpg" name="Saurav Lashkare" insta="https://www.instagram.com/sauravlashkare/" position="Jt. General Secretary" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/jaydeep.jpg" name="Jaydeep Tayade" insta="https://www.instagram.com/jjayydeep/" position="Jt. General Secretary" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/atharva.jpg" name="Atharva Satam" insta="https://www.instagram.com/atharv_satam/" position="Jt. General Secretary" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/yash.jpg" name="Yash Khumbhar" insta="https://www.instagram.com/y.a.s.h.1804/" position="Jt. General Secretary" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/varad.jpg" name="Varad Mahumkar" insta="https://www.instagram.com/Varadmhamunkar/" position="Jt. General Secretary" linked="" />
          </div>
        </div>
      </div>
      <div
        className="tabcontent"
        style={{ display: CS ? "block" : "none" }}
      >
        <div className="TeamMember1">
          <Profilecard img="/ss-assets/aditi.jpg" name="Aditi Vaidya" insta="https://www.instagram.com/Kabhikabhiadittee/" position="Cultural Secretary" linked="" />
        </div>
        <div className="subTeam">
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/prapti.jpg" name="Prapti Shende" insta="https://www.instagram.com/_praptishende/" position="Jt. Cultural Secretary" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/prasad.jpg" name="Prasad Deshmukh" insta="https://www.instagram.com/praassaad/" position="Jt. Cultural Secretary" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/rachana.jpg" name="Rachana Nandi" insta="https://www.instagram.com/rachu_.14/" position="Jt. Cultural Secretary" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/saish.jpg" name="Saish Vilankar" insta="https://www.instagram.com/_saish_23/" position="Jt. Cultural Secretary" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/manas.jpeg" name="Manas Kalamkar" insta="https://www.instagram.com/manask_2000/" position="Jt. Cultural Secretary" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/chaitali.jpg" name="Chaitali Padalkar" insta="https://www.instagram.com/" position="Jt. Cultural Secretary" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/saumitra.jpg" name="Saumitra Parab" insta="https://www.instagram.com/saumi___3002/" position="Jt. Cultural Secretary" linked="" />
          </div>
        </div>
      </div>
      <div

        className="tabcontent"
        style={{ display: SS ? "block" : "none" }}
      >
        <div className="TeamMember1">
          <Profilecard img="/ss-assets/sankalp.jpg" name="Sankalp Patil" insta="https://www.instagram.com/sankalp_8606/" position="Sports Secretary" linked="" />
        </div>
        <div className="subTeam">
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/ujwal.jpg" name="Ujwal Jadhav" insta="https://www.instagram.com/777.ujwal/" position="Jt. Sports Secretary" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/vinit.jpg" name="Vinit Chavan" insta="https://www.instagram.com/vinitchavan_/" position="Jt. Sports Secretary" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/siddhesh.jpg" name="Siddhesh Desai" insta="https://www.instagram.com/sid_desai_1810/" position="Jt. Sports Secretary" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/prathamesh.jpg" name="Prathamesh Shirole" insta="https://www.instagram.com/shiro____88/" position="Jt. Sports Secretary" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/chinmayee.jpg" name="Chinmayee Gamre" insta="https://www.instagram.com/Chinmayee_gamre/" position="Jt. Sports Secretary" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/shreyash.jpg" name="Shreyash Shinde" insta="https://www.instagram.com/" position="Jt. Sports Secretary" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/poonam.jpg" name="Poonam Shendkar" insta="https://www.instagram.com/_poonam_shendkar_/" position="Jt. Sports Secretary" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/pratik.jpeg" name="Pratik Dighe" insta="https://www.instagram.com/__the__pratik__dighe__/" position="Jt. Sports Secretary" linked="" />
          </div>
        </div>
      </div>
      <div

        className="tabcontent"
        style={{ display: DP ? "block" : "none" }}
      >
        <div className="TeamMember1">
          <Profilecard img="/ss-assets/ahmed.jpg" name="Ahmed Ali" insta="https://www.instagram.com/beingahmedali_26/" position="CESA President" linked="" />
        </div>
        <div className="subTeam">

          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/gaurav.jpg" name="Gaurav More" insta="https://www.instagram.com/__gauravmore/" position="ACES President" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/siddham.jpg" name="Siddham Jain" insta="https://www.instagram.com/_siddham_/" position="IETE President" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/ashwini.jpg" name="Ashwini Kadam" insta="https://www.instagram.com/ashwini_k2101/" position="SAIE President" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/chinmaye.jpg" name="Chinmayee Sawant" insta="https://www.instagram.com//" position="ITSA President" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/adityaraj.jpg" name="Adityaraj Patil" insta="https://www.instagram.com/adityaraj.1111/" position="MESA President" linked="" />
          </div>
        </div>
      </div>
      <div

        className="tabcontent"
        style={{ display: CH ? "block" : "none" }}
      >
        <div className="TeamMember1">
          <Profilecard img="/ss-assets/sachin.jpg" name="Sachin Rathod" insta="https://www.instagram.com/sachinrathod_125/" position="Technical Team Head" linked="" />
        </div>

        <div className="subTeam">
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/harshal.jpg" name="Harshal Khare" insta="https://www.instagram.com/harshalkhare_21/" position="Sponsership Team Head" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/sumedh.jpg" name="Sumedh Inamdar" insta="https://www.instagram.com//" position="Photography Team Head" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/nishant.jpg" name="Nishant Kambli" insta="https://www.instagram.com/nishuuu1409/" position="Graphic Designing Team Head" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/simrity.jpg" name="Simrity Bhat" insta="https://www.instagram.com/simritybhat/" position="Public Relations Team Head" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/farhan.jpg" name="Farhan Shaikh" insta="https://www.instagram.com/farhxn_10/" position="Social Media Team Head" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/sanica.jpg" name="Sanica Jawale" insta="https://www.instagram.com/_sanicajawale/" position="Creative Team Head" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/devang.jpg" name="Devang Dhake" insta="https://www.instagram.com/devangdhake_/" position="Programme Committee Head" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/yogesh.jpg" name="Yogesh Powar" insta="https://www.instagram.com/yogesh_powar_00/" position="Event Management Team Head" linked="" />
          </div>
          <div className="subTeamMember1">
            <Profilecard img="/ss-assets/hardeek.jpg" name="Hardeek Karkare" insta="https://www.instagram.com/hardeekkarkare/" position="Stage Committee Head" linked="" />
          </div>

        </div>
      </div>



      <div
        className="tabcontent"
        style={{ display: Rep ? "block" : "none" }}
      >
        <div className="subTeam">


          <div className="subTeamMember1">
            <Scard name="Dheeraj Gupta" position="NCC Representative" insta="https://www.instagram.com/"/>

          </div>
          <div className="subTeamMember1">
            <Scard name="Nupur Naik" position="NSS Representative" insta="https://www.instagram.com/_nupurnaik_/" />

          </div>
          <div className="subTeamMember1">
            <Scard name="Anjali Bansode" position="Ladies Representative (Reserved)" insta="https://www.instagram.com/__.anjalii_._/" />

          </div>
          <div className="subTeamMember1">
            <Scard name="Shrushti Nikam" position="Ladies Representative (Open)" insta="https://www.instagram.com/shrushtii_nikam/" />

          </div>
        
        </div>
      </div>
    </div>
  );
}

