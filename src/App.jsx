import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./components/Cards";
import Intro from "./components/Intro";
import Pages from "./components/Pages";
import 'font-awesome/css/font-awesome.min.css';
import Togglebutton from "./components/Togglebutton";
export default function App() {

  return (
      <div className="App">
       <NavBar/>
       <Intro />
       <Pages/>
       {/* <Cards/> */}
       <Togglebutton/>
    </div>
  )
};