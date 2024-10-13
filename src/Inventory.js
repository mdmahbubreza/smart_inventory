import React, { useState } from 'react';
import './Inventory.css'; // Inventory-specific styles

function Inventory() {
  const [inventoryData, setInventoryData] = useState([
    { productName: 'Product A', sku: '12345', stock: 50, category: 'Electronics', status: 'In Stock' },
    { productName: 'Product B', sku: '67890', stock: 5, category: 'Accessories', status: 'Low Stock' },
    { productName: 'Product C', sku: '54321', stock: 0, category: 'Clothing', status: 'Out of Stock' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [newProduct, setNewProduct] = useState({ productName: '', sku: '', stock: '', category: '', status: '' });
  const [editIndex, setEditIndex] = useState(-1);

  // Filter and search logic
  const filteredInventory = inventoryData.filter(item => {
    return (
      item.productName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterStatus === 'all' || item.status === filterStatus)
    );
  });

  // Handle Delete
  const handleDelete = (index) => {
    const updatedInventory = inventoryData.filter((_, i) => i !== index);
    setInventoryData(updatedInventory);
  };

  // Handle Add New Product
  const handleAddProduct = () => {
    if (newProduct.productName && newProduct.sku && newProduct.stock && newProduct.category && newProduct.status) {
      setInventoryData([...inventoryData, newProduct]);
      setNewProduct({ productName: '', sku: '', stock: '', category: '', status: '' }); // Reset input fields
    } else {
      alert("Please fill in all fields to add a product.");
    }
  };

  // Handle Edit Product
  const handleEdit = (index) => {
    setEditIndex(index);
    setNewProduct(inventoryData[index]);
  };

  const handleUpdateProduct = () => {
    if (editIndex >= 0) {
      const updatedInventory = [...inventoryData];
      updatedInventory[editIndex] = newProduct;
      setInventoryData(updatedInventory);
      setEditIndex(-1);
      setNewProduct({ productName: '', sku: '', stock: '', category: '', status: '' }); // Reset input fields
    }
  };

  return (
    <div className="inventory">
      <h2>Inventory</h2>

      {/* Search and Filter */}
      <div className="inventory-controls">
        <input
          type="text"
          placeholder="Search product"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="all">All Status</option>
          <option value="In Stock">In Stock</option>
          <option value="Low Stock">Low Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>

      {/* Inventory Table */}
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>SKU</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory.map((item, index) => (
            <tr key={index}>
              <td>{item.productName}</td>
              <td>{item.sku}</td>
              <td>{item.stock}</td>
              <td>{item.category}</td>
              <td>{item.status}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add / Edit Product */}
      <div className="product-form">
        <h3>{editIndex >= 0 ? 'Edit Product' : 'Add Product'}</h3>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.productName}
          onChange={(e) => setNewProduct({ ...newProduct, productName: e.target.value })}
        />
        <input
          type="text"
          placeholder="SKU"
          value={newProduct.sku}
          onChange={(e) => setNewProduct({ ...newProduct, sku: e.target.value })}
        />
        <input
          type="number"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
        />
        <select
          value={newProduct.status}
          onChange={(e) => setNewProduct({ ...newProduct, status: e.target.value })}
        >
          <option value="">Select Status</option>
          <option value="In Stock">In Stock</option>
          <option value="Low Stock">Low Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>

        {editIndex >= 0 ? (
          <button onClick={handleUpdateProduct}>Update Product</button>
        ) : (
          <button onClick={handleAddProduct}>Add Product</button>
        )}
      </div>
    </div>
  );
}

export default Inventory;
