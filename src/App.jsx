import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import Question from "./components/Question";
import Loader from "../utils/Loader"
import Quiz from "./components/Quiz";
import { useEffect } from "react";

export default function App() {
	const [page, setPage] = useState("intro");

  function startQuiz(){
    setPage("quiz")
  }

  // useEffect(() => {

  // }, [page])

	return (
		<main>
			{
        page === "intro" ?
          <Intro startQuiz={startQuiz}/>
       : <Quiz/>
      }
		</main>
	);
}
