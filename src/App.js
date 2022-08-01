import "./App.scss";
import FullPage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
  Fullpage,
} from "@ap.cx/react-fullpage";

function App() {
  return (
    <FullPage>
      <FullPageSections>
        <FullpageSection style={{ width: "100vw", height: "100vh" }}>
          <div className="FullScreen Intro">
            <h1>Intro</h1>
          </div>
        </FullpageSection>
        <FullpageSection style={{ width: "100vw", height: "100vh" }}>
          <div className="FullScreen About">
            <p>About</p>
          </div>
        </FullpageSection>
        <FullpageSection style={{ width: "100vw", height: "100vh" }}>
          <div className="Projects-top-doll"></div>
          <div className="Projects-bottom-doll"></div>
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
