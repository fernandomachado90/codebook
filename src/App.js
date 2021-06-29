import React from "react"
import "./App.css"
import Book from "./Book"
import Code from "./Code"

function App() {
  return (
    <div className="App">
      <Book className="Box Single" />
      <Code className="Box Double" />
    </div>
  )
}

export default App
