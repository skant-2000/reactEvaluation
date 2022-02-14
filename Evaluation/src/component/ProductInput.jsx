import React, { useState } from "react";

export default function ProductInput() {
  const [formData, setFormData] = useState([]);


  const handleSubmit = (data) => {
    fetch('http://localhost:3000/jsonData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
    
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
  }

  return (
    <form>
      <label>Title: </label>
      <input
          type="text"
          name="title"
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, title: e.currentTarget.value })
          }
        />
      <br />
      <br />
      <label>Cost: </label>
      <input
          type="number"
          name="cost"
          value={formData.cost}
          onChange={(e) =>
            setFormData({ ...formData, cost: e.currentTarget.value })
          }
        />
      <br />
      <br />
      <label>Image: </label>
        <input type="text" name="image" value={formData.image} 
        onChange={(e) =>
            setFormData({ ...formData, image: e.currentTarget.value })
          } />
        <br/>
        <br/>
      <label>Catagory: </label>
      <input
          type="text"
          value={formData.catagory}
          onChange={(e) =>
            setFormData({ ...formData, catagory: e.currentTarget.value })
          }
        />
        <br/>
        <br/>
    <button onClick={handleSubmit(formData)}>Submit</button>
    </form>
  );
}
