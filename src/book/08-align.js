import React from "react"

export const title = "CSS"
export const body = (
  <>
    <h1>Alinhamentos</h1>

    <p>
      Podemos definir um alinhamento horizontal para o texto contido em um elemento, como por exemplo, um parágrafo
      usando essa propriedade:
    </p>
    <p>
      <b>text-align: </b> _____; <i>(usar palavra reservada: left | center | right | justify)</i>
    </p>

    <code>
      <pre>{`.menu {
  text-align: left;
}
.destaque {
  text-align: center;
  font-weight: 900;
}
.rodape {
  text-align: right;
  font-size: 12px;
}
.texto {
  text-align: justify;
  font-style: italic;
}

<p class="destaque">MANCHETE</p>
<p class="menu">item a<br/>item b<br/>item c</p>
<p class="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
<p class="rodape">© 2021</p>`}</pre>
    </code>

    <p style={{ "text-align": "center", "font-weight": "900" }}>MANCHETE</p>
    <p style={{ "text-align": "left" }}>
      item a<br />
      item b<br />
      item c
    </p>
    <p style={{ "text-align": "justify", "font-style": "italic" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
    <p style={{ "text-align": "right", "font-size": "12px" }}>© 2021</p>
  </>
)
