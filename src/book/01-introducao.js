import React from "react"

export const title = "Introdução"
export const body = (
  <>
    <h1>HTML</h1>

    <p>
      HTML (Hypertext Markup Language) é a linguagem utilizada para <b>estruturar</b> o conteúdo e definir os elementos
      que compõem uma página, tais como parágrafos, imagens, listas, links e outros.
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

    <h3>Negrito e Itálico</h3>
    <p>
      Podemos destacar ou dar ênfase a blocos de texto usando <b>negrito</b> (<b>&lt;b&gt;</b> ou <b>&lt;strong&gt;</b>)
      ou <i>itálico</i> (<b>&lt;i&gt;</b> ou <b>&lt;em&gt;</b>)
    </p>
    <code>&lt;p&gt;Combine &lt;i&gt;tags&lt;/i&gt; e crie &lt;b&gt;destaques&lt;/b&gt;.&lt;/p&gt;</code>

    <h3>Linha</h3>
    <p>
      O elemento <b>&lt;br/&gt;</b> é usado para pular linhas. Note que, diferente dos elementos anteriores, esse
      elemento fecha em si mesmo porque não faz sentido "incluir" algum conteúdo numa quebra de linha.
    </p>

    <p>
      — onde você mora?
      <br />— na outra rua
    </p>

    <code>&lt;p&gt;—onde você mora?&lt;br/&gt;—na outra rua&lt;/p&gt;</code>

    <h3>Comentário</h3>
    <p>
      As vezes, queremos anotar algum conteúdo no arquivo HTML para lembrar de alguma coisa (explicações, referências,
      etc.). Como esse conteúdo é relevante somente para quem desenvolve, usamos comentários para que o navegador
      esconda esse conteúdo.
    </p>
    <code>&lt;!-- o que escrever aqui não aparece na página --&gt;</code>
  </>
)
/*

*/
