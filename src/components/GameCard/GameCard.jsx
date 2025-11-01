import styles from "./GameCard.module.css";

function GameCard({ game }) {
  return (
    <div className={styles.gameCard}>
      <img
        src={game.thumbnail}
        alt={game.title}
        className={styles.gameCardImg}
      />
      <h3 className={styles.gameCardTitle}>{game.title}</h3>
      <p className={styles.gameCardGenre}>{game.genre}</p>
      <p className={styles.gameCardRelease}>Release: {game.release_date}</p>
    </div>
  );
}

export default GameCard;
