import { useState } from "react"
import "./App.css"
import Intro from "./components/Intro"
import Question from "./components/Question"
import Quiz from "./components/Quiz"

export default function App(){
  const [page, setPage] = useState("intro")
  return <main>
    {/* <Intro /> */}
    <Quiz />
    </main>
}