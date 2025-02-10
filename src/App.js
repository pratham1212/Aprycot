import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from './Components/SideBar';
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import NotFoundPage from './Pages/Error Pages/404.js';

function App() {
  const [isExpanded, setIsExpanded] = useState(false); // State for sidebar

  return (
    <div className="bg-[#fffbec]">
      <Router>
        <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <Header isExpanded={isExpanded} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
