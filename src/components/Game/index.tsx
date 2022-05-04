import styles from "./styles.module.scss";

type GameProps = {
  verifyLetter: () => void;
};

const Game = ({ verifyLetter }: GameProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.points}>
        <span>Pontuação: 000</span>
      </p>

      <h1>Dica da palavra:</h1>

      <h2>Carro</h2>

      <div className={styles.wordContainer}>
        <span className={styles.letter}>A</span>
        <span className={styles.blankSquare}></span>
      </div>

      <div className={styles.letterContainer}>
        <p>Advinhe uma letra da palavra: </p>
        <form>
          <input type="text" name="letter" maxLength={1} required />

          <button type="submit">Jogar</button>
        </form>
      </div>

      <div className={styles.wrongLettersContainer}>
        <p>Letras já utilizadas: </p>
        <span>a,</span>
        <span>b</span>
      </div>
    </div>
  );
};

export default Game;
