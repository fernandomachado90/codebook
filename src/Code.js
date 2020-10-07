import React from "react"
import "./Code.css"

function Code({ html, css, js, className }) {
  return (
    <div className={`Code ${className}`}>
      <div
        className="codepen"
        data-height="100%"
        data-editable="true"
        data-theme-id="dark"
        data-default-tab="html,result"
        data-prefill='{"title":"Demo"}'
      >
        <pre data-lang="html">{html}</pre>
        <pre data-lang="css">{css}</pre>
        <pre data-lang="js">{js}</pre>
      </div>
    </div>
  )
}

export default Code
