import React, { useEffect, useState} from "react";

function NewPlantForm({addNewPlant, searchResults}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify({
        name: name,
        image: image,
        price: price
      })  
    })
    let newPlant = {
      name: name,
      image: image,
      price: price
    }
    addNewPlant(newPlant)
  }

// useEffect(() => {
//   fetch('http://localhost:6001/plants', {
//     method: 'POST',
//     headers: { "Content-Type" : "application/json"},
//     body: JSON.stringify(searchResults),
//     })
//     // handleSubmit()
//     // .then ((response) => {response.json})
//     // .then((searchResults) => {console.log("Success:", searchResults)})
//     // .catch((error) => {console.error("Error:", error)})
// })

  return (
    <div className="new-plant-form" onSubmit={handleSubmit}>
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Add Plant</button>

      </form>
    </div>
  );
}

export default NewPlantForm;
