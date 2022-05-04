import styles from "./styles.module.scss";

type StartSreenProps = {
  startGame: () => void;
};

const StartScreen = ({ startGame }: StartSreenProps) => {
  return (
    <div className={styles.container}>
      <h1>Bem vindos ao Secret Word</h1>
      <p>Para iniciar um novo jogo, clique no botão abaixo.</p>
      <button onClick={startGame}>Iniciar</button>
    </div>
  );
};

export default StartScreen;
