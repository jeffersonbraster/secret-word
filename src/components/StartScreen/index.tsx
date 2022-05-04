import styles from "./styles.module.scss";

const StartScreen = () => {
  return (
    <div className={styles.container}>
      <h1>Bem vindos ao Secret Word</h1>
      <p>Para iniciar um novo jogo, clique no botão abaixo.</p>
      <button>Iniciar</button>
    </div>
  );
};

export default StartScreen;
