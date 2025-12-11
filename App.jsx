import React, { useState } from 'react';

const products = [
  { name: 'Notebook', price: 50, category: 'Stationery' },
  { name: 'Backpack', price: 1200, category: 'Bags' },
  { name: 'Headphones', price: 2500, category: 'Electronics' },
  { name: 'Pen', price: 20, category: 'Stationery' },
];

const categories = ['All', 'Stationery', 'Bags', 'Electronics'];

function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div>
      <h2>Product Listing</h2>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>
            {product.name} - ₹{product.price} ({product.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListing;