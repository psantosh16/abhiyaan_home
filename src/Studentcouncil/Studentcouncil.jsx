import "./Studentcouncil.css";
import { useState } from "react";
import React from "react";

export default function Studentcouncil() {
  const [GS, setGS] = useState(true);
  const [CS, setCS] = useState(false);
  const [SS, setSS] = useState(false);
  const [Rep, setRep] = useState(false);

  const toggleGS = () => {
    if (!GS) {
      setGS(true);
      setCS(false);
      setRep(false);
      setSS(false);
    }
  };
  
  const toggleCS = () => {
    if (!CS) {
      setCS(true);
      setGS(false);
      setRep(false);
      setSS(false);
    }
  };
  const toggleSS = () => {
    if (!SS) {
      setSS(true);
      setGS(false);
      setRep(false);
      setCS(false);
    }
  };
  const toggleRep = () => {
    if (!Rep) {
      setRep(true);
      setGS(false);
      setCS(false);
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
          <div className="profile-card">
            <div className="img">
              <img alt="" src="/web-assets/img/tp.jpg" />
              <p className="nam">NameSurname</p>
            </div>
            <div className="caption">
              <h3>Name Surname</h3>
              <p>General Secretary</p>
              <div className="social-links">
                <a href="">
                  
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="">
                  
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="subTeam">
          <div className="subTeamMember1">
            <div className="profile-card">
              <div className="img">
                <img alt="" src="/web-assets/img/tp.jpg" />
                <p className="nam">NameSurname</p>
              </div>
              <div className="caption">
                <h3>NameSurname</h3>
                <p>Jt. General Secretary</p>
                <div className="social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                <a href="">
                    
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subTeamMember1">
            <div className="profile-card">
              <div className="img">
                <img alt="" src="/web-assets/img/tp.jpg" />
                <p className="nam">NameSurname</p>
              </div>
              <div className="caption">
                <h3>Name Surname</h3>
                <p>Jt. General Secretary</p>
                <div className="social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                <a href="">
                    
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subTeamMember1">
            <div className="profile-card">
              <div className="img">
                <img alt="" src="/web-assets/img/tp.jpg" />
                <p className="nam">NameSurname</p>
              </div>
              <div className="caption">
                <h3>Name Surname</h3>
                <p>Jt. General Secretary</p>
                <div className="social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                <a href="">
                    
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subTeamMember1">
            <div className="profile-card">
              <div className="img">
                <img alt="" src="/web-assets/img/tp.jpg" />
                <p className="nam">NameSurname</p>
              </div>
              <div className="caption">
                <h3>Name Surname</h3>
                <p>Jt. General Secretary</p>
                <div className="social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                <a href="">
                    
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subTeamMember1">
            <div className="profile-card">
              <div className="img">
                <img alt="" src="/web-assets/img/tp.jpg" />
                <p className="nam">NameSurname</p>
              </div>
              <div className="caption">
                <h3>Name Surname</h3>
                <p>Jt. General Secretary</p>
                <div className="social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                <a href="">
                    
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subTeamMember1">
            <div className="profile-card">
              <div className="img">
                <img alt="" src="/web-assets/img/tp.jpg" />
                <p className="nam">NameSurname</p>
              </div>
              <div className="caption">
                <h3>Name Surname</h3>
                <p>Jt. General Secretary</p>
                <div className="social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                <a href="">
                    
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div

        className="tabcontent"
        style={{ display: CS ? "block" : "none" }}
      >
        <div className="TeamMember1">
          <div className="profile-card">
            <div className="img">
              <img alt="" src="/web-assets/img/tp.jpg" />
              <p className="nam">NameSurname</p>
            </div>
            <div className="caption">
              <h3>Name Surname</h3>
              <p>Cultural Secretary</p>
              <div className="social-links">
                <a href="">
                  
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="">
                  
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="subTeam">
          <div className="subTeamMember1">
            <div className="profile-card">
              <div className="img">
                <img alt="" src="/web-assets/img/tp.jpg" />
                <p className="nam">NameSurname</p>
              </div>
              <div className="caption">
                <h3>Name Surname</h3>
                <p>Jt. Cultural Secretary</p>
                <div className="social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                <a href="">
                    
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subTeamMember1">
            <div className="profile-card">
              <div className="img">
                <img alt="" src="/web-assets/img/tp.jpg" />
                <p className="nam">NameSurname</p>
              </div>
              <div className="caption">
                <h3>Name Surname</h3>
                <p>Jt. Cultural Secretary</p>
                <div className="social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                <a href="">
                    
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subTeamMember1">
            <div className="profile-card">
              <div className="img">
                <img alt="" src="/web-assets/img/tp.jpg" />
                <p className="nam">NameSurname</p>
              </div>
              <div className="caption">
                <h3>Name Surname</h3>
                <p>Jt. Cultural Secretary</p>
                <div className="social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                <a href="">
                    
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subTeamMember1">
            <div className="profile-card">
              <div className="img">
                <img alt="" src="/web-assets/img/tp.jpg" />
                <p className="nam">NameSurname</p>
              </div>
              <div className="caption">
                <h3>Name Surname</h3>
                <p>Jt.Cultural Secretary</p>
                <div className="social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                <a href="">
                    
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subTeamMember1">
            <div className="profile-card">
              <div className="img">
                <img alt="" src="/web-assets/img/tp.jpg" />
                <p className="nam">NameSurname</p>
              </div>
              <div className="caption">
                <h3>Name Surname</h3>
                <p>Jt. Cultural Secretary</p>
                <div className="social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                <a href="">
                    
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div

        className="tabcontent"
        style={{ display: SS ? "block" : "none" }}
      >
        <div className="TeamMember1">
          <div className="profile-card">
            <div className="img">
              <img alt="" src="/web-assets/img/tp.jpg" />
              <p className="nam">NameSurname</p>
            </div>
            <div className="caption">
              <h3>Name Surname</h3>
              <p>Sports Secretary</p>
              <div className="social-links">
                <a href="">
                  
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="">
                  
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="subTeam">
          <div className="subTeamMember1">
            <div className="profile-card">
              <div className="img">
                <img alt="" src="/web-assets/img/tp.jpg" />
                <p className="nam">NameSurname</p>
              </div>
              <div className="caption">
                <h3>Name Surname</h3>
                <p>Jt. Sports Secretary</p>
                <div className="social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                <a href="">
                    
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subTeamMember1">
            <div className="profile-card">
              <div className="img">
                <img alt="" src="/web-assets/img/tp.jpg" />
                <p className="nam">NameSurname</p>
              </div>
              <div className="caption">
                <h3>Name Surname</h3>
                <p>Jt. Sports Secretary</p>
                <div className="social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                <a href="">
                    
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subTeamMember1">
            <div className="profile-card">
              <div className="img">
                <img alt="" src="/web-assets/img/tp.jpg" />
                <p className="nam">NameSurname</p>
              </div>
              <div className="caption">
                <h3>Name Surname</h3>
                <p>Jt. Sports Secretary</p>
                <div className="social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                <a href="">
                    
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subTeamMember1">
            <div className="profile-card">
              <div className="img">
                <img alt="" src="/web-assets/img/tp.jpg" />
                <p className="nam">NameSurname</p>
              </div>
              <div className="caption">
                <h3>Name Surname</h3>
                <p>Jt. Sports Secretary</p>
                <div className="social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                <a href="">
                    
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subTeamMember1">
            <div className="profile-card">
              <div className="img">
                <img alt="" src="/web-assets/img/tp.jpg" />
                <p className="nam">NameSurname</p>
              </div>
              <div className="caption">
                <h3>Saloni Patil</h3>
                <p>Jt. Sports Secretary</p>
                <div className="social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                <a href="">
                    
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subTeamMember1">
            <div className="profile-card">
              <div className="img">
                <img alt="" src="/web-assets/img/tp.jpg" />
                <p className="nam">NameSurname</p>
              </div>
              <div className="caption">
                <h3>Nishant Kambli</h3>
                <p>Jt. Sports Secretary</p>
                <div className="social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                <a href="">
                    
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div

        className="tabcontent"
        style={{ display: Rep ? "block" : "none" }}
      >
        <div className="subTeam">
          <div className="subTeamMember1">
            <div className="s-profile-card">
              <h3>Name Surname</h3>
              <h4>NSS Representative</h4>
              <div className="s-caption">
                <div className="s-social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subTeamMember1">
            <div className="s-profile-card">
              <h3>Name Surname</h3>
              <h4>NCC Representative</h4>
              <div className="s-caption">
                <div className="s-social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subTeamMember1">
            <div className="s-profile-card">
              <h3>Name Surname</h3>
              <h4>Ladies Representative (Reserved)</h4>
              <div className="s-caption">
                <div className="s-social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="subTeamMember1">
            <div className="s-profile-card">
              <h3>Name Surname</h3>
              <h4>Ladies Representative (Open)</h4>
              <div className="s-caption">
                <div className="s-social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subTeamMember1">
            <div className="s-profile-card">
              <h3>Name Surname</h3>
              <h4>Student Representative</h4>
              <div className="s-caption">
                <div className="s-social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="subTeamMember1">
            <div className="s-profile-card">
              <h3>Name Surname</h3>
              <h4>Student Representative</h4>
              <div className="s-caption">
                <div className="s-social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div><div className="subTeamMember1">
            <div className="s-profile-card">
              <h3>Name Surname</h3>
              <h4>Student Representative</h4>
              <div className="s-caption">
                <div className="s-social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div><div className="subTeamMember1">
            <div className="s-profile-card">
              <h3>Name Surname</h3>
              <h4>Student Representative</h4>
              <div className="s-caption">
                <div className="s-social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div><div className="subTeamMember1">
            <div className="s-profile-card">
              <h3>Name Surname</h3>
              <h4>Student Representative</h4>
              <div className="s-caption">
                <div className="s-social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div><div className="subTeamMember1">
            <div className="s-profile-card">
              <h3>Name Surname</h3>
              <h4>Student Representative</h4>
              <div className="s-caption">
                <div className="s-social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div><div className="subTeamMember1">
            <div className="s-profile-card">
              <h3>Name Surname</h3>
              <h4>Student Representative</h4>
              <div className="s-caption">
                <div className="s-social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div><div className="subTeamMember1">
            <div className="s-profile-card">
              <h3>Name Surname</h3>
              <h4>Student Representative</h4>
              <div className="s-caption">
                <div className="s-social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div><div className="subTeamMember1">
            <div className="s-profile-card">
              <h3>Name Surname</h3>
              <h4>Student Representative</h4>
              <div className="s-caption">
                <div className="s-social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div><div className="subTeamMember1">
            <div className="s-profile-card">
              <h3>Name Surname</h3>
              <h4>Student Representative</h4>
              <div className="s-caption">
                <div className="s-social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div><div className="subTeamMember1">
            <div className="s-profile-card">
              <h3>Name Surname</h3>
              <h4>Student Representative</h4>
              <div className="s-caption">
                <div className="s-social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div><div className="subTeamMember1">
            <div className="s-profile-card">
              <h3>Name Surname</h3>
              <h4>Student Representative</h4>
              <div className="s-caption">
                <div className="s-social-links">
                <a href="">
                    
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

