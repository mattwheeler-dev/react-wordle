import Box from "./Box";
import "../styles/Gameboard.css";

const Gameboard = () => {
	return (
		<section className="gameboard">
			<div className="row">
				<Box position={0} row={0} />
				<Box position={1} row={0} />
				<Box position={2} row={0} />
				<Box position={3} row={0} />
				<Box position={4} row={0} />
			</div>

			<div className="row">
				<Box position={0} row={1} />
				<Box position={1} row={1} />
				<Box position={2} row={1} />
				<Box position={3} row={1} />
				<Box position={4} row={1} />
			</div>
			<div className="row">
				<Box position={0} row={2} />
				<Box position={1} row={2} />
				<Box position={2} row={2} />
				<Box position={3} row={2} />
				<Box position={4} row={2} />
			</div>

			<div className="row">
				<Box position={0} row={3} />
				<Box position={1} row={3} />
				<Box position={2} row={3} />
				<Box position={3} row={3} />
				<Box position={4} row={3} />
			</div>

			<div className="row">
				<Box position={0} row={4} />
				<Box position={1} row={4} />
				<Box position={2} row={4} />
				<Box position={3} row={4} />
				<Box position={4} row={4} />
			</div>

			<div className="row">
				<Box position={0} row={5} />
				<Box position={1} row={5} />
				<Box position={2} row={5} />
				<Box position={3} row={5} />
				<Box position={4} row={5} />
			</div>
		</section>
	);
};

export default Gameboard;
