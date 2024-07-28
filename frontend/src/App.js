import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Home from './pages/Home';

const App = () => {
  const [isSidebarCompact, setIsSidebarCompact] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCompact(!isSidebarCompact);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar isCompact={isSidebarCompact} toggleSidebar={toggleSidebar} />
        <div className={`main-content ${isSidebarCompact ? 'compact' : ''}`}>
          <Navbar />
          <Routes>
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
