import { useEffect } from "react";
import { useState } from "react";
import Question from "./Question";
import Loader from "../../utils/Loader";

export default function Quiz(props) {
	const [loading, setLoading] = useState(true);

	const questions = props.quiz.map((question) => 
		<Question
			question={question.question}
			correct_answer={question.correct_answer}
			incorrect_answers={question.incorrect_answers}
		/>
	);

	// console.log(questions)

	return (
		<div className="quiz grid">
			{questions}
			{/* <Loader /> */}
			<button>Check answers</button>
		</div>
	);
}
