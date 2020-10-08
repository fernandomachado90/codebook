import React from "react"
import "./App.css"
import Book from "./Book"
import Code from "./Code"

const prefill = {
  html: true,
  css: `body {background-color: #F1B8FF};`,
  js: true,
}

function App() {
  return (
    <div className="App">
      <Book className="Box Single" />
      <Code title="" {...prefill} className="Box Double" />
    </div>
  )
}

export default App
