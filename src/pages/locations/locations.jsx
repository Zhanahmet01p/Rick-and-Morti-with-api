import React, { useEffect, useState } from "react";
import axios from "axios";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then((response) => {
        setLocations(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError("Ошибка при загрузке данных.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center p-10">Загрузка...</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Locations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location) => (
          <div
            key={location.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-blue-500">
              {location.name}
            </h2>
            <p className="text-gray-700">Type: {location.type}</p>
            <p className="text-gray-700">Dimension: {location.dimension}</p>
            <p className="text-gray-700">
              Residents: {location.residents.length}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Locations;
