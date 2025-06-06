import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "./components/Intro";
import "../src/App.css";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Practice from "./components/Practice";
import Cards from "./components/Cards";
import "font-awesome/css/font-awesome.min.css";
import Togglebutton from "./components/Togglebutton";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="intro">
        <Intro />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="practice">
        <Practice />
      </div>
      {/* <Cards /> */}
      <Togglebutton />
      <Footer />
    </div>
  );
}