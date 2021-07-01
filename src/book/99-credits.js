import React from "react"

export const title = "Créditos"
export const body = (
  <>
    <h1>VALEU! 🌞</h1>

    <p>
      Que bom que chegou até aqui! O que achou do material e da plataforma? Aprendeu algo novo? Tem alguma ideia de como
      podemos melhorar? Escreva seu{" "}
      <a rel="noreferrer" href={process.env.REACT_APP_FEEDBACK_URL} target="_blank">
        feedback
      </a>
      !
    </p>

    <h2>Próximos passos</h2>

    <p>
      Com o que aprendeu até aqui, você já é capaz de criar suas primeiras páginas web. Essa é uma lista de links para
      seguir estudando HTML, CSS e outras tecnologias:
    </p>

    <ul>
      <li>
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noreferrer">
          A Complete Guide to Flexbox
        </a>{" "}
        <i>(em inglês)</i>
      </li>
    </ul>

    <p>
      Para continuar seu trabalho, clique no botão EDIT (canto superior direito) para acessar o <b>CodePen</b>. Crie sua
      conta e mantenha seu portfólio de páginas web!
    </p>

    <h2>Créditos</h2>

    <p>
      Este guia de estudos foi originalmente desenvolvido entre 2018—2020, em mutirões de trabalho voluntário de pessoas
      consultoras da{" "}
      <a target="_blank" rel="noreferrer" href="https://www.thoughtworks.com/aceleradora">
        ThoughtWorks Brasil
      </a>{" "}
      no âmbito da{" "}
      <a target="_blank" rel="noreferrer" href="http://aceleradora-inclusiva.herokuapp.com/">
        Aceleradora Inclusiva
      </a>
      , um projeto de educação popular em tecnologia viabilizado por uma parceria entre ThoughtWorks Brasil e PUC-RS.
    </p>

    <p>
      Em 2021, o material didático foi disponibilizado no <b>CodeBook</b>, uma plataforma de ensino <i>open-source</i>{" "}
      e, desde então, se tornou aberto a contribuições da comunidade.
    </p>

    <p>Essa é uma lista das pessoas que contribuíram até agora:</p>

    <ul>
      <li>Fernando Machado</li>
      <li> </li>
      <li> </li>
      <li> </li>
    </ul>
  </>
)
