import { useEffect, useState } from "react";
import GameCard from "../GameCard/GameCard.jsx";
import styles from "./GameList.module.css";

function GameList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch(
          "https://free-to-play-games-database.p.rapidapi.com/api/games",
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": import.meta.env.VITE_API_KEY,
              "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            },
          }
        );

        const data = await res.json();
        setGames(data);
      } catch (error) {
        console.error("Помилка завантаження:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <p>Завантаження...</p>;

  return (
    <div className={styles.gameList}>
      {games.slice().map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameList;
