import { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
	const { solution, attempt, gameOver } = useContext(AppContext);

	return (
		<div className="game-over">
			<h3>{gameOver.solved ? "Congrats! You Win!" : "Sorry, you lost..."}</h3>
			<h3>The Word Was: {solution}</h3>
			{gameOver.solved && (
				<h3>You solved it in {attempt.attemptNum} attempts!</h3>
			)}
			<h3>Refresh the page to play again!</h3>
		</div>
	);
};

export default GameOver;
