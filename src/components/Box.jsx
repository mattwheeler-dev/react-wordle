import { useContext, useEffect } from "react";
import { AppContext } from "../App";

const Box = ({ position, row }) => {
	const { solution, board, attempt, setDisabledLetters } =
		useContext(AppContext);
	const letter = board[row][position];
	// LETTER STATUS VARIABLES (GREEN, YELLOW, DARKENED)
	const correct = solution[position] == letter;
	const almost = !correct && letter !== "" && solution.includes(letter);
	const letterStatus =
		attempt.attemptNum > row &&
		(correct ? "correct" : almost ? "almost" : "dark");

	useEffect(() => {
		if (letter !== "" && !correct && !almost) {
			setDisabledLetters((prev) => [...prev, letter]);
		}
	}, [attempt.attemptNum]);

	return <div className={`box ${letterStatus}`}>{letter}</div>;
};

export default Box;
