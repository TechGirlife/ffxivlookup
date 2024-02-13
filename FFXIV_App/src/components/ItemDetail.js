// src/components/ItemDetail.js
import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>Item Detail</h2>
      <p><strong>Name:</strong> {item.name}</p>
      <p><strong>Description:</strong> {item.description}</p>
      <p><strong>Level:</strong> {item.level}</p>
      <p><strong>Rarity:</strong> {item.rarity}</p>
    </div>
  );
};

export default ItemDetail;
