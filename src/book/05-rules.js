import React from "react"

export const title = "CSS"
export const body = (
  <>
    <h1>Regras</h1>

    <p>
      Criando um elemento<b>&lt;style&gt;</b> ou com um arquivo dedicado (aba <b>CSS</b> no editor ⌨️), podemos definir
      regras de estilos válidas para todos os elementos de nossa página.
    </p>

    <h3>Seletores</h3>

    <p>
      Para definir regras gerais, precisamos utilizar seletores: marcações que referenciam os atributos <b>id=""</b> e{" "}
      <b>class=""</b> ou a própria tag do elemento.
    </p>

    <p>
      A estrutura de cada regra é <b>seletor</b> <b>&#123;</b> <i>estilos...</i> <b>&#125;</b>
    </p>

    <p>
      Para selecionar elementos, basta escrever o nome da própria tag. Para selecionar um <b>id</b>, usamos <b>#</b> e
      para selecionar <b>classe</b>, usamos <b>.</b>
    </p>

    <p>
      Nomes de ids e classes devem ser escolhidos de acordo com a utilidade da regra. Enquanto id só pode aparecer uma
      vez por página, classes aparecem múltiplas vezes.
    </p>

    <code>
      <pre>{`<style>
  p {
    color: red;
  }
  #premium {
    color: gold;
  }
  .authorized {
    color: green;
  }
</style>
<body>
  <p>pendente</p>
  <p id="premium">premium</p>
  <p class="authorized">autorizado</p>
  <p>pendente</p>
  <p class="authorized">autorizado</p>
</body>`}</pre>
    </code>
    <p>
      <p style={{ textShadow: "1px 1px 1px black", lineHeight: "12px", color: "red" }}>pendente</p>
      <p style={{ textShadow: "1px 1px 1px black", lineHeight: "12px", color: "gold" }}>premium</p>
      <p style={{ textShadow: "1px 1px 1px black", lineHeight: "12px", color: "green" }}>autorizado</p>
      <p style={{ textShadow: "1px 1px 1px black", lineHeight: "12px", color: "red" }}>pendente</p>
      <p style={{ textShadow: "1px 1px 1px black", lineHeight: "12px", color: "green" }}>autorizado</p>
    </p>
    <h3>Comentário</h3>
    <p>
      Em CSS, é possível comentar trechos de código e ignorar definições de propriedades embrulhando o conteúdo
      desconsiderado na notação <b>{"/*"}</b> <i>conteúdo comentado</i> <b>{"*/"}</b>.
    </p>

    <code>
      <pre>{`<style>
  p {
    /*
    color: pink; 
    ... tudo que estiver escrito aqui dentro será ignorado
    */

    /* color: hotpink; somente essa linha será ignorada */

    color: deeppink;
  }
</style>

<body>
  <p>qual será meu tom de rosa?</p>
</body>`}</pre>
    </code>

    <p style={{ textShadow: "1px 1px 1px black", lineHeight: "12px", color: "deeppink" }}>qual será meu tom de rosa?</p>
  </>
)
