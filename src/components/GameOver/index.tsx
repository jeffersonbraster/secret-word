import styles from "./styles.module.scss";

type GameOverProps = {
  retryGame: () => void;
};

const GameOver = ({ retryGame }: GameOverProps) => {
  return (
    <div>
      <h1>gameover</h1>
      <button onClick={retryGame}>Voltar ao inicio</button>
    </div>
  );
};

export default GameOver;
