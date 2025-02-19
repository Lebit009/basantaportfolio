import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./components/Cards";
import Intro from "./components/Intro";
import Pages from "./components/Pages";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Practice from "./components/Practice";
import 'font-awesome/css/font-awesome.min.css';
import Togglebutton from "./components/Togglebutton";
export default function App() {

  return (
    <Router>
      <div className="App">
       <NavBar/>
       <Intro />
       <Pages/>
       <Routes>
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/practice" element={<Practice />} />
       </Routes>
       {/* <Cards/> */}
       <Togglebutton/>
    </div>
    </Router>
  )
};