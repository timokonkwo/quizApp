import { useEffect } from "react";
import { useState } from "react";
import Question from "./Question";
import Loader from "../../utils/Loader";

export default function Quiz(props) {
	const [count, setCount] = useState(1);

	function reload() {
		setTimeout(() => {
			props.setLoading(!props.loading);
			setCount((prev) => prev + 1);
		}, 3000);
	}

	// try {
	const questions =
		props.quiz &&
		props.quiz.map((question) => (
			<Question
				id={question.question}
				key={question.question}
				question={question.question}
				correct_answer={question.correct_answer}
				incorrect_answers={question.incorrect_answers}
			/>
		));

	return (
		<div className="quiz grid">
			{questions ? (
				<>
					{questions}
					<button>Check answers</button>
				</>
			) : count >= 3 ? (
				<div className="error">
					<h3>Network Error</h3>
					<p>check your internet</p>
				</div>
			) : (
				<>
					<Loader />
					{reload()}
				</>
			)}
		</div>
	);
}
