import { useContext, useCallback, useEffect } from "react";
import { AppContext } from "../App";
import Key from "./Key";
import "../styles/Keyboard.css";

const Keyboard = () => {
	const { addLetter, onEnter, onDelete, disabledLetters } =
		useContext(AppContext);
	// KEY ARRAYS
	const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
	const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
	const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

	// HANDLE KEYBOARD INPUT
	const handleKeyboard = useCallback((e) => {
		if (e.key == "Enter") {
			onEnter();
		} else if (e.key == "Backspace") {
			onDelete();
		} else {
			keys1.forEach((letter) => {
				if (e.key.toUpperCase() == letter) {
					addLetter(letter);
				}
			});
			keys2.forEach((letter) => {
				if (e.key.toUpperCase() == letter) {
					addLetter(letter);
				}
			});
			keys3.forEach((letter) => {
				if (e.key.toUpperCase() == letter) {
					addLetter(letter);
				}
			});
		}
	});

	useEffect(() => {
		document.addEventListener("keydown", handleKeyboard);
		return () => {
			document.removeEventListener("keydown", handleKeyboard);
		};
	}, [handleKeyboard]);

	return (
		<section className="keyboard">
			<div className="keyboard-row">
				{keys1.map((letter, key) => {
					return (
						<Key
							letter={letter}
							key={key}
							disabled={disabledLetters.includes(letter)}
						/>
					);
				})}
			</div>

			<div className="keyboard-row">
				{keys2.map((letter, key) => {
					return (
						<Key
							letter={letter}
							key={key}
							disabled={disabledLetters.includes(letter)}
						/>
					);
				})}
			</div>

			<div className="keyboard-row">
				<Key letter="DELETE" large />
				{keys3.map((letter, key) => {
					return (
						<Key
							letter={letter}
							key={key}
							disabled={disabledLetters.includes(letter)}
						/>
					);
				})}
				<Key letter="ENTER" large />
			</div>
		</section>
	);
};

export default Keyboard;
