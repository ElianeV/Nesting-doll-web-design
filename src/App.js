import "./App.scss";
import React, { useState } from "react";
import BigEyebrow from "./images/BigEyebrow.png";
import NestingDoll from "./images/NestingDoll.png";
import Signature from "./images/Signature.png";
import ProjTopLeft from "./images/ProjTopLeft.png";
import ProjBottomLeft from "./images/ProjBottomLeft.png";
import ProjTopRight from "./images/ProjTopRight.png";
import ProjBottomRight from "./images/ProjBottomRight.png";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [projTitle, setProjTitle] = useState("open us...");
  const [projDescription, setProjDescription] = useState("");
  const [projSoftware, setProjSoftware] = useState("");

  const splitCover = () => {
    setIsHovered(true);
    setProjTitle("BENDY CANDLE");
    setProjDescription(
      "An app created to improve your flexibility. It allows you to create custom stretch routines and runs an automatic countdown."
    );
    setProjSoftware("HTML CSS/SASS Javascript React Vectornator");
  };
  const joinCover = () => {
    setIsHovered(false);
  };
  const splitCover2 = () => {
    setIsHovered2(true);
    setProjTitle("OUT BOULDERING");
    setProjDescription(
      "Check the weather in Ireland to see which outdoor bouldering areas are ideal to visit."
    );
    setProjSoftware("HTML CSS/SASS Javascript React Vectornator");
  };
  const joinCover2 = () => {
    setIsHovered2(false);
  };
  const splitCover3 = () => {
    setIsHovered3(true);
    setProjTitle("MYSTERY PROJ");
    setProjDescription("This mystery project is still in the making.");
    setProjSoftware("N/A N/A N/A N/A N/A");
  };
  const joinCover3 = () => {
    setIsHovered3(false);
  };

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <div id="Home" className="FullScreen Intro">
          <nav>
            <ul>
              <li>
                <a href="#Home">HOME</a>
              </li>
              <li>
                <a href="#Projects">PROJECTS</a>
              </li>
              <li>
                <a href="#Contact">CONTACT</a>
              </li>
            </ul>
          </nav>
          <div className="NestingDoll">
            <img src={NestingDoll} alt="nestingdoll" />
          </div>
          <div className="Eyebrows">
            <img id="BigEyebrow" src={BigEyebrow} alt="eyebrow" />
            <img id="MidEyebrow" src={BigEyebrow} alt="eyebrow" />
            <img id="SmallEyebrow" src={BigEyebrow} alt="eyebrow" />
          </div>
          <div className="Signature">
            <img id="Signature" src={Signature} alt="signature" />
            <p id="WebDev"> WEB DEVELOPMENT</p>
          </div>
        </div>
      </div>
      <div style={{ width: "100vw", height: "100vh" }}>
        <div id="Projects" className="FullScreen Projects">
          <div className="Description">
            <h2>{projTitle}</h2>
            <h3>{projDescription}</h3>
            <p>{projSoftware}</p>
          </div>
          <div className="AllProjects">
            <div
              id="Proj1"
              className="Project"
              onClick={() => window.open("https://www.bendycandle.com")}
              onMouseEnter={splitCover}
              onMouseLeave={joinCover}
              style={{ cursor: "pointer" }}
            >
              <div
                className={
                  isHovered
                    ? "ProjCoverTop Proj1 AnimatedTop"
                    : "ProjCoverTop Proj1"
                }
              >
                <img src={ProjTopLeft} />
              </div>
              <div
                className={
                  isHovered
                    ? "ProjCoverBottom Proj1 AnimatedBottom"
                    : "ProjCoverBottom Proj1"
                }
              >
                <img src={ProjBottomLeft} />
              </div>
            </div>
            <div
              id="Proj2"
              className="Project"
              onClick={() => window.open("#")}
              onMouseEnter={splitCover2}
              onMouseLeave={joinCover2}
              style={{ cursor: "pointer" }}
            >
              <div
                className={
                  isHovered2
                    ? "ProjCoverTop Proj2 AnimatedTop"
                    : "ProjCoverTop Proj2"
                }
              >
                <img src={ProjTopLeft} />
              </div>
              <div
                className={
                  isHovered2
                    ? "ProjCoverBottom Proj2 AnimatedBottom"
                    : "ProjCoverBottom Proj2"
                }
              >
                <img src={ProjBottomLeft} />
              </div>
            </div>
            <div
              id="Proj3"
              className="Project"
              onClick={() => window.open("#")}
              onMouseEnter={splitCover3}
              onMouseLeave={joinCover3}
              style={{ cursor: "pointer" }}
            >
              <div
                className={
                  isHovered3
                    ? "ProjCoverTop Proj3 AnimatedTop"
                    : "ProjCoverTop Proj3"
                }
              >
                <img src={ProjTopRight} />
              </div>
              <div
                className={
                  isHovered3
                    ? "ProjCoverBottom Proj3 AnimatedBottom"
                    : "ProjCoverBottom Proj3"
                }
              >
                <img src={ProjBottomRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100vw", height: "100vh" }}>
        <div id="Contact" className="FullScreen Contact"></div>
      </div>
    </>
  );
}

export default App;
