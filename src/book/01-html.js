import React from "react"

export const title = "HTML"
export const body = (
  <>
    <h1>Estrutura</h1>

    <p>
      HTML (Hypertext Markup Language) é a linguagem usada para definir a <b>estrutura</b> do conteúdo de uma página,
      declarando elementos como parágrafos, imagens, listas, links, tabelas, botões e outros.
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

    <code>
      <pre>{`<body>
    conteúdo
</body>`}</pre>
    </code>

    <h3>Parágrafo</h3>
    <p>
      Os blocos de texto que você lê nesse guia estão dentro de elementos <b>&lt;p&gt;</b>
    </p>
    <code>
      <pre>{`<p>Os blocos de texto que você lê nesse guia...</p>`}</pre>
    </code>

    <h3>Separador</h3>
    <p>
      O elemento <b>&lt;hr/&gt;</b> renderiza um separador na página. Note que, diferente do parágrafo, esse elemento
      "fecha em si mesmo", pois não aceita nenhum conteúdo.
    </p>

    <hr />

    <h3>Comentário</h3>
    <p>
      Quando queremos ocultar algum trecho de código, por ser algo relevante apenas pra quem desenvolve, usamos
      comentários para não renderizar os elementos demarcados. A notação para comentários em HTML é <b>&lt;!--</b>{" "}
      <i>conteúdo comentado</i> <b>--&gt;</b>
    </p>

    <code>
      <pre>{`<!-- <p>o que estiver aqui não aparece na página</p> -->`}</pre>
    </code>
  </>
)
