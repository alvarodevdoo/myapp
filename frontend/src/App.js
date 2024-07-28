import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import './App.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="container">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="main">
          <Sidebar isOpen={isSidebarOpen} />
          <div className={`content ${isSidebarOpen ? 'content-expanded' : 'content-collapsed'}`}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
