import "./App.scss";
import React, { useState } from "react";
import FullPage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
  Fullpage,
} from "@ap.cx/react-fullpage";
import BigEyebrow from "./images/BigEyebrow.png";
import NestingDoll from "./images/NestingDoll.png";
import Signature from "./images/Signature.png";
import ProjTopLeft from "./images/ProjTopLeft.png";
import ProjBottomLeft from "./images/ProjBottomLeft.png";
import ProjTopRight from "./images/ProjTopRight.png";
import ProjBottomRight from "./images/ProjBottomRight.png";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const splitCover = () => {
    setIsHovered(true);
  };

  return (
    <FullPage>
      <FullPageSections>
        <FullpageSection style={{ width: "100vw", height: "100vh" }}>
          <div className="FullScreen Intro">
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
            </div>
          </div>
        </FullpageSection>
        <FullpageSection style={{ width: "100vw", height: "100vh" }}>
          <div className="FullScreen Projects">
            <div className="Description">
              <h2>Bendy Candle</h2>
              <h3>
                An app created to improve your flexibility. It allows you to
                create custom stretch routines and runs an automatic countdown.
              </h3>
              <p>HTML CSS/SASS Javascript React Vectornator</p>
            </div>
            <div className="AllProjects">
              <div
                id="Proj1"
                className="Project"
                onClick={() => window.open("https://www.bendycandle.com")}
                onMouseEnter={splitCover}
                style={{ cursor: "pointer" }}
              >
                <div className={isHovered ? "ProjCoverTop Proj1" : ""}>
                  <img src={ProjTopLeft} />
                </div>
                <div className="ProjCoverBottom Proj1">
                  <img src={ProjBottomLeft} />
                </div>
              </div>
              <div id="Proj2" className="Project">
                <div className="ProjCoverTop Proj2">
                  <img src={ProjTopLeft} />
                </div>
                <div className="ProjCoverBottom Proj2">
                  <img src={ProjBottomLeft} />
                </div>
              </div>
              <div id="Proj3" className="Project">
                <div className="ProjCoverTop Proj3">
                  <img src={ProjTopRight} />
                </div>
                <div className="ProjCoverBottom Proj3">
                  <img src={ProjBottomRight} />
                </div>
              </div>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection style={{ width: "100vw", height: "100vh" }}>
          <div className="FullScreen Contact"></div>
        </FullpageSection>
      </FullPageSections>
    </FullPage>
  );
}

export default App;
