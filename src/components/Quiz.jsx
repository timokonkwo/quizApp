import { useEffect } from "react";
import { useState } from "react";
import Question from "./Question";
import Loader from "../../utils/Loader";
// import {nanoid} from "nanoid"

export default function Quiz(props) {
	const [loading, setLoading] = useState(true);

	try {
		const questions = props.quiz.map((question) => (
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
				{questions}
				<button>Check answers</button>
			</div>
		);
	} catch (err) {
		console.log("Network issue");
		return (
			<Loader />
		)
	}
}
