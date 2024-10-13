import React from 'react';
import './Alerts.css'; // Alerts-specific styles

function Alerts({ inventoryData }) {
  // Define thresholds for low stock
  const lowStockThreshold = 10;
  const overstockThreshold = 100;

  // Calculate alerts
  const lowStockAlerts = inventoryData.filter(item => item.stock > 0 && item.stock < lowStockThreshold);
  const outOfStockAlerts = inventoryData.filter(item => item.stock === 0);
  const overstockAlerts = inventoryData.filter(item => item.stock > overstockThreshold);

  return (
    <div className="alerts">
      <h2>Inventory Alerts</h2>

      {/* Low Stock Alerts */}
      {lowStockAlerts.length > 0 && (
        <div className="alert-group">
          <h3>Low Stock Alerts</h3>
          <ul>
            {lowStockAlerts.map(item => (
              <li key={item.sku}>
                {item.productName} (SKU: {item.sku}) - Only {item.stock} left
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Out of Stock Alerts */}
      {outOfStockAlerts.length > 0 && (
        <div className="alert-group">
          <h3>Out of Stock Alerts</h3>
          <ul>
            {outOfStockAlerts.map(item => (
              <li key={item.sku}>
                {item.productName} (SKU: {item.sku}) - Out of stock!
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Overstock Alerts */}
      {overstockAlerts.length > 0 && (
        <div className="alert-group">
          <h3>Overstock Alerts</h3>
          <ul>
            {overstockAlerts.map(item => (
              <li key={item.sku}>
                {item.productName} (SKU: {item.sku}) - Overstocked with {item.stock} units
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* No Alerts */}
      {lowStockAlerts.length === 0 && outOfStockAlerts.length === 0 && overstockAlerts.length === 0 && (
        <p>No alerts at the moment. Everything is in order.</p>
      )}
    </div>
  );
}

export default Alerts;
