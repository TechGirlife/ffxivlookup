// src/components/ItemList.js
import React from 'react';
import './styles.css';

const ItemList = ({ items, searchTerm, currentPage, itemsPerPage, onPageChange }) => {
  // Filter items based on the search term
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredItems.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {currentItems.map(item => (
          <li key={item.id} className="item">
            <h3>{item.name}</h3>
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Level:</strong> {item.level}</p>
            <p><strong>Rarity:</strong> {item.rarity}</p>
          </li>
        ))}
      </ul>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number}>
            <button onClick={() => onPageChange(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
