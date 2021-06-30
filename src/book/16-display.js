import React from "react"

export const title = "CSS"
export const body = (
  <>
    <h1>Display</h1>

    <p>
      Do lado CSS das coisas, blocos (<b>&lt;div&gt;</b>) e trechos (<b>&lt;span&gt;</b>) podem ser compreendidos (e
      também ter suas apresentações padrão alteradas) através da propriedade <b>display</b>.
    </p>

    <p>
      <b>display:</b> _____; <i>(block | inline | inline-block | none)</i>
    </p>

    <ul>
      <li>
        <b>block</b> é um bloco que ocupa uma linha toda, mas pode ter <i>width</i> e <i>height</i> alteradas
      </li>
      <li>
        <b>inline</b> é um trecho de linha, que não pode ter <i>width</i> e <i>height</i> alteradas
      </li>
      <li>
        <b>inline-block</b> é um trecho de linha, mas que <u>pode</u> ter <i>width</i> e <i>height</i> alteradas
      </li>
      <li>
        <b>none</b> oculta o elemento da página
      </li>
    </ul>

    <div style={{ textShadow: "1px 1px 1px black", color: "white", outline: "3px dashed black" }}>
      <div style={{ background: "#e40303", height: "20px" }}>
        div block "padrão" (20 x <b>100%</b>, ocupa uma linha inteira){" "}
      </div>
      <div style={{ background: "#ff8c00", display: "inline-block", height: "80px", width: "130px" }}>
        div inline-block (80 x 130, compartilha linha){" "}
      </div>
      <div style={{ background: "#ffed00", display: "inline" }}>
        div inline (dimensões do conteúdo, compartilha linha){" "}
      </div>
      <span style={{ background: "#008026" }}>span inline "padrão" (dimensões do conteúdo, compartilha linha) </span>
      <span style={{ background: "#004dff", display: "inline-block", width: "130px" }}>
        span inline-block (<b>conteúdo</b> x 130, compartilha linha)
      </span>
      <span style={{ background: "#750787", display: "block", height: "100px", width: "100px" }}>
        span block (100 x 100, mesmo assim ocupa uma linha inteira)
      </span>
    </div>

    <code>
      <pre>
        {`.red {
  background: #e40303;
  height: 20px;
}
.orange {
  background: #ff8c00;
  display: inline-block;
  height: 80px;
  width: 130px;
}
.yellow {
  background: #ffed00;
  display: inline;
  /* width e height são inefetivos em div inline */
}
.green {
  background: #008026;
  /* width e height são inefetivos em span inline (padrão) */
}
.blue {
  background: #004dff;
  display: inline-block;
  width: 130px;
}
.purple {
  background: #750787;
  display: block;
  height: 100px;
  width: 100px;
}
<div style="outline: 3px dashed black; color: white;">
  <div class="red">div block "padrão"</div>
  <div class="orange">div inline-block</div>
  <div class="yellow">div inline</div>
  <span class="green">span inline "padrão"</span>
  <span class="blue">span inline-block</span>
  <span class="purple">span block</span>
</div>`}
      </pre>
    </code>
  </>
)
