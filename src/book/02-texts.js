import React from "react"

export const title = "html"
export const body = (
  <>
    <h1>Texto</h1>

    <h3>Cabeçalho</h3>
    <p>
      As tags <b>&lt;h1&gt;</b>, <b>&lt;h2&gt;</b>, <b>&lt;h3&gt;</b>, <b>&lt;h4&gt;</b>, <b>&lt;h5&gt;</b>,
      <b>&lt;h6&gt;</b> são usadas para representar títulos e cabeçalhos, sendo o nível 1 é o mais alto e o 6 o mais
      baixo.
    </p>

    <code>&lt;h1&gt;H1&lt;/h1&gt; &lt;h2&gt;H2&lt;/h2&gt; ... &lt;h6&gt;H6&lt;/h6&gt;</code>

    <h1>h1</h1>
    <h2>h2</h2>
    <h3>h3</h3>
    <h4>h4</h4>
    <h5>h5</h5>
    <h6>h6</h6>

    <h3>Negrito e Itálico</h3>
    <p>
      Podemos destacar ou dar ênfase a blocos de texto usando <b>negrito</b> (<b>&lt;b&gt;</b> ou <b>&lt;strong&gt;</b>)
      ou <i>itálico</i> (<b>&lt;i&gt;</b> ou <b>&lt;em&gt;</b>)
    </p>

    <code>
      <pre>{`<p>Combine <i>tags</i> e crie <b>destaques</b>.</p>`}</pre>
    </code>

    <h3>Linha</h3>
    <p>
      O elemento <b>&lt;br/&gt;</b> é usado para pular linhas. Note que, diferente dos elementos anteriores, esse
      elemento fecha em si mesmo porque não faz sentido "incluir" algum conteúdo numa quebra de linha.
    </p>

    <code>
      <pre>{`<p>— onde você mora?<br/>— na outra rua</p>`}</pre>
    </code>
    <p>
      — onde você mora?
      <br />— na outra rua
    </p>
  </>
)
