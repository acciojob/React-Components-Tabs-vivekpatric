import React, { useState } from 'react';
import '../styles/App.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabs">
      <div
        className={activeTab === 'Home' ? 'tab active' : 'tab'}
        id="Home-Tab"
        onClick={() => handleTabClick('Home')}
      >
        Home
      </div>
      <div
        className={activeTab === 'About' ? 'tab active' : 'tab'}
        id="About-Tab"
        onClick={() => handleTabClick('About')}
      >
        About
      </div>
      <div
        className={activeTab === 'Features' ? 'tab active' : 'tab'}
        id="Features-Tab"
        onClick={() => handleTabClick('Features')}
      >
        Features
      </div>
    </div>
  );
};

export default Tabs;