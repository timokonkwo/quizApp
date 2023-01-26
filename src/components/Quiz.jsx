import { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import Question from "./Question";

export default function Quiz() {
	/**
	 * Implement back button
	 * Render the quiz data to the page
	 * Implement score state
	 * Implement play again button
	 */

	const increaseScore = () => {
		setScore((formerScore) => formerScore + 1);
	};

	const handleButtonClick = () => {
		if (endQuiz){
			setScore(0)
			setEndQuiz(false)
			setQuiz(data)
			return
		}
		setEndQuiz(true);
		setQuiz((questions) =>
			questions.map((questionItem) => {
				if (questionItem.selected === questionItem.correct_answer) {
					increaseScore();
					return { ...questionItem, marked: "correct" };
				} else {
					return { ...questionItem, marked: "wrong" };
				}
			})
		);
	};

	const handleSelection = (question, answer) => {
		setQuiz((prevQuiz) =>
			prevQuiz.map((item) => {
				return item.question === question
					? { ...item, selected: answer }
					: item;
			})
		);
	};

	const handleOptionClick = (event) => {
		if (endQuiz) {
			return;
		}

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

	// Initialize quiz state
	const [quiz, setQuiz] = useState(data);

	// Initialialize end quiz state
	const [endQuiz, setEndQuiz] = useState(false);

	// Initialize score state
	const [score, setScore] = useState(0);

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
				endQuiz={endQuiz}
			/>
		);
	});

	return (
		<div className="quiz grid">
			<Link to="/">back</Link>
			<h3>Quiz</h3>
			{questionItems}

			<div className="grid answer__region">

				{/* Render quiz results */}
				{endQuiz && <h1>Your score is {score}/{quiz.length}</h1>}
				<button onClick={handleButtonClick}>
				{endQuiz ? "Play again" : "Check answers"}
			</button>
			</div>

			
		</div>
	);
}
