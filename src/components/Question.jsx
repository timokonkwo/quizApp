import shuffle from "../../utils/shuffle";

export default function Question(props) {

	/**
	 * Randomize and render the options 
	 * Implement a click event on each option click
	 * Create a state to manage user selection
	 * User can only select one option per question
	 */

	function Option(props){
		return (
			<div className="option">
				{props.answer}
			</div>
		)
	}

	/**
	 * Combine the correct answer with the wrong ones into a single array
	 * Set a key prop to each option using the option answer as key
	 *  */ 

	const options = [props.correctAnswer, ...props.wrongAnswers]

	// Shuffle the answers so the correct one won't always be the first.
	const answers = shuffle(options)

	// Map over the answers to render each item into the Option component
	const answersRender = answers.map(item => <Option key={item} answer={item}/>)

	return (
		<div className="question grid">
			<div>
				<h3>{props.question}</h3>

				<div className="options">
					{
						answersRender
					}
				</div>
			</div>

			<hr />
		</div>
	);
}
