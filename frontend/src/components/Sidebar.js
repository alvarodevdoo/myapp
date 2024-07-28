import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isCompact, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isCompact ? 'compact' : ''}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        {isCompact ? 'Expand' : 'Collapse'}
      </button>
      <ul>
        <li><Link to="/"><i className="icon-home"></i>{!isCompact && 'Home'}</Link></li>
        <li><Link to="/page1"><i className="icon-page1"></i>{!isCompact && 'Page 1'}</Link></li>
        <li><Link to="/page2"><i className="icon-page2"></i>{!isCompact && 'Page 2'}</Link></li>
        <li><Link to="/page3"><i className="icon-page3"></i>{!isCompact && 'Page 3'}</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
