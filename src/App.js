import React, { useState } from 'react';
import './App.css';
import { FaBell, FaCog, FaChartLine, FaBoxes, FaHome, FaUserCircle } from 'react-icons/fa';
import Inventory from './Inventory';
import Dashboard from './Dashboard';
import Alerts from './Alerts';
import Settings from './Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  
  // Lifted inventory data state
  const [inventoryData, setInventoryData] = useState([
    { productName: 'Product A', sku: '12345', stock: 50, category: 'Electronics', status: 'In Stock' },
    { productName: 'Product B', sku: '67890', stock: 5, category: 'Accessories', status: 'Low Stock' },
    { productName: 'Product C', sku: '54321', stock: 0, category: 'Clothing', status: 'Out of Stock' },
    { productName: 'Product D', sku: '98765', stock: 150, category: 'Furniture', status: 'In Stock' }
  ]);

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <nav className="navigation">
            <a href="#dashboard" onClick={() => setCurrentPage('dashboard')}>
              <FaHome /> Dashboard
            </a>
            <a href="#inventory" onClick={() => setCurrentPage('inventory')}>
              <FaBoxes /> Inventory
            </a>
            <a href="#predictions"><FaChartLine /> Predictions</a>
            <a href="#alerts" onClick={() => setCurrentPage('alerts')}>
              <FaBell /> Alerts
            </a>
            <a href="#settings" onClick={() => setCurrentPage('settings')}>
              <FaCog /> Settings
            </a>
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

      {/* Main Content Area */}
      <main className="main-content">
        {currentPage === 'dashboard' && <Dashboard inventoryData={inventoryData} />}
        {currentPage === 'inventory' && <Inventory inventoryData={inventoryData} setInventoryData={setInventoryData} />}
        {currentPage === 'alerts' && <Alerts inventoryData={inventoryData} />}
        {currentPage === 'settings' && <Settings />}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 CloutEdge | Powered by Google Gemini AI & Cosmocloud</p>
      </footer>
    </div>
  );
}

export default App;
