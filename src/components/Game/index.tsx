import styles from "./styles.module.scss";

type GameProps = {
  verifyLetter: () => void;
};

const Game = ({ verifyLetter }: GameProps) => {
  return (
    <div>
      <h1>game</h1>

      <button onClick={verifyLetter}>Finalizar jogo</button>
    </div>
  );
};

export default Game;
