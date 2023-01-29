import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { localData } from "../data";
import Question from "./Question";
import Loader from "../../utils/Loader";

export default function Quiz() {
	/**
	 * Implement back button
	 * Render the quiz data to the page
	 * Implement score state
	 * Implement play again button
	 */

	// Initialize quiz state
	const [quiz, setQuiz] = useState(localData);

	// Initialialize end quiz state
	const [endQuiz, setEndQuiz] = useState(false);

	// Initialize score state
	const [score, setScore] = useState(0);

	// Initialize loading
	const [loading, setLoading] = useState(true); //default to true

	const [refreshQuiz, setRefreshQuiz] = useState(true);

	const fetchQuiz = async () => {
		try {
			const response = await fetch("https://opentdb.com/api.php?amount=10");
		console.log(response);
		const data = await response.json()

		// set the quiz object in the returned array
		const quiz = await data.results;

		// Update the quiz state with the fetched data
		setQuiz(quiz);

		// Remove the loader on the screen
		setLoading(false);

		} catch(error){
			console.log(error)
		}
		
	};

	useEffect(() => {
		fetchQuiz();
	}, [refreshQuiz]);

	// Function to incremenet the score
	const increaseScore = () => {
		setScore((formerScore) => formerScore + 1);
	};

	// Function that handles all clicks on the button down the page
	const handleButtonClick = () => {
		if (endQuiz) {
			setScore(0);
			setEndQuiz(false);
			setLoading(true);
			setRefreshQuiz(true);
			return;
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
			{/* Render the loader if in loading state else render the components */}
			{loading ? (
				<Loader />
			) : (
				<>
					<h3>Quiz</h3>
					{questionItems}
					<div className="grid answer__region">
						{/* Render quiz results */}
						{endQuiz && (
							<h1>
								Your score is {score}/{quiz.length}
							</h1>
						)}
						<button onClick={handleButtonClick}>
							{endQuiz ? "Play again" : "Check answers"}
						</button>

						<Link className="back__btn" to="/">
							back
						</Link>
					</div>
				</>
			)}
		</div>
	);
}
