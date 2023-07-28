import React, { useState } from "react";
import './';

const TABS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features" }
];

const Tab = ({ id, label, activeTab, onClick }) => (
  <div
    className={`tab ${activeTab === id ? "active" : ""}`}
    id={`${id}-tab`}
    onClick={() => onClick(id)}
  >
    {label}
  </div>
);

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tabs">
      {TABS.map((tab) => (
        <Tab
          key={tab.id}
          id={tab.id}
          label={tab.label}
          activeTab={activeTab}
          onClick={handleTabClick}
        />
      ))}
      <div className="viewport">
        Pages Go Here for {activeTab}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Tabs />
    </div>
  );
}
