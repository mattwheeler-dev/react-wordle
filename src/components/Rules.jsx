import { useState } from "react";

const Rules = () => {
	const [active, setActive] = useState(false);
	const toggleRules = () => {
		setActive(!active);
	};

	return (
		<section className="rules">
			<h3 onClick={toggleRules}>Rules</h3>
			{active && (
				<div id="close" onClick={toggleRules}>
					X
				</div>
			)}
			{active && (
				<ul>
					<li>Guess what the random 5 letter word could be!</li>
					<li>
						A box turning green means the letter is in the correct placement.
					</li>
					<li>
						A box turns yellow to show that the letter is in the mystery word,
						but it
						{`'`}s placement is wrong.
					</li>
					<li>
						Letters not in the mystery word will be darkened on the game board
						and the keyboard to help avoid using them multiple times.
					</li>
					<li>
						Colorblind? No worries! The font size in the boxes will change with
						the colors. Darkened boxes will have the smallest font, yellow boxes
						will be a medium size, and green boxes will clearly be larger!
					</li>
				</ul>
			)}
		</section>
	);
};

export default Rules;
