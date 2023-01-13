import { useEffect } from "react";
import { useState } from "react";
import Question from "./Question";
import Loader from "../../utils/Loader";

export default function Quiz() {
	const [quiz, setQuiz] = useState("");
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple")
			.then((response) => response.json())
			.then((data) => setQuiz(data.results))
			.catch(err => console.log("error"))
	}, []);

	const questions = quiz ? quiz.map(question => {
	<Question
	question={question.question}
	correct_answer={question.correct_answer}
	incorrect_answers = {question.incorrect_answers}
	/>
}
	) : console.log("not fetched")

	return (
		<div className="quiz grid">
			{questions}
			<Loader/>
			<button>Check answers</button>
		</div>
	);
}
