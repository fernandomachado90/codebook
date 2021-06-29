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

    <div style={{ textShadow: "1px 1px 1px black", color: "white", background: "white", outline: "3px dashed black" }}>
      <div style={{ background: "#e40303", height: "20px" }}>
        uma div padrão (altura customizada para 20px, ocupa uma linha inteira){" "}
      </div>
      <div style={{ background: "#ff8c00", display: "inline-block", height: "100px", width: "100px" }}>
        uma div inline-block (100x100, compartilha a linha){" "}
      </div>
      <div style={{ background: "#ffed00", display: "inline" }}>uma div inline (largura do conteúdo) </div>
      <span style={{ background: "#008026" }}>
        um span padrão (também tem a largura do conteúdo e continua na próxima linha){" "}
      </span>
      <span style={{ background: "#004dff", display: "inline-block", height: "120px", width: "90px" }}>
        um span inline-block (120x90, compartilha a linha)
      </span>
      <span style={{ background: "#750787", display: "block", height: "100px", width: "100px" }}>
        uma span block (100x100, mas sempre ocupa uma linha inteira)
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
  height: 100px; width: 100px;
}
.yellow {
  background: #ffed00;
  display: inline;
}
.green {
  background: #008026;
}
.blue {
  background: #004dff;
  display: inline-block;
  height: 120px; width: 90px;
}
.purple {
  background: #750787;
  display: block;
  height: 100px; width: 100px;
}
<div style="outline: 3px dashed black; color: white;">
  <div class="red">uma div padrão</div>
  <div class="orange">uma div inline-block</div>
  <div class="yellow">uma div inline</div>
  <span class="green">um span padrão</span>
  <span class="blue">um span inline-block</span>
  <span class="purple">um span block</span>
</div>`}
      </pre>
    </code>
  </>
)
