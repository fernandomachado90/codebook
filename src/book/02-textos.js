import React from "react"

export const title = "Textos"
export const body = (
  <>
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
