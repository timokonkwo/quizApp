export default function (props) {
	return (
		<main className="intro">
			<div className="grid">
				<h1>QuizzNow</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
					quidem quos fugiat, eaque delectus.
				</p>

				<button className="start__quiz" onClick={props.startQuiz}>Start quiz</button>
			</div>
		</main>
	);
}
