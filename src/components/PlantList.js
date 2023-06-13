import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchQuery }) {
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ul className="cards">
      {filteredPlants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;