import React, { useState } from "react";
import PlantCard from "./PlantCard";


function PlantList({plantData, searchResults}) {

  let plantList = searchResults.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        name={plant.name}
        image={plant.image}
        price={plant.price}
        />)
  })

  return (
    <ul className="cards">
      {plantList}
    </ul>
  );
}

export default PlantList;
