import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar/NavBar";
import DashBoard from "./components/DashBoard/dashBoard";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </Router>
    

  );
}

export default App;
