import { useState } from "react";
import { useEffect } from "react";
import shuffle from "../../utils/shuffle";

export default function Question(props) {
	const [options, setOptions] = useState(null)

	/**
	 * Randomize and render the options 
	 * Implement a click event on each option click
	 * Create a state to manage user selection
	 * User can only select one option per question
	 */

	useEffect(() => {
		const answers = shuffle([props.correctAnswer, ...props.wrongAnswers])
		setOptions(answers);
	}, [])

	function Option(props){
		return (
			<div className={props.select && props.select === props.answer ? "option selected": "option"}>
				{props.answer}
			</div>
		)
	}

	/**
	 * Combine the correct answer with the wrong ones into a single array
	 * Set a key prop to each option using the option answer as key
	 *  */ 

	// Shuffle the answers so the correct one won't always be the first.

	// const answers = shuffle(options)

	// Map over the answers to render each item into the Option component
	const answersRender = options && options.map(item => <Option key={item} answer={item} select={props.select}/>)

	return (
		<div data-question={props.question} className="question grid">
			<div>
				<h3>{props.question}</h3>

				<div onClick={props.handleOptionClick} className="options">
					{
						answersRender
					}
				</div>
			</div>

			<hr />
		</div>
	);
}
