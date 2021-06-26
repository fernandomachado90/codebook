import React from "react"

export const title = "CSS"
export const body = (
  <>
    <h1>Fontes</h1>

    <h3>Família</h3>
    <p>
      <b>font-family: </b> "_____"; <i>(nome da fonte, entre aspas se houver espaços)</i>
    </p>

    <p>
      <span style={{ "font-family": "Arial" }}>Arial</span> |{" "}
      <span style={{ "font-family": "Comic Sans MS" }}>"Comic Sans MS"</span>|{" "}
      <span style={{ "font-family": "Courier" }}>Courier</span> |{" "}
      <span style={{ "font-family": "Tahoma" }}>Tahoma</span> |{" "}
      <span style={{ "font-family": "Times New Roman" }}>"Times New Roman"</span>
    </p>

    <h3>Tamanho</h3>
    <p>
      <b>font-size:</b> _____px; <i>(tamanho da fonte, em pixels)</i>
    </p>

    <p>
      <span style={{ "font-size": "8px" }}>8px</span> | <span style={{ "font-size": "16px" }}>16px</span> |{" "}
      <span style={{ "font-size": "24px" }}>24px</span> | <span style={{ "font-size": "32px" }}>32px</span>
    </p>

    <h3>Negrito</h3>
    <p>
      <b>font-weight:</b>_____; <i>(espessura da fonte, um valor entre 0 e 900)</i>
    </p>

    <p>
      <span style={{ "font-weight": "100" }}>100</span> | <span style={{ "font-weight": "300" }}>300</span> |{" "}
      <span style={{ "font-weight": "500" }}>500</span> | <span style={{ "font-weight": "700" }}>700</span> |{" "}
      <span style={{ "font-weight": "900" }}>900</span>
    </p>

    <h3>Itálico</h3>
    <p>
      <b>font-style:</b> _____; <i>(tipo de itálico, usar palavra reservada)</i>
    </p>

    <p>
      <span style={{ "font-style": "normal" }}>normal</span> | <span style={{ "font-style": "italic" }}>italic</span> |{" "}
      <span style={{ "font-style": "oblique" }}>oblique</span>
    </p>

    <h3>Sublinhado</h3>
    <p>
      <b>text-decoration:</b> _____; <i>(tipo de sublinhado, usar palavra reservada)</i>
    </p>

    <p>
      <span style={{ "text-decoration": "underline" }}>underline</span> |{" "}
      <span style={{ "text-decoration": "overline" }}>overline</span> |{" "}
      <span style={{ "text-decoration": "line-through" }}>line-through</span>
    </p>

    <code>
      <pre>{`h1 {
  font-family: "Arial Narrow";
  font-size: 32px;
  font-weight: 700;
  font-style: italic;
  text-decoration: line-through;
}

<h1>título perigosamente customizado</h1>`}</pre>
    </code>

    <p
      style={{
        "font-family": "Arial Narrow",
        "font-size": "32px",
        "font-weight": "700",
        "font-style": "italic",
        "text-decoration": "line-through",
      }}
    >
      título perigosamente customizado
    </p>
  </>
)
