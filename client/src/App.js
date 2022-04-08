import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar/NavBar";
import Overview from "./components/Overview"

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
    </Router>
  );
}

export default App;
