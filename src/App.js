import "./App.scss";
import FullPage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
  Fullpage,
} from "@ap.cx/react-fullpage";
import BigEyebrow from "./images/BigEyebrow.png";
import NestingDoll from "./images/NestingDoll.png";
import Signature from "./images/Signature.png";

function App() {
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
          <div className="FullScreen About">
            <p>About</p>
          </div>
        </FullpageSection>
        <FullpageSection style={{ width: "100vw", height: "100vh" }}>
          {/* <div className="Projects-top-doll"></div>
          <div className="Projects-bottom-doll"></div> */}
          <div className="FullScreen Projects">
            <p>Projects</p>
          </div>
        </FullpageSection>
        <FullpageSection style={{ width: "100vw", height: "100vh" }}>
          <div className="FullScreen Contact">
            <p>Contact</p>
          </div>
        </FullpageSection>
      </FullPageSections>
    </FullPage>
  );
}

export default App;
