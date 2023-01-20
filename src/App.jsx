import { Routes, Route, Link } from "react-router-dom";
import Intro from "./components/Intro";
import "./App.css";
import Quiz from "./components/Quiz";

export default function App() {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Intro />}></Route>
				<Route path="/quiz" element={<Quiz />}></Route>
			</Routes>
		</main>
	);
}
