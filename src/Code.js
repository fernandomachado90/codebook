import React from "react"
import "./Code.css"
import { placeholder } from "./code/placeholder"

function Code({ title, html, css, js, className }) {
  if (html === true) html = placeholder.html
  if (css === true) css = placeholder.css
  if (js === true) js = placeholder.js

  return (
    <div className={`Code ${className ? className : ""}`}>
      <div
        title="codepen"
        className="codepen"
        data-height="100%"
        data-editable="true"
        data-theme-id="1"
        data-border="none"
        data-default-tab="html,result"
        data-prefill={`{"title":"${title ? title : ""}"}`}
      >
        <pre data-lang="html">{html}</pre>
        <pre data-lang="css">{css}</pre>
        <pre data-lang="js">{js}</pre>
      </div>
    </div>
  )
}

export default Code
