import React from "react"

export const title = "Estrutura"
export const body = (
  <>
    <h1>HTML</h1>

    <p>
      HTML (Hypertext Markup Language) é a linguagem utilizada para <b>estruturar</b> o conteúdo e organizar os
      elementos que compõem uma página, tais como parágrafos, imagens, listas, links, tabelas, botões e outros.
    </p>

    <h2>Elementos</h2>

    <p>
      Para definir os <b>elementos</b> que compõe uma página web, utilizamos tags: estruturas compostas por "palavras
      reservadas" que representam diferentes elementos.
    </p>
    <p>
      Tags são escritas seguindo a estrutura: abertura (<b>&lt;&gt;</b>), conteúdo e fechamento (<b>&lt;/&gt;</b>)
    </p>
    <code>&lt;elemento&gt; conteúdo &lt;/elemento&gt;</code>
    <p>
      O conteúdo de um página web é o conteúdo do elemento <b>&lt;body&gt;</b>
    </p>

    <h3>Cabeçalho</h3>
    <p>
      As tags <b>&lt;h1&gt;</b>, <b>&lt;h2&gt;</b>, <b>&lt;h3&gt;</b>, <b>&lt;h4&gt;</b>, <b>&lt;h5&gt;</b>,
      <b>&lt;h6&gt;</b> são usadas para representar títulos e cabeçalhos, sendo o nível 1 é o mais alto e o 6 o mais
      baixo.
    </p>

    <h1>h1</h1>
    <h2>h2</h2>
    <h3>h3</h3>
    <h4>h4</h4>
    <h5>h5</h5>
    <h6>h6</h6>

    <h3>Parágrafo</h3>
    <p>
      Os blocos de texto que você lê nesse guia estão dentro de elementos <b>&lt;p&gt;</b>
    </p>
    <code>&lt;p&gt;Os blocos de texto que você lê nesse guia...&lt;/p&gt;</code>
  </>
)
