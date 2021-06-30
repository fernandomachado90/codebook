import React from "react"

export const title = "CSS"
export const body = (
  <>
    <h1>Espaçamento</h1>

    <p>
      Ao lado de largura, altura e bordas, as dimensões resultantes de elementos são definidas pelas propriedades{" "}
      <b>margin</b> (margem, a distância externa a borda) e <b>padding</b> (um preenchimento transparente interno a
      borda).
    </p>

    <p>
      <b>margin:</b> _____px <i>(distância externa em pixels)</i>
      <br />
      <b>padding:</b> _____px <i>(preenchimento interno em pixels)</i>
    </p>

    <p>
      Assim como bordas e contornos, o sufixo{" "}
      <b>
        -<i>lado</i>
      </b>{" "}
      pode ser adicionado para definir margens e preenchimentos específicos para cada lado.
    </p>

    <p>
      <b>margin-top:</b> _____px{" "}
      <i>
        (margem <b>superior</b>)
      </i>
      <br />
      <b>margin-bottom:</b> _____px{" "}
      <i>
        (margem <b>inferior</b>)
      </i>
      <br />
      <b>padding-left:</b> _____px{" "}
      <i>
        (preenchimento à <b>esquerda</b>)
      </i>
      <br />
      <b>padding-right:</b> _____px{" "}
      <i>
        (preenchimento à <b>direita</b>)
      </i>
      <br />
    </p>

    <p>Além disso, com a notação reduzida, podemos definir múltiplos lados de uma vez.</p>

    <p>
      <b>margin:</b> _____px &nbsp; _____px &nbsp; _____px &nbsp; _____px <i>(margem cima, direita, baixo, esquerda)</i>
      <br />
      <b>padding:</b> _____px &nbsp; _____px &nbsp; _____px <i>(preenchimento cima, direita/esquerda, baixo)</i>
      <br />
      <b>margin:</b> _____px &nbsp; _____px <i>(margem cima/baixo, direita/esquerda)</i>
      <br />
    </p>

    <p>
      Para entender como margem, borda e preenchimento são usados para calcular as dimensões de elementos, as
      ilustrações de <b>box model</b> abaixo podem ajudar.
    </p>

    {renderBoxModel("30px", "20px", "70px")}
    <hr />
    {renderBoxModel("90px", "30px", "0px")}
    <hr />
    {renderBoxModel("0px", "40px", "40px")}
    <hr />
    {renderBoxModel("0px", "50px", "0px")}
    <hr />
    {renderBoxModel("40px", "0px", "60px")}
  </>
)

function renderBoxModel(margin, border, padding) {
  const spacingColor = "#FFF430"
  const borderColor = "#9C59D1"
  return (
    <>
      <code>
        <pre>
          {`.box {
  margin: ${margin};
  padding: ${padding};
  border: ${border} solid ${borderColor};
}
<div class="box">conteúdo</div>`}
        </pre>
      </code>
      <div style={{ position: "relative", background: spacingColor, padding: margin }}>
        <span style={{ position: "absolute", top: "1px", left: "1px" }}>margin ({margin})</span>
        <div style={{ position: "relative", background: borderColor, padding: border }}>
          <span style={{ position: "absolute", top: "1px", left: "1px" }}>border ({border})</span>
          <div style={{ position: "relative", background: spacingColor, padding: padding }}>
            <span style={{ position: "absolute", top: "1px", left: "1px" }}>padding ({padding})</span>
            <div style={{ position: "relative", background: "white", padding: "10px" }}>
              <span style={{ position: "absolute", top: "1px", left: "1px" }}>conteúdo</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
