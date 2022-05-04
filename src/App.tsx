import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import StartScreen from "./components/StartScreen";
import data from "./data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState<any>(data);

  const [choseWord, setChoseWord] = useState("");
  const [choseCategory, setChoseCategory] = useState("");
  const [letters, setChoseLetters] = useState<String[]>([]);

  const choseWordAndCategory = () => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word: string =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  const startGame = () => {
    const { word, category } = choseWordAndCategory();

    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLocaleLowerCase());

    setChoseWord(word);
    setChoseCategory(category);
    setChoseLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  const retryGame = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retryGame={retryGame} />}
    </div>
  );
}

export default App;
