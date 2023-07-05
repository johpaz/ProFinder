import "./App.css";
import Navbar from "./components/navBar/Navbar.jsx";
import HomePage from "../src/views/HomePage/HomePage"
import {Routes,Route} from "react-router-dom";



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
