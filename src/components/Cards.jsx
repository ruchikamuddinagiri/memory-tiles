import { useState,useEffect } from "react";

function Cards({pokemonId, onClick}) {
  const [poke, setPoke] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      setPoke(data);
    };
    fetchData()
  }, [pokemonId]);

  return (
    <>
    <div className="border rounded-lg p-4 mx-auto shadow-md hover:shadow-lg transition duration-300" onClick={onClick}>
      <h1 className="text-3xl font-bold mb-4">{poke.name}</h1>
      {poke.sprites && poke.sprites.front_shiny ? (
          <img src={poke.sprites.front_shiny} alt={poke.name} className="w-40 h-40 mx-auto mb-4" />
        ) : (
          <div>No image available</div>
        )}    </div>
    </>
  );
}

export default Cards;
