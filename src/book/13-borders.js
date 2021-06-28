import React from "react"

export const title = "CSS"
export const body = (
  <>
    <h1>Bordas</h1>
    <p>
      Com a propriedade <b>border</b> (e suas variantes), podemos adicionar bordas <b>internas</b> aos elementos, isso
      é, bordas que se somam as larguras e alturas definidas nos elementos.
    </p>

    <p>
      <b>border-width:</b> _____px <i>(espessura em pixels)</i>
      <br />
      <b>border-style:</b> _____ <i>(dotted | dashed | solid | double | groove | ridge | inset | outset | none)</i>
      <br />
      <b>border-color:</b> _____ <i>(palavra reservada para cor | código hexadecimal | código RGB)</i>
      <br />
      <b>border-radius:</b> _____px <i>(curvatura em pixels | curvatura em porcentagem)</i>
      <br />
    </p>

    <p>Com a notação reduzida, podemos customizar a borda em uma única linha.</p>

    <p>
      <b>border:</b> _____px &nbsp; _____ &nbsp; _____ <i>(espessura em pixels + estilo + cor)</i>
    </p>

    <p>
      Adicionando o sufixo{" "}
      <b>
        -<i>lado</i>
      </b>{" "}
      ao fim da propriedade, customizamos apenas esse lado.
    </p>

    <p>
      <b>border-width-top:</b> _____px{" "}
      <i>
        (espessura em pixels da borda <b>superior</b>)
      </i>
      <br />
      <b>border-style-right:</b> _____{" "}
      <i>
        (palavra reservada que define o estilo da borda <b>direita</b>)
      </i>
      <br />
      <b>border-color-bottom:</b> _____{" "}
      <i>
        (cor da borda <b>inferior</b>)
      </i>
      <br />
      <b>border-left:</b> _____px &nbsp; _____ &nbsp; _____{" "}
      <i>
        (notação reduzida que define a borda <b>esquerda</b>)
      </i>
      <br />
    </p>

    <code>
      <pre>
        {`.circulo {
  border-width: 6px;
  border-style: double; 
  border-color: purple;
  border-radius: 50%;
  height: 75px;
  width: 75px;
}

.banner {
  border: 2px dashed orange;
  height: 50px;
  width: 100%;
}

<div class="circulo"></div>
<div class="banner"><h3>mensagem impactante</h3></div>`}
      </pre>
    </code>

    <div
      style={{
        "border-width": "6px",
        "border-style": "double",
        "border-color": "purple",
        "border-radius": "50%",
        height: "75px",
        width: "75px",
      }}
    ></div>
    <div
      style={{
        border: "2px dashed orange",
        height: "50px",
        width: "100%",
      }}
    >
      <h3>mensagem impactante</h3>
    </div>
  </>
)
