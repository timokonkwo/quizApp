import { useEffect } from "react";
import { useState } from "react";
import Question from "./Question";
import Loader from "../../utils/Loader";

export default function Quiz(props) {

	function reload(){
		setTimeout(() => {
			props.setLoading(!props.loading);
		}, 3000)
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
			{questions ? <>{questions}</> : <> 
			<Loader />
			{reload()}
			</>}
			<button>Check answers</button>
		</div>
	);
}