
import "./App.css";
import Navbar from "./components/navBar/Navbar";

import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import FromProvider from "./views/FromProvider/FromProvider";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<FromProvider />} />
      </Routes>
    </div>
  );
}

export default App;
