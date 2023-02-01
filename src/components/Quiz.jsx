import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { localData } from "../data";
import Question from "./Question";
import Loader from "../../utils/Loader";

export default function Quiz() {
	/**
	 * Implement a single question per page
	 * Add next and previous button
	 * Check answers will only appear at the end of the questions
	 * Update UI
	 */

	// Initialize quiz state
	const [quiz, setQuiz] = useState(localData);

	// Initialize index to use in viewing single questions
	const [index, setIndex] = useState(0);

	// Initialialize end quiz state
	const [endQuiz, setEndQuiz] = useState(false);

	// Initialize score state
	const [score, setScore] = useState(0);

	// Initialize loading
	const [loading, setLoading] = useState(false); //default to true

	const [refreshQuiz, setRefreshQuiz] = useState(false);

	const fetchQuiz = async () => {
		try {
			const response = await fetch(
				"https://opentdb.com/api.php?amount=10"
			);
			const data = await response.json();

			// set the quiz object in the returned array
			const quiz = await data.results;

			// Update the quiz state with the fetched data
			// setQuiz(quiz);

			// Remove the loader on the screen
			setLoading(false);
		} catch (error) {
			console.log(error);
			setRefreshQuiz(!refreshQuiz);
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
			setRefreshQuiz(!refreshQuiz);
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

	const prevQuestion = () => {
		setIndex(prev => prev - 1)
	}

	const nextQuestion = () => {
		setIndex(prev => prev + 1)
	}


	const currentQuestion = quiz[index];

	return (
		<div className="quiz grid">
			{/* Render the loader if in loading state else render the components */}
			{loading ? (
				<Loader />
			) : (
				<>
					<h3>Quiz</h3>
					<Question
						id={currentQuestion.question}
						key={currentQuestion.question}
						question={currentQuestion.question}
						correctAnswer={currentQuestion.correct_answer}
						wrongAnswers={currentQuestion.incorrect_answers}
						handleOptionClick={handleOptionClick}
						selected={currentQuestion.selected}
						marked={currentQuestion.marked}
						endQuiz={endQuiz}
					/>
					<div className="grid answer__region">
						{/* Render quiz results */}
						{endQuiz && (
							<h1>
								Your score is {score}/{10}
							</h1>
						)}

						<div className="quiz__navigation grid">
							<button className="previous__question"
							disabled={index === 0}
							onClick={prevQuestion}
							>
								Previous
							</button>
							<button className="next__question"
							onClick={nextQuestion}
							>Next</button>
						</div>

						<button onClick={handleButtonClick}>
							{endQuiz ? "Play again" : "Check answers"}
						</button>

						{/* <Link className="back__btn" to="/">
							back
						</Link> */}
					</div>
				</>
			)}
		</div>
	);
}
