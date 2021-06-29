import React from "react"

export const title = "CSS"
export const body = (
  <>
    <h1>Contornos</h1>
    <p>
      Com a propriedade <b>outline</b> (e variantes), adicionamos contornos aos elementos. Diferente de bordas,
      contornos são decorações <b>externas</b> que não ocupam espaço.
    </p>

    <p>
      <b>outline-width:</b> _____px <i>(espessura em pixels)</i>
      <br />
      <b>outline-style:</b> _____ <i>(dotted | dashed | solid | double | groove | ridge | inset | outset | none)</i>
      <br />
      <b>outline-color:</b> _____ <i>(palavra reservada para cor | código hexadecimal | código RGB)</i>
    </p>

    <p>Com a notação reduzida, podemos customizar o contorno em uma única linha.</p>

    <p>
      <b>outline:</b> _____px &nbsp; _____ &nbsp; _____ <i>(espessura em pixels + estilo + cor)</i>
    </p>

    <code>
      <pre>
        {`.banner {
  background: seashell;
  border: 10px inset deeppink;
  outline: 10px outset deepskyblue;
}

<div class="banner"></div><br/><br/>
<div class="banner">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
<br/><br/>
<div class="banner"><h1>Lorem ipsum</h1></div>`}
      </pre>
    </code>
    <br />
    <div
      style={{
        background: "seashell",
        border: "10px inset deeppink",
        outline: "10px outset deepskyblue",
      }}
    />
    <br />
    <br />
    <div
      style={{
        background: "seashell",
        border: "10px inset deeppink",
        outline: "10px outset deepskyblue",
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <br />
    <br />
    <div
      style={{
        background: "seashell",
        border: "10px inset deeppink",
        outline: "10px outset deepskyblue",
      }}
    >
      <h1>Lorem ipsum</h1>
    </div>
  </>
)
