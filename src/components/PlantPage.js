import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const response = await fetch("http://localhost:6001/plants");
      const data = await response.json();
      setPlants(data);
    } catch (error) {
      console.log("Error fetching plants:", error);
    }
  };

  return (
    <main>
      <NewPlantForm />
      <Search onChange={(query) => setSearchQuery(query)} />
      <PlantList plants={plants} searchQuery={searchQuery} />
    </main>
  );
}

export default PlantPage;
