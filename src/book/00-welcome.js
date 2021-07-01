import React from "react"

export const title = "CodeBook"
export const body = (
  <>
    <h1>Olá!</h1>
    <p>
      Boas-vindas ao <b>CodeBook</b>!
    </p>
    <p>
      Aqui você pode aprender os fundamentos básicos de <b>HTML</b> e <b>CSS</b>, tecnologias utilizadas para construir
      praticamente todas as coisas que você encontra na <b>internet</b> (como esse tutorial) e também criar as suas
      primeiras <b>páginas web</b>.
    </p>

    <h2>Teoria + Prática = Página</h2>
    <p>A plataforma é dividida em três janelas:</p>

    <table>
      <tbody>
        <tr>
          <td style={{ width: "100px", padding: "30px 10px", textAlign: "center", position: "relative" }}>
            📚 material
            <b style={{ display: "block", position: "absolute", top: "0", right: "3px" }}>&lt; &gt;</b>
          </td>
          <td
            style={{
              width: "100px",
              padding: "30px 10px",
              textAlign: "center",
              color: "#d5d7de",
              background: "#131417",
            }}
          >
            ⌨️ código
          </td>
          <td style={{ width: "100px", padding: "30px 10px", textAlign: "center", background: "white" }}>
            📰 resultado
          </td>
        </tr>
      </tbody>
    </table>

    <p>
      Navegando pelas páginas do <b>material</b>, você vai conhecendo os conceitos essenciais da web enquanto pode ir
      colocando o que aprendeu em prática na janela de <b>código</b> e acompanha o progresso da construção de sua página
      na janela de <b>resultado</b>.
    </p>

    <p>
      Se quiser salvar seu trabalho, clique no botão EDIT (canto superior direito) para acessar o <b>CodePen</b>. Crie
      sua conta e mantenha um portfólio de páginas web!
    </p>

    <h2>Atualizações</h2>
    <ul>
      <li>
        <b>jun/2021:</b> primeira versão do guia <i>(20 páginas)</i>
      </li>
    </ul>

    <h2>Colabore</h2>
    <p>Caso tenha interesse, você pode fazer parte desse projeto em diferentes frentes:</p>

    <ul>
      <li>revisando o material de ensino;</li>
      <li>adicionando novas páginas ao guia;</li>
      <li>melhorando a usabilidade da plataforma;</li>
      <li>recomendando o CodeBook pra alguém;</li>
      <li>
        contribuindo com{" "}
        <a rel="noreferrer" href={process.env.REACT_APP_FEEDBACK_URL} target="_blank">
          ideias ou feedbacks
        </a>
        !
      </li>
    </ul>

    <p>
      Acesse o{" "}
      <a target="_blank" rel="noreferrer" href={process.env.REACT_APP_CONTRIBUTING_URL}>
        GitHub
      </a>{" "}
      do projeto e saiba como colaborar.
    </p>
  </>
)
