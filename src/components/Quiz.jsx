import { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import Question from "./Question";

export default function Quiz() {
	/**
	 * Implement back button
	 * Render the quiz data to the page
	 *
	 */

	const handleSelection = (question, answer) => {
		setQuiz((prevQuiz) =>
			prevQuiz.map((item) => {
				return item.question === question
					? { ...item, selected: answer }
					: item;
			})
		);
	};

	const handleResult = () => {
		setQuiz(questions => questions.map(questionItem => {
			return questionItem.selected === questionItem.correct_answer ? {...questionItem, marked:true} : questionItem
		}
		))
	}

	// Initialize state
	const [quiz, setQuiz] = useState(data);

	const handleOptionClick = (event) => {
		// Grab the particular question
		const question =
			event.currentTarget.parentElement.parentElement.dataset.question;

		// Grab the particular answer if one of the options was clicked
		const answer = event.target.classList.contains("option")
			? event.target.innerText
			: null;

		// Handle user option
		handleSelection(question, answer);

	};

	// Map over the data and return Question Components
	const questionItems = quiz.map((quizItem) => {
		return (
			<Question
				id={quizItem.question}
				key={quizItem.question}
				question={quizItem.question}
				correctAnswer={quizItem.correct_answer}
				wrongAnswers={quizItem.incorrect_answers}
				handleOptionClick={handleOptionClick}
				selected={quizItem.selected}
				marked={quizItem.marked}
			/>
		);
	});

	return (
		<div className="quiz grid">
			<Link to="/">back</Link>
			<h3>Quiz</h3>
			{questionItems}

			<button onClick={handleResult}>Check answers</button>
		</div>
	);
}
