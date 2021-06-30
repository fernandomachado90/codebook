import React from "react"

export const title = "CSS"
export const body = (
  <>
    <h1>Estilos</h1>

    <p>
      CSS (Cascading Style Sheet) é a linguagem responsável por definir o <b>estilo</b> das páginas, descrevendo regras
      que definem a forma como elementos serão exibidos.
    </p>
    <p>
      Numa analogia com o corpo humano podemos dizer que, enquanto o HTML é o esqueleto que estrutura as partes do
      corpo, o CSS é a pele, os panos e os acessórios.
    </p>

    <h2>Propriedade</h2>
    <p>
      A estrutura de declaração de estilos é <b>propriedade: valor</b>. Por exemplo, para definir a cor de um texto como
      vermelho, declaramos o estilo:
    </p>

    <code>color: red;</code>

    <p>Essa declaração pode feita de duas formas: por elemento ou criando regras gerais.</p>

    <h3>elemento + style</h3>

    <p>
      Ao adicionar o atributo <b>style=""</b> em qualquer elemento HTML, podemos definir estilos válidos somente para
      seu conteúdo.
    </p>

    <code>
      <pre>{`<body>
  <p style="color: red;">esse parágrafo é vermelho</p>
  <p>já esse não é</p>
  <p>esse também não</p>
  <p style="color: blue;">esse parágrafo é azul</p>
  <p>mais um parágrafo padrão</p>
  <p style="color: red;">e mais um parágrafo vermelho</p>
</body>`}</pre>
    </code>

    <p style={{ textShadow: "1px 1px 1px black", lineHeight: "12px", color: "red" }}>esse parágrafo é vermelho</p>
    <p style={{ textShadow: "1px 1px 1px black", lineHeight: "12px" }}>já esse não é</p>
    <p style={{ textShadow: "1px 1px 1px black", lineHeight: "12px" }}>esse também não</p>
    <p style={{ textShadow: "1px 1px 1px black", lineHeight: "12px", color: "blue" }}>esse parágrafo é azul</p>
    <p style={{ textShadow: "1px 1px 1px black", lineHeight: "12px" }}>mais um parágrafo padrão</p>
    <p style={{ textShadow: "1px 1px 1px black", lineHeight: "12px", color: "red" }}>e mais um parágrafo vermelho</p>
  </>
)
