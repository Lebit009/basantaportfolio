import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "./components/Intro";
import "../src/App.css";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Education from "./components/Education";
import "font-awesome/css/font-awesome.min.css";
import Togglebutton from "./components/Togglebutton";
export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Intro />
        <Education/>
        <Skills />
        {/* <Cards/> */}
        <Togglebutton />
        <Footer />
      </div>
    </Router>
  );
}
