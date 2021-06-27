import React from "react"

export const title = "HTML"
export const body = (
  <>
    <h1>Listas</h1>

    <p>
      O HTML oferece dois tipos de lista: listas ordenadas (<b>&lt;ol&gt;</b>) e desordenadas (<b>&lt;ul&gt;</b>), que
      devem ser usadas de acordo com o sentido da lista. Para cada item a ser incluído, é preciso incluir elementos{" "}
      <i>list-item</i> (<b>&lt;li&gt;</b>) dentro do elemento (<b>&lt;ol&gt;</b> ou <b>&lt;ul&gt;</b>).
    </p>

    <code>
      <pre>{`<h4>Guacamole</h4>
<ul>
  <li>1 abacate brasileiro médio (ou 4 avocados)</li>
  <li>1 tomate grande sem sementes</li>
  <li>1 cebola pequena</li>
  <li>2 dentes de alho bem socados</li>
  <li>1 maço de coentro</li>
  <li>suco de 1 limão grande</li>
  <li>sal, pimenta e azeite</li>
</ul>
<ol>
  <li>Amasse o abacate com um garfo, acrescente o alho socado, o suco de limão, sal e azeite a gosto e misture como um purê.</li>
  <li>Pique a cebola, o tomate e o coentro. Pique bem a pimenta.</li>
  <li>Acrescente os ingredientes picados ao "purê" de abacate.</li>
  <li>Sirva com chips, crackers, tacos, no burrito ou mesmo junto com arroz e feijão.</li>
</ol>`}</pre>
    </code>

    <h4>Guacamole</h4>
    <ul>
      <li>1 abacate brasileiro médio (ou 4 avocados)</li>
      <li>1 tomate grande sem sementes</li>
      <li>1 cebola pequena</li>
      <li>2 dentes de alho bem socados</li>
      <li>1 maço de coentro</li>
      <li>suco de 1 limão grande</li>
      <li>sal, pimenta e azeite</li>
    </ul>

    <ol>
      <li>
        Amasse o abacate com um garfo, acrescente o alho socado, o suco de limão, sal e azeite a gosto e misture como um
        purê.
      </li>
      <li>Pique a cebola, o tomate e o coentro. Pique bem a pimenta.</li>
      <li>Acrescente os ingredientes picados ao "purê" de abacate.</li>
      <li>Sirva com chips, crackers, tacos, no burrito ou mesmo junto com arroz e feijão.</li>
    </ol>
  </>
)
