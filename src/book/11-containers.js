import React from "react"

export const title = "HTML"
export const body = (
  <>
    <h1>Containers</h1>
    <p>
      Para organizar o código ou aplicar estilos uniformes em seções da página, podemos usar elementos "containers" de
      dois tipos: blocos (<b>&lt;div&gt;</b>) ou trechos (<b>&lt;span&gt;</b>)
    </p>

    <p>
      Enquanto os blocos ocupam a linha inteira, os trechos tem a dimensão definida pelo seu conteúdo, como o número de
      caracteres de um texto.
    </p>
    <p>
      Para visualizar os containers, podemos usar a propriedade <b>background</b> em seu estilo.
    </p>
    <p>
      <b>background:</b> _____; <i>(palavra reservada para cor | código hexadecimal | código RGB)</i>
    </p>

    <code>
      <pre>{`.title {
  color: white;
  background: black;
}
.red {
  color: red;
  background: white;
}

<div class="title">
  a última palavra será <span class="red">vermelha</span>
</div>`}</pre>
    </code>

    <div style={{ background: "black", color: "white" }}>
      a última palavra será <span style={{ background: "white", color: "red" }}>vermelha</span>
    </div>

    <br />
    <h2>Semântica</h2>

    <p>
      Com blocos (<b>&lt;div&gt;</b>), trechos (<b>&lt;span&gt;</b>) e estilos CSS, podemos construir praticamente
      qualquer coisa na web. No entanto, é considerado boa prática usar elementos que garantam a semântica da página,
      isto é, não apenas definam sua aparência, mas também indiquem seu sentido. Por exemplo:
    </p>

    <ul>
      <li>
        Usar <b>&lt;strong&gt;</b> e <b>&lt;em&gt;</b> (ao invés de <b>&lt;b&gt;</b> e <b>&lt;i&gt;</b>) para indicar
        ênfase
      </li>
      <li>
        Usar títulos e subtítulos <b>&lt;h1&gt;</b>, <b>&lt;h2&gt;</b>,<b>&lt;h3&gt;</b>,<b>&lt;h4&gt;</b>,{" "}
        <b>&lt;h5&gt;</b>, <b>&lt;h6&gt;</b>
      </li>
      <li>
        Usar <b>&lt;header&gt;</b> para definir o cabeçalho da página
      </li>
      <li>
        Usar <b>&lt;nav&gt;</b> para agrupar elementos de navegação, como menus
      </li>
      <li>
        Usar <b>&lt;article&gt;</b> para artigos e textos principais
      </li>
      <li>
        Usar <b>&lt;section&gt;</b> para dividir conteúdo em seções
      </li>
      <li>
        Usar <b>&lt;figure&gt;</b> para agrupar imagens e legendas
      </li>
      <li>
        Usar <b>&lt;footer&gt;</b> para definir o rodapé da página
      </li>
    </ul>
  </>
)
