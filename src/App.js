import React from "react"
import "./App.css"
import Book from "./Book"
import Code from "./Code"

function App() {
  return (
    <div className="App">
      <Book className="Box Left" />
      <Code className="Box Right" />
    </div>
  )
}

export default App
