import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Screens/Homepage";
import {BrowserRouter, Route,Routes, Link,Switch} from 'react-router-dom';
import Cartscreen from "./Screens/Cartscreen";
import Registerscreen from "./Screens/Registerscreen";
import Loginscreen from "./Screens/Loginscreen";
import "bootstrap"
function App() {
  return (
    <div className="App">
      <Navbar />
      
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Homepage />}/>
      <Route exact path="/cart"  element={<Cartscreen />}/>
      <Route exact path="/register"  element={<Registerscreen/>}/>
      <Route exact path="/login"  element={<Loginscreen />}/>
      
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
