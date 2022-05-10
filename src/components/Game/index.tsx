import styles from "./styles.module.scss";

type GameProps = {
  verifyLetter: () => void;
  picketWord: string;
  pickedCategory: string;
  letters: string[];
  guessedLetters: string[];
  wrongLetters: string[];
  guesses: number;
  score: number;
};

const Game = ({
  verifyLetter,
  pickedCategory,
  guessedLetters,
  guesses,
  letters,
  picketWord,
  score,
  wrongLetters,
}: GameProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.points}>
        <span>Pontuação: {score}</span>
      </p>

      <h1>
        Dica da palavra: <h2>{pickedCategory}</h2>
      </h1>

      <p>Você ainda tem {guesses} tentativas</p>

      <div className={styles.wordContainer}>
        {letters.map((l, i) =>
          guessedLetters.includes(l) ? (
            <span key={i} className={styles.letter}>
              {l}
            </span>
          ) : (
            <span key={i} className={styles.blankSquare}></span>
          )
        )}
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
        {wrongLetters.map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </div>
    </div>
  );
};

export default Game;
