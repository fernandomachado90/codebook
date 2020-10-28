import React from "react"
import "./Code.css"

const DEFAULT = {
  html: `<body>

</body>
`,
  css: `body {
  
};
`,
  js: `// Pressione F12 para acessar o Console.
`,
}

function Code({ title, html, css, js, className }) {
  if (html === true) html = DEFAULT.html
  if (css === true) css = DEFAULT.css
  if (js === true) js = DEFAULT.js

  return (
    <div className={`Code ${className ? className : ""}`}>
      <div
        title="codepen"
        className="codepen"
        data-height="100%"
        data-editable="true"
        data-theme-id="dark"
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
