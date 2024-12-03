import React, { useEffect, useState } from "react";
import axios from "axios";

function Character() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError("Ошибка загрузки данных");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center text-lg font-bold mt-10">Загрузка...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 font-bold mt-10">{error}</div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Rick and Morty Characters
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <div
            key={character.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{character.name}</h2>
              <p className="text-gray-600">{character.species}</p>
              <p
                className={`mt-2 text-sm ${
                  character.status === "Alive"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {character.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Character;
