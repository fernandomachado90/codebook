import React from "react"

const boxStyle = {
  display: "inline-block",
  outline: "5px dashed black",
  fontSize: "50px",
  lineHeight: "65px",
  margin: "10px",
  height: "70px",
  width: "70px",
}

export const title = "CSS"
export const body = (
  <>
    <h1>Posicionamento</h1>

    <p>
      A propridade <b>position</b> permite especificar o método de posicionamento que desejamos usar: <b>static</b>{" "}
      (comportamento padrão), <b>relative</b>, <b>absolute</b> ou <b>fixed</b>.
    </p>

    <p>
      Ao usar métodos diferentes do padrão, é preciso utilizar as propriedades que definem coordenadas: <b>top</b>{" "}
      (cima), <b>right</b> (direita), <b>bottom</b> (baixo) e <b>left</b> (esquerda).
    </p>

    <h3>Static</h3>
    <p>
      Até agora, vimos que elementos são posicionado, em blocos (de cima-para-baixo) e em trechos (ocupando as linhas da
      esquerda-para-direita). Esse método de posicionamento é o <b>static</b> (padrão). Coordenadas não são
      consideradas.
    </p>

    <code>
      <pre>{`.box {
  position: static;
  display: inline-block;
  margin: 10px;
  width: 70px;
  height: 70px;
  outline: 5px solid black;
}

<div class="box">🐈</div>
<div class="box">🐈</div>
<div class="box">🐈</div>
<div class="box">🐈</div>
<div class="box">🐈</div>
`}</pre>
    </code>

    <p>
      <div style={boxStyle}>🐈</div>
      <div style={boxStyle}>🐈</div>
      <div style={boxStyle}>🐈</div>
      <div style={boxStyle}>🐈</div>
      <div style={boxStyle}>🐈</div>
    </p>

    <hr />
    <h3>Relative</h3>
    <p>
      Com o posicionamento <b>relative</b>, podemos ajustar a posição do elemento em relação a sua posição original, de
      acordo com os pixels definidos em <b>top</b>, <b>right</b>, <b>bottom</b> e <b>left</b>. Os elementos vizinhos não
      são afetados pela mudança.
    </p>

    <code>
      <pre>{`.rat {
  position: relative;
  top: 10px;
  left: 10px;
}
.mouse {
  position: relative;
  bottom: 20px;
  right: 5px;
}

<div class="box">🐈</div>
<div class="box rat">🐀</div>
<div class="box">🐈</div>
<div class="box mouse">🐁</div>
<div class="box">🐈</div>`}</pre>
    </code>

    <p>
      <div style={boxStyle}>🐈</div>
      <div
        style={{
          ...boxStyle,
          position: "relative",
          top: "10px",
          left: "10px",
        }}
      >
        🐀
      </div>
      <div style={boxStyle}>🐈</div>
      <div
        style={{
          ...boxStyle,
          position: "relative",
          bottom: "20px",
          right: "5px",
        }}
      >
        🐁
      </div>
      <div style={boxStyle}>🐈</div>
    </p>

    <hr />
    <h3>Absolute</h3>
    <p>
      No posicionamento <b>absolute</b>, podemos ajustar a posição do elemento com relação ao seu "elemento pai
      posicionado" (um elemento com posicionamento não-<b>static</b>). Caso esse elemento não exista para definir o
      referencial, as dimensões da própria tela são consideradas. Os elementos vizinhos não são afetados pela mudança.
    </p>

    <code>
      <pre>{`.container {
  position: relative;
  background: darkviolet;
  padding: 10px;
}
.rabbit {
  position: absolute;
  top: -80px;
  right: 0px;
}

<div class="container">
  <div class="box">🐈</div>
  <div class="box rabbit">🐇</div>
  <div class="box">🐈</div>
</div>`}</pre>
    </code>

    <p
      style={{
        padding: "10px",
        position: "relative",
        background: "darkviolet",
      }}
    >
      <div style={boxStyle}>🐈</div>
      <div
        style={{
          ...boxStyle,
          position: "absolute",
          top: "-80px",
          right: "0px",
        }}
      >
        🐇
      </div>
      <div style={boxStyle}>🐈</div>
    </p>

    <hr />
    <h3>Fixed</h3>
    <p>
      O posicionamento <b>fixed</b> permite ajustar a posição de um elemento com relação as dimensões da própria tela.
      Os elementos vizinhos não são afetados pela mudança.
    </p>

    <code>
      <pre>{`.monkey {
  position: fixed;
  bottom: 0px;
  left: 400px;
  outline: none; //(o macaco escapou da gaiola)
}

<div class="box">🐈</div>
<div class="box monkey">🐒</div>
<div class="box">🐈</div>`}</pre>
    </code>

    <p>
      <div style={boxStyle}>🐈</div>
      <div
        style={{
          ...boxStyle,
          outline: "none",
          position: "fixed",
          bottom: "0px",
          left: "400px",
        }}
      >
        🐒
      </div>
      <div style={boxStyle}>🐈</div>
    </p>
  </>
)
