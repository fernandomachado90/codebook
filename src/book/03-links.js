import React from "react"

export const title = "HTML"
export const body = (
  <>
    <h1>Recursos</h1>

    <p>É possível referênciar recursos disponíveis na internet, como links e imagens.</p>

    <h3>Links</h3>
    <p>
      Para incluir um link para outra página da internet, usamos a tag <b>&lt;a href=""&gt;</b> ... <b>&lt;/a&gt;</b>,
      onde <b>href</b> é um atributo que espera como valor o endereço de destino.
    </p>
    <p>
      Atributos são "palavras reservadas" escritas dentro das tags de abertura de elementos e que seguem o padrão{" "}
      <b>atributo="valor"</b>
    </p>
    <p>
      Caso queira abrir a página numa outra janela, adicione o atributo <b>target="_blank"</b>
    </p>
    <code>
      <pre>{`<p>
  clique 
  <a href="https://www.google.com" target="_blank">aqui</a>
  para fazer sua busca :)
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
      Para adicionar imagens, usamos a tag <b>&lt;img/&gt;</b> acompanhada do atributo <b>src=""</b> com o endereço da
      imagem. O atributo <b>alt=""</b> define um texto alternativo para a imagem, tornando o conteúdo acessível por
      leitores de tela. Já o atributo <b>title=""</b> define a mensagem que aparece ao colocar o cursor do mouse sobre a
      imagem.
    </p>

    <code>
      &lt;img alt="ícone do CodeBook" title="CodeBook"
      src="https://fernandomachado90.github.io/codebook/favicon-96x96.png" /&gt;
    </code>

    <img alt="ícone do CodeBook" title="CodeBook" src={`${process.env.PUBLIC_URL}/favicon-96x96.png`} />

    <p>
      Assim como a quebra de linha <b>&lt;br/&gt;</b>, o elemento <b>&lt;img/&gt;</b> não aceita conteúdo.
    </p>
  </>
)
