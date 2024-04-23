import WordBank from "./WordBank.txt";

const boardMatrix = [
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
];

export const generateWordSet = async () => {
	let solution;
	let wordSet;
	await fetch(WordBank)
		.then((response) => response.text())
		.then((result) => {
			const wordList = result.split("\n");
			solution =
				wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
			wordSet = new Set(wordList);
		});

	return { wordSet, solution };
};

export default boardMatrix;
