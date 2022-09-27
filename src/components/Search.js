import React, {useState} from "react";
import PlantCard from "./PlantCard";

function Search({handleSearch}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;


 // function handleSearch() {
    
  // }

  // const [search, setSearch] = setState("")
  // function handleSearch(newSearch){
  //   setSearch(newSearch)
  //   if (plantData.includes(setSearch))))
  // }

  // const filteredPlants = plantData.filter((plant) => {
  //   if (plantData.includes((e) => e.target.event)){}
  // })