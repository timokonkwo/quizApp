import { useState } from "react"
import "./App.css"
import Intro from "./components/Intro"

export default function App(){
  const [page, setPage] = useState("intro")
  return (
    <Intro />
  )
}