import React from "react"

export const title = "HTML"
export const body = (
  <>
    <h1>Botões</h1>

    <p>
      Para interagir com os dados de um <b>&lt;form&gt;</b>, é preciso incluir botões no formulário.
    </p>

    <p>
      <b>&lt;input type="_____"&gt;</b>{" "}
      <i>
        (<b>button</b>: nada | <b>reset</b>: limpa dados | <b>submit</b>: envia formulário)
      </i>
      <br />
      <b>&lt;button&gt;</b>...<b>&lt;/button&gt;</b>{" "}
      <i>(envia formulário e aceita conteúdo customizável, como imagens)</i>
      <br />
    </p>

    <form style={{ background: "turquoise" }}>
      <p>
        <label htmlFor="nome">Nome:</label> <input type="text" name="nome" id="nome" />
      </p>
      <p>
        <label htmlFor="email">Email:</label> <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="senha">Senha:</label> <input type="password" name="senha" id="senha" />
      </p>
      <p>
        <label htmlFor="busca">Busca:</label> <input type="search" name="busca" id="busca" />
      </p>

      <p>
        <label htmlFor="quantidade">Quantidade:</label>{" "}
        <input type="number" name="quantidade" id="quantidade" min="0" max="100" step="5" />
      </p>
      <p>
        <label htmlFor="instensidade">Intensidade:</label>{" "}
        <input type="range" name="instensidade" id="instensidade" min="0" max="1000" />
      </p>

      <p>
        Gênero:
        <input type="radio" name="genero" id="genero-f" value="f" /> <label htmlFor="genero-f">feminino</label>
        <input type="radio" name="genero" id="genero-m" value="m" /> <label htmlFor="genero-m">masculino</label>
        <input type="radio" name="genero" id="genero-nb" value="nb" /> <label htmlFor="genero-nb">não-binário</label>
      </p>
      <p>
        Transporte:
        <input type="checkbox" name="veiculo" id="veiculo-b" value="b" /> <label htmlFor="veiculo-b">bicicleta</label>
        <input type="checkbox" name="veiculo" id="veiculo-c" value="c" /> <label htmlFor="veiculo-c">carro</label>
        <input type="checkbox" name="veiculo" id="veiculo-o" value="o" /> <label htmlFor="veiculo-o">ônibus</label>
        <input type="checkbox" name="veiculo" id="veiculo-t" value="t" /> <label htmlFor="veiculo-t">táxi</label>
      </p>

      <p>
        <label htmlFor="alimentacao">Alimentação:</label>{" "}
        <select name="alimentacao" id="alimentacao">
          <option value="0">sem restrições</option>
          <option value="1">ovolactovegetariana</option>
          <option value="2">lactovegetariana</option>
          <option value="3">ovovegetariana</option>
          <option value="4">vegetariana estrita</option>
          <option value="5">vegana</option>
        </select>
      </p>

      <p>
        <label htmlFor="cor">Cor:</label> <input type="color" name="cor" id="cor" />
      </p>
      <p>
        <label htmlFor="horario">Horário:</label> <input type="time" name="horario" id="horario" />
      </p>
      <p>
        <label htmlFor="nascimento">Nascimento:</label>{" "}
        <input type="date" name="nascimento" id="nascimento" min="1900-01-01" max="2999-12-31" />
      </p>
      <p>
        <label htmlFor="agendamento">Agendamento:</label>{" "}
        <input type="datetime-local" name="agendamento" id="agendamento" />
      </p>
      <p>
        <label htmlFor="anexo">Anexo:</label> <input type="file" name="anexo" id="anexo" />
      </p>

      <p style={{ background: "violet" }}>
        <input
          type="button"
          value="Oi!"
          onClick={() => {
            alert("Olá!")
          }}
        />{" "}
        <input type="reset" value="Limpar" /> <input type="submit" value="Enviar" />{" "}
        <button>
          <img alt="CodeBook" src={`${process.env.PUBLIC_URL}/favicon-16x16.png`} />
          Enviar
        </button>
      </p>
    </form>

    <code>
      <pre>{`<input type="button" value="Oi!" onClick="alert('Olá!')" />
<input type="reset" value="Limpar" />
<input type="submit" value="Enviar" />
<button>
  <img src="/codebook/favicon-16x16.png" alt="CodeBook" />
  Enviar
</button>
`}</pre>
    </code>

    <p>
      Por padrão, o botão simples <b>type="button"</b> não possui comportamento. Ao clicar no botão "Oi!", a função
      Javascript <b>alert("Olá!")</b> é chamada para exibir uma mensagem.
    </p>
    <p>
      O botão <b>type="reset"</b> limpa todos os dados do form onde está incluído.
    </p>
    <p>
      Já os botões <b>type="submit"</b> e o <b>&lt;button&gt;</b> tem o mesmo comportamento: enviar os dados dos
      formulário para processamento no servidor. Experimente preencher o formulário e clicar nesses botões para
      visualizar seus dados na <b>barra de endereços</b>.
    </p>
  </>
)
