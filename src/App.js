import React from 'react';
import './App.css';
import { FaBell, FaCog, FaChartLine, FaBoxes, FaHome, FaUserCircle } from 'react-icons/fa'; // Using react-icons for icons

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <nav className="navigation">
            <a href="#dashboard"><FaHome /> Dashboard</a>
            <a href="#inventory"><FaBoxes /> Inventory</a>
            <a href="#predictions"><FaChartLine /> Predictions</a>
            <a href="#alerts"><FaBell /> Alerts</a>
            <a href="#settings"><FaCog /> Settings</a>
          </nav>
        </div>
        <div className="header-right">
          <div className="site-logo">
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Smart Inventory" />
            <span className="site-name">Smart Inventory</span>
          </div>
          <div className="profile-icon">
            <FaUserCircle size={30} />
          </div>
        </div>
      </header>

      {/* Main Content Area (Blank for now) */}
      <main className="main-content">
        {/* Main content will go here */}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 CloutEdge | Powered by Google Gemini AI & Cosmocloud</p>
      </footer>
    </div>
  );
}

export default App;
