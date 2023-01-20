export default function Question(props) {

	/**
	 * Randomize and render the options 
	 * Implement a click event on each option click
	 * Create a state to manage user selection
	 * User can only select one option per question
	 */

	return (
		<div className="question grid">
			<div>
				<h3>{props.question}</h3>

				<div className="options">
				</div>
			</div>

			<hr />
		</div>
	);
}
