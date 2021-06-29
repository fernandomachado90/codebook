import React from "react"

export const title = "CSS"
export const body = (
  <>
    <h1>Dimensões</h1>

    <p>
      Elementos em bloco, como <b>&lt;div&gt;</b>, <b>&lt;img&gt;</b> e <b>&lt;table&gt;</b>, podem ter suas dimensões
      customizadas através das propriedades <b>height</b> (altura) e <b>width</b> (largura).{" "}
    </p>

    <p>
      <b>height:</b> _____px; <i>(tamanho em pixels | porcentagem da página)</i>
      <br />
      <b>width:</b> _____%; <i>(tamanho em pixels | porcentagem da página)</i>
    </p>

    <code>
      <pre>
        {`.quadrado {
  background: fuchsia;
  height: 90px;
  width: 90px;
}
.horizontal {
  background: yellow;
  height: 90px;
  width: 100%;
}
.vertical {
  background: aqua;
  height: 180px;
  width: 90px;
}

<div class="quadrado">//</div>
<div class="horizontal"></div>
<div class="vertical"></div>`}
      </pre>
    </code>
    <div style={{ background: "fuchsia", height: "90px", width: "90px" }}>{"//"}</div>
    <div style={{ background: "yellow", height: "90px", width: "100%" }}></div>
    <div style={{ background: "aqua", height: "180px", width: "90px" }}></div>
  </>
)
