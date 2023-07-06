import "./App.css";
import Navbar from "./components/navBar/Navbar";
import HowDoesItWork from "./components/HowDoesItWork/HowDoesItWork";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/comofunciona" element={<HowDoesItWork />} />
        <h2>Hola Mundo</h2>
      </Routes>
    </div>
  );
}

export default App;
