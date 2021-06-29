import React from "react"
import "./Code.css"
import { placeholder } from "./code/placeholder"

function Code({ title = "", html, css, js, className }) {
  return (
    <div className={`Code ${className}`}>
      <div
        title="codepen"
        className="codepen"
        data-height="100%"
        data-editable="true"
        data-theme-id="1"
        data-border="none"
        data-default-tab="html,result"
        data-prefill={`{"title":"${title}"}`}
      >
        <pre data-lang="html">{html || placeholder.html}</pre>
        <pre data-lang="css">{css || placeholder.css}</pre>
        <pre data-lang="js">{js || placeholder.js}</pre>
      </div>
    </div>
  )
}

export default Code
