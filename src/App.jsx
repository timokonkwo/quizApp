import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import Question from "./components/Question";
import Loader from "../utils/Loader";
import Quiz from "./components/Quiz";
import { useEffect } from "react";

export default function App() {
	const [page, setPage] = useState("intro");
	const [quiz, setQuiz] = useState(null);
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		fetch("https://opentdb.com/api.php?amount=10&type=multiple")
			.then((response) => response.json())
			.then((data) => setQuiz(data.results))
			.catch((err) => console.log("error"));
	}, [loading]);

	function startQuiz() {
		setPage("quiz");
	}

	return (
		<main>
			{page === "intro" ? (
				<Intro startQuiz={startQuiz} />
			) : (
				<Quiz quiz={quiz} loading={loading} setLoading={setLoading} />
			)}
		</main>
	);
}
