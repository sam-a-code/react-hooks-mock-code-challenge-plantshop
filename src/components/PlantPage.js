import React, { useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
const [plantData, setPlantData] = useState([])
const [searchPlants, setSearchPlants] = useState("")


  useEffect(() => {
  fetch('http://localhost:6001/plants')
  .then((r) => r.json())
  .then((plantData) => setPlantData(plantData))
  }, [])

  console.log(plantData)

  function handleSearch(e) {
    setSearchPlants(e.target.value)
  }

  let searchResults = plantData.filter((plant) => {
    return plant.name.toLowerCase().includes(searchPlants.toLowerCase())
  })

  function addNewPlant(newPlant) {
    setPlantData(searchResults => [...searchResults, newPlant])
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} searchResults={searchResults}/>
      <Search handleSearch={handleSearch}/>
      <PlantList plantData={plantData} searchResults={searchResults}/>
    </main>
  );
}

export default PlantPage;
