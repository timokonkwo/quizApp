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

	// Initialize state
	const [quiz, setQuiz] = useState(data);
	const [select, setSelect] = useState('');

	const handleOptionClick = (event) => {
		// Grab the particular question
		const question = event.currentTarget.parentElement.parentElement.dataset.question;

		// Grab the particular answer if one of the options was clicked
		const answer = event.target.classList.contains("option") ? event.target.innerText : null

		setSelect(answer);

		// Remove the selected marker from all the items in that options list and add it to only the current selected.

		// Check the particular question and check for answer
		const match = quiz.filter(item => item.question === question)
		// console.log(match)
	}

	// Map over the data and return Question Components
	const questionItems = data.map((quizItem) => {

		return (
			<Question
				id={quizItem.question}
				key={quizItem.question}
				question={quizItem.question}
				correctAnswer={quizItem.correct_answer}
				wrongAnswers={quizItem.incorrect_answers}
				handleOptionClick={handleOptionClick}
				select={select}
			/>
		);
	});

	return (
		<div className="quiz grid">
			<Link to="/">back</Link>
			<h3>Quiz</h3>
			{questionItems}
		</div>
	);
}
