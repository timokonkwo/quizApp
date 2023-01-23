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
	const [quiz, setQuiz] = useState(data)


	const handleAnswer = (event) => {
		// Grab the particular question
		const question = event.currentTarget.parentElement.parentElement.dataset.question;

		// Grab the particular answer if one of the options was clicked
		const answer = event.target.classList.contains("option") ? event.target.innerText : null

		console.log(question)

		console.log(answer)

		
		// const match = quiz.filter(item => item.question)
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
				handleAnswer={handleAnswer}
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
