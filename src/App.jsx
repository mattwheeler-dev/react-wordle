import { useEffect, useState, createContext } from "react";
import boardMatrix, { generateWordSet } from "./components/boardMatrix";
import Gameboard from "./components/Gameboard";
import GameOver from "./components/GameOver";
import Keyboard from "./components/Keyboard";
import Rules from "./components/Rules";
import logo from "./assets/logo.png";

export const AppContext = createContext();

const App = () => {
	// STATES
	const [wordSet, setWordSet] = useState(new Set());
	const [solution, setSolution] = useState("");
	const [board, setBoard] = useState(boardMatrix);
	const [attempt, setAttempt] = useState({ attemptNum: 0, position: 0 });
	const [disabledLetters, setDisabledLetters] = useState([]);
	const [gameOver, setGameOver] = useState({ gameOver: false, solved: false });

	// SET WORD BANK
	useEffect(() => {
		generateWordSet().then((words) => {
			setWordSet(words.wordSet);
			setSolution(words.solution);
			console.log(
				`Yes, this is here on purpose just in case you didn't feel like going through the whole game! Mystery Word: ${words.solution}`
			);
		});
	}, []);

	// HANDLE INPUT FUNCTIONS
	// HANDLE LETTERS
	const addLetter = (letter) => {
		if (attempt.position > 4) {
			return;
		}
		const newBoard = [...board];
		newBoard[attempt.attemptNum][attempt.position] = letter;
		setBoard(newBoard);
		setAttempt({ ...attempt, position: attempt.position + 1 });
	};

	// HANDLE ENTER
	const onEnter = () => {
		if (attempt.position !== 5) return;

		let currentWord = "";
		for (let i = 0; i < 5; i++) {
			currentWord += board[attempt.attemptNum][i];
		}

		if (wordSet.has(currentWord.toLowerCase())) {
			setAttempt({ attemptNum: attempt.attemptNum + 1, position: 0 });
		} else {
			alert("Word not in word bank, please try a different word");
		}

		if (currentWord == solution) {
			setGameOver({ gameOver: true, solved: true });
			return;
		}

		if (attempt.attemptNum == 5) {
			setGameOver({ gameOver: true, solved: false });
			return;
		}
	};

	// HANDLE DELETE
	const onDelete = () => {
		if (attempt.position == 0) {
			return;
		} else {
			const newBoard = [...board];
			newBoard[attempt.attemptNum][attempt.position - 1] = "";
			setBoard(newBoard);
			setAttempt({ ...attempt, position: attempt.position - 1 });
		}
	};

	return (
		<>
			<img src={logo} alt="logo of M and W" className="logo" />
			<h1>React Wordle</h1>
			<Rules />

			<AppContext.Provider
				value={{
					solution,
					board,
					setBoard,
					attempt,
					setAttempt,
					addLetter,
					onEnter,
					onDelete,
					disabledLetters,
					setDisabledLetters,
					gameOver,
					setGameOver,
				}}
			>
				<Gameboard />
				{gameOver.gameOver ? <GameOver /> : <Keyboard />}
			</AppContext.Provider>

			<footer></footer>
		</>
	);
};

export default App;
