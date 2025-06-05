import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <div className="App">
        <NavBar />
        <Intro />
        <Routes>
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/practice" element={<Practice />} />
        </Routes>
        {/* <Education/>
        <Skills />
        <Practice/> */}
        {/* <Cards/> */}
        <Togglebutton />
        <Footer />
      </div>
    </Router>
  );
  
}
