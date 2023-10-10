import { useState, useEffect } from "react";
import Cards from "./Cards";

function shuffleArray(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ];
  }
  return shuffledArray;
}

function ContainerCards() {
  const [pokemonIds, setPokemonIds] = useState([
    134, 135, 136, 196, 197, 470, 471, 700, 133,
  ]);
  const [score, setScore] = useState(0);
  const [prevCard, setPrevCard] = useState(null);
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    setPokemonIds((prevIds) => shuffleArray(prevIds));
  }, []);

  const handleCardClick = (id) => {
    if (prevCard !== id) {
      setPrevCard(id);
      setScore((prevScore) => prevScore + 1);
    } else {
      if (score > highestScore) {
        setHighestScore(score);
      }
      setScore(0);
      setPrevCard(null);
    }
    setPokemonIds((prevIds) => shuffleArray(prevIds));
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex justify-center mt-4 mb-4">
        <h2 className="text-2xl font-bold">Score: {score}</h2>
      </div>
      {prevCard !== null && score === 0 && (
        <div className="text-red-500 font-bold">Perdiste</div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
        {pokemonIds.map((id) => (
          <Cards key={id} pokemonId={id} onClick={() => handleCardClick(id)} />
        ))}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">Puntaje más alto: {highestScore}</h3>
      </div>
    </div>
  );
}

export default ContainerCards;
