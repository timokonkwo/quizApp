import { useState } from "react";
import { useEffect } from "react";
import shuffle from "../../utils/shuffle";
import Option from "./Option";

export default function Question(props) {
	/**
	 * Randomize and render the options
	 * User can only select one option per question
	 */

	const [options, setOptions] = useState(null);

	// Shuffle the options only once on first render
	useEffect(() => {
		const answers = shuffle([props.correctAnswer, ...props.wrongAnswers]);
		setOptions(answers);
	}, []);

	// Map over the answers to render each item into the Option component
	const answersRender =
		options &&
		options.map((item) => (
			<Option 
				key={item} 
				answer={item} 
				selected={props.selected} 
				correctAnswer={props.correctAnswer} 
				marked={props.marked}
				endQuiz={props.endQuiz}
			/>
		));

	return (
		<div data-question={props.question} className="question grid">
			<div>
				<h3 dangerouslySetInnerHTML={{__html: props.question}} />

				<div onClick={props.handleOptionClick} className="options">
					{answersRender}
				</div>
			</div>

			<hr />
		</div>
	);
}
