import React from "react"

export const title = "CSS"
export const body = (
  <>
    <h1>Fontes</h1>

    <p>Além de alterar a cor, podemos customizar nossos textos com diversas propriedades.</p>

    <h3>Tipo</h3>
    <p>
      <b>font-family: </b> _____; <i>(nomes das fontes, em ordem de preferência; entre aspas se há espaço)</i>
    </p>

    <p>
      <span style={{ fontFamily: "Arial" }}>Arial</span> |{" "}
      <span style={{ fontFamily: "Comic Sans MS" }}>"Comic Sans MS"</span> |{" "}
      <span style={{ fontFamily: "Courier" }}>Courier</span> | <span style={{ fontFamily: "Tahoma" }}>Tahoma</span> |{" "}
      <span style={{ fontFamily: "Times New Roman" }}>"Times New Roman"</span>
    </p>

    <h3>Tamanho</h3>
    <p>
      <b>font-size:</b> _____px; <i>(tamanho da fonte, em pixels)</i>
    </p>

    <p>
      <span style={{ fontSize: "8px" }}>8px</span> | <span style={{ fontSize: "16px" }}>16px</span> |{" "}
      <span style={{ fontSize: "24px" }}>24px</span> | <span style={{ fontSize: "32px" }}>32px</span>
    </p>

    <h3>Negrito</h3>
    <p>
      <b>font-weight:</b>_____; <i>(espessura da fonte, um valor entre 0 e 900)</i>
    </p>

    <p>
      <span style={{ fontWeight: "100" }}>100</span> | <span style={{ fontWeight: "300" }}>300</span> |{" "}
      <span style={{ fontWeight: "500" }}>500</span> | <span style={{ fontWeight: "700" }}>700</span> |{" "}
      <span style={{ fontWeight: "900" }}>900</span>
    </p>

    <h3>Itálico</h3>
    <p>
      <b>font-style:</b> _____; <i>(tipo de itálico, usar palavra reservada)</i>
    </p>

    <p>
      <span style={{ fontStyle: "normal" }}>normal</span> | <span style={{ fontStyle: "italic" }}>italic</span> |{" "}
      <span style={{ fontStyle: "oblique" }}>oblique</span>
    </p>

    <h3>Sublinhado</h3>
    <p>
      <b>text-decoration:</b> _____; <i>(tipo de sublinhado, usar palavra reservada)</i>
    </p>

    <p>
      <span style={{ textDecoration: "underline" }}>underline</span> |{" "}
      <span style={{ textDecoration: "overline" }}>overline</span> |{" "}
      <span style={{ textDecoration: "line-through" }}>line-through</span>
    </p>

    <code>
      <pre>{`.meu-titulo {
  font-family: "Arial Narrow";
  font-size: 20px;
  font-weight: 700;
  font-style: italic;
  text-decoration: line-through;
}
<p class=".meu-titulo">título perigosamente customizado</p>`}</pre>
    </code>

    <p
      style={{
        fontFamily: "Arial Narrow",
        fontSize: "20px",
        lineHeight: "10px",
        fontWeight: "700",
        fontStyle: "italic",
        textDecoration: "line-through",
      }}
    >
      título perigosamente customizado
    </p>
  </>
)
