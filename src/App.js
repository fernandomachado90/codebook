import React from "react"
import "./App.css"
import Book from "./Book"

function App() {
  return (
    <div className="App">
      <Book className="Box Left" />
      <div className="Box Right">
        <div
          title="codepen"
          className="codepen"
          data-height="100%"
          data-editable="true"
          data-theme-id="dark"
          data-default-tab="html,result"
          data-prefill='{"title":"Demo"}'
        >
          <pre data-lang="html">{"test"}</pre>
          <pre data-lang="css">{"body {background-color: #F1B8FF;}"}</pre>
          <pre data-lang="js">{"console.log('press F12 to see this')"}</pre>
        </div>
      </div>
    </div>
  )
}

export default App
