import React from "react"
import "./App.css"
import Book from "./Book"
import Code from "./Code"

const prefill = {
  html: `
<p>
hello, world!
</p>
`,
  css: `body {background-color: #F1B8FF};`,
  js: `console.log('press F12 to see this');`,
}

function App() {
  return (
    <div className="App">
      <Book className="Box Left" />
      <Code {...prefill} className="Box Right" />
    </div>
  )
}

export default App
