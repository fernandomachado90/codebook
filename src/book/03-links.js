import React from "react"

export const title = "HTML"
export const body = (
  <>
    <h1>Referência externa</h1>

    <h3>Links</h3>
    <p>
      Para incluir um link para outra página, usamos a tag <b>&lt;a&gt;</b> acompanhada do atributo <b>href</b> com o
      endereço do destino.
    </p>
    <p>
      Atributos também são "palavras reservadas" que acompanham as tags de elementos e são expressas dentro da tag de
      abertura seguindo o padrão <b>atributo="valor"</b>.
    </p>
    <p>
      Definimos o endereço da página no atributo <b>href="http://www..."</b>. Caso queira abrir a página numa outra
      janela, adicione o atributo <b>target="_blank"</b>.
    </p>
    <code>
      <pre>{`<p>
  clique <a href="https://www.google.com/" 
            target="_blank">aqui</a> para fazer sua busca :)
</p>`}</pre>
    </code>

    <p>
      clique{" "}
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        aqui
      </a>{" "}
      para fazer sua busca :)
    </p>

    <h3>Imagens</h3>
    <p>
      Para adicionar imagens, usamos a tag <b>&lt;img/&gt;</b> acompanhada do atributo <b>src</b> com o endereço da
      imagem. O atributo <b>alt</b> define um texto alternativo para a imagem, tornando o conteúdo acessível por
      leitores de tela. Já o atributo <b>title</b> define a mensagem que aparece ao colocar o cursor do mouse sobre a
      imagem.
    </p>

    <code>
      &lt;img alt="ícone do CodeBook" title="CodeBook"
      src="https://fernandomachado90.github.io/codebook/favicon-96x96.png" /&gt;
    </code>

    <img alt="ícone do CodeBook" title="CodeBook" src={`${process.env.PUBLIC_URL}/favicon-96x96.png`} />

    <p>
      Assim como a quebra de linha <b>&lt;br/&gt;</b>, o elemento <b>&lt;img/&gt;</b> não suporta conteúdo.
    </p>
  </>
)
