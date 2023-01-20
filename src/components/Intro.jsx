import { Link } from "react-router-dom";
export default function () {
	return (
		<main className="intro">
			<div className="grid">
				<h1>QuizzNow</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
					quidem quos fugiat, eaque delectus.
				</p>

				<Link to="/quiz">
					<button className="start__quiz">Start quiz</button>
				</Link>
			</div>
		</main>
	);
}
