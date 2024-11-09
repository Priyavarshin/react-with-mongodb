// src/Product.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Product() {
  const [foodName, setFoodName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const addFoodData = () => {
    if (foodName && description) {
      Axios.post("http://localhost:3001/insert", {
        foodName: foodName,
        description: description
      })
      .then(() => {
        setFoodName('');
        setDescription('');
        navigate('/food-list'); // Navigate to the food list page after submission
      })
      .catch((error) => {
        console.error("Error adding food item:", error);
      });
    } else {
      alert("Please fill in both fields!");
    }
  };

  return (
    <div>
      <h1>Product Management</h1>
      <input
        type="text"
        placeholder="Food name"
        required
        value={foodName}
        onChange={(event) => setFoodName(event.target.value)}
      />
      <br /><br />
      <input
        type="text"
        placeholder="Description"
        required
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <br /><br />
      <button onClick={addFoodData}>Submit</button>
    </div>
  );
}

export default Product;
