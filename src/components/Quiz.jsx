import { useEffect } from "react";
import { useState } from "react";
import Question from "./Question";

export default function Quiz() {

	const [quiz, setQuiz] = useState("");

	async function fetchQuiz(){
		const response = await fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple")

		const data = await response.json()
		
		return data

	}

	useEffect(() => async () => {
		
		const quiz = await fetchQuiz();
		const {results} = quiz
		setQuiz(results)
	})

	return (
		<div className="quiz grid">
			<Question />
            <Question />
			<Question />
			<Question />
			<Question />
			<Question />

			<button>Check answers</button>
		</div>
	);
}
