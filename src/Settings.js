import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [lowStockThreshold, setLowStockThreshold] = useState(10);
  const [overstockThreshold, setOverstockThreshold] = useState(100);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState('English');
  const [theme, setTheme] = useState('Light');

  const handleSaveSettings = () => {
    // Save the settings (usually via API)
    alert('Settings have been saved.');
  };

  return (
    <div className="settings">
      <h2>Settings</h2>

      {/* User Account Settings */}
      <section className="settings-section">
        <h3>Account Settings</h3>
        <div className="setting-item">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" defaultValue="JohnDoe" disabled />
        </div>
        <div className="setting-item">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" defaultValue="johndoe@example.com" disabled />
        </div>
      </section>

      {/* Inventory Management Settings */}
      <section className="settings-section">
        <h3>Inventory Settings</h3>
        <div className="setting-item">
          <label htmlFor="lowStockThreshold">Low Stock Threshold:</label>
          <input
            type="number"
            id="lowStockThreshold"
            value={lowStockThreshold}
            onChange={(e) => setLowStockThreshold(e.target.value)}
          />
        </div>
        <div className="setting-item">
          <label htmlFor="overstockThreshold">Overstock Threshold:</label>
          <input
            type="number"
            id="overstockThreshold"
            value={overstockThreshold}
            onChange={(e) => setOverstockThreshold(e.target.value)}
          />
        </div>
      </section>

      {/* Notification Settings */}
      <section className="settings-section">
        <h3>Notification Settings</h3>
        <div className="setting-item">
          <label htmlFor="notificationsEnabled">Enable Notifications:</label>
          <input
            type="checkbox"
            id="notificationsEnabled"
            checked={notificationsEnabled}
            onChange={(e) => setNotificationsEnabled(e.target.checked)}
          />
        </div>
      </section>

      {/* System Preferences */}
      <section className="settings-section">
        <h3>System Preferences</h3>
        <div className="setting-item">
          <label htmlFor="language">Language:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>
        <div className="setting-item">
          <label htmlFor="theme">Theme:</label>
          <select
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </div>
      </section>

      <button onClick={handleSaveSettings}>Save Settings</button>
    </div>
  );
}

export default Settings;
