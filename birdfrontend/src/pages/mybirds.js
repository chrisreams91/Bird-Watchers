import React from "react";
import { useState } from 'react';

function MyBirds() {

const [formData, setFormData] = useState({
    name: '',
    location: '',
    date: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Name: ${formData.name}, Location: ${formData.location}, Date: ${formData.date}`
      );
  };

  return (
    <form onSubmit={handleSubmit}>
    <br />
      <label htmlFor="name">Bird Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="location">Location:</label>
      <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="date">Date Seen:</label>
      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
      <br />
      <br />
      <button type="submit">Submit Findings</button>
    </form>
  );
}

export default MyBirds;
