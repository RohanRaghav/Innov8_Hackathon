// App.js
import React from "react";
import Navbar from "./Component/Navbar";
import ProjectForm from "./Component/ProjectForm";
import Projects from "./Component/Projects";
import CustomCursor from "./Component/CustomCursor";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "./App.css";

function App() {

  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <CustomCursor /> {/* Render the custom cursor component */}
          {/* Your content components here */}
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/Addition" element={<ProjectForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
