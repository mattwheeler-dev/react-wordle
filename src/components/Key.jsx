import { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ letter, large, disabled }) => {
	const { addLetter, onEnter, onDelete } = useContext(AppContext);

	const handleKey = () => {
		if (letter == "ENTER") {
			onEnter();
		} else if (letter == "DELETE") {
			onDelete();
		} else {
			addLetter(letter);
		}
	};

	return (
		<div
			className={`key ${large ? "large" : disabled && "disabled"}`}
			onClick={handleKey}
		>
			{letter}
		</div>
	);
};

export default Key;
