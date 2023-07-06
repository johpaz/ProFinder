import "./App.css";
import Navbar from "./components/navBar/Navbar";
import HowDoesItWork from "./components/HowDoesItWork/HowDoesItWork";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FromProvider from "./views/FromProvider/FromProvider";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/comofunciona" element={<HowDoesItWork />} />
        <Route path="/login" element={<FromProvider />} />
        <Route path="/" element={<h2>Hola Mundo</h2>} />
      </Routes>
    </div>
  );
}

export default App;
