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

    (conteúdo) 

</body>`}</pre>
    </code>

    <h3>Parágrafo</h3>
    <p>
      Os blocos de texto que você lê nesse guia estão dentro de elementos <b>&lt;p&gt;</b>
    </p>
    <code>
      <pre>{`<p>Os blocos de texto que você lê nesse guia...</p>`}</pre>
    </code>

    <h3>Comentário</h3>
    <p>
      As vezes, queremos anotar algum conteúdo no arquivo HTML para lembrar de alguma coisa (explicações, referências,
      etc.). Como esse conteúdo é relevante somente para quem desenvolve, usamos comentários para que o navegador
      esconda esse conteúdo.
    </p>

    <p>
      A notação de comentários é <b>&lt;--</b> <i>conteúdo comentado</i> <b>--&gt;</b>
    </p>

    <code>
      <pre>{`<!-- o que escrevermos aqui não aparece na página -->`}</pre>
    </code>
  </>
)
