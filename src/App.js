import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DesignBoard from "./pages/DesignBoard";
import { DesignProvider } from "./context/DesignContext";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/tool/artboard" element={
          <DesignProvider>
            <DesignBoard />
          </DesignProvider>
        } />
      </Routes>
    </Router>
  );
}

export default App;
