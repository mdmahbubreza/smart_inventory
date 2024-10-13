import React from 'react';
import './Dashboard.css'; // Dashboard-specific styles

function Dashboard({ inventoryData }) {
  // Calculate dashboard metrics
  const totalProducts = inventoryData.length;
  const inStockProducts = inventoryData.filter(item => item.status === 'In Stock').length;
  const lowStockProducts = inventoryData.filter(item => item.status === 'Low Stock').length;
  const outOfStockProducts = inventoryData.filter(item => item.status === 'Out of Stock').length;

  return (
    <div className="dashboard">
      <h2>Inventory Dashboard</h2>
      <div className="dashboard-metrics">
        <div className="metric-card">
          <h3>Total Products</h3>
          <p>{totalProducts}</p>
        </div>
        <div className="metric-card">
          <h3>In Stock</h3>
          <p>{inStockProducts}</p>
        </div>
        <div className="metric-card">
          <h3>Low Stock</h3>
          <p>{lowStockProducts}</p>
        </div>
        <div className="metric-card">
          <h3>Out of Stock</h3>
          <p>{outOfStockProducts}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


